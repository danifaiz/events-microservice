import { Logger, NotFoundException } from '@nestjs/common';
import {
  DataSource,
  DeleteResult,
  FindOneOptions,
  FindOptionsWhere,
  In,
  QueryRunner,
  Repository,
} from 'typeorm';
import { Base } from './entities/base.entity';

export abstract class EntityRepository<TEntity extends Base> {
  protected abstract readonly logger: Logger;
  protected queryRunner: QueryRunner;
  protected repo: Repository<TEntity>;
  protected dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    
    this.queryRunner = this.dataSource.createQueryRunner();
  }

  async create(data: any): Promise<TEntity> {
    const result = await this.repo.save(data);
    return result;
  }

  async findOne(options: FindOneOptions): Promise<TEntity> {
    const record = await this.repo.findOne(options);

    if (!record) {
      this.logger.warn('Record not found with options', options);
      throw new NotFoundException('Record not found.');
    }
    return record;
  }

  async findAll(): Promise<TEntity[]> {
    return this.repo.find();
  }

  async delete(entity: TEntity): Promise<TEntity>  {
    // await this.dataSource.createQueryBuilder(this.queryRunner)
    // .delete()
    // .from("user")
    // .where("id = :id", { id: entity.id })
    // .execute();
    return this.repo.remove(entity);
  }

  async initTransaction() {
    const session = await this.queryRunner.startTransaction();
    return session;
  }
}

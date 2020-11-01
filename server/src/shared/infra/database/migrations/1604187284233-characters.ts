/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class characters1604187284233 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'characters',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'character_id',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'site_detail_url',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'deck',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'image',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'real_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'publisher',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'creators',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'gender',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'origin',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'count_of_issue_appearances',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'birth',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'powers',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'favorited',
            type: 'boolean',
            default: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('characters');
  }
}

import { SchemaFieldTypes } from 'redis';
import type { RedisClientType, RediSearchSchema } from 'redis';

export class UserShema {
  private static userSchema: RediSearchSchema = {
    '$.name': {
      type: SchemaFieldTypes.TEXT,
      SORTABLE: true,
      AS: 'name',
    },
    '$.age': {
      type: SchemaFieldTypes.NUMERIC,
      SORTABLE: true,
      AS: 'age',
    },
    '$.gender': {
      type: SchemaFieldTypes.TEXT,
      SORTABLE: true,
      AS: 'gender',
    },
  };

  static async init(client: RedisClientType) {
    try {
      await client.ft.create('idx:user', this.userSchema, {
        ON: 'JSON',
        PREFIX: 'user:',
      });
    } catch (e) {
      if (e.message === 'Index already exists') {
        console.log('Index exists already, skipped creation.');
      } else {
        console.error(e);
        process.exit(1);
      }
    }
  }
}

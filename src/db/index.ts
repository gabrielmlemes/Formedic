import 'dotenv/config';

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não está definida nas variáveis de ambiente');
}

const globalForDb = global as unknown as {
  conn: postgres.Sql | undefined;
};

const connectionString = process.env.DATABASE_URL;

const conn =
  globalForDb.conn ??
  postgres(connectionString, {
    max: 10,
    idle_timeout: 20,
    connect_timeout: 10,
  });

if (process.env.NODE_ENV !== 'production') {
  globalForDb.conn = conn;
}

export const db = drizzle(conn, { schema });

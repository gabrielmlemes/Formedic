import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const schedules = pgTable('schedules', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  startTime: timestamp('start_time', {
    withTimezone: true,
    mode: 'date',
  }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'date' }).defaultNow().notNull(),
});

export type Schedule = typeof schedules.$inferSelect;
export type NewSchedule = typeof schedules.$inferInsert;

'use server';

import { desc } from 'drizzle-orm';

import { db } from '@/db';
import { schedules } from '@/db/schema';

export async function getSchedules() {
  try {
    const result = await db.select().from(schedules).orderBy(desc(schedules.startTime));

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    const dbError = error as {
      message: string;
      detail?: string;
      code?: string;
    };
    console.error('Erro ao buscar agendamentos:', {
      message: dbError.message,
      detail: dbError.detail,
      code: dbError.code,
    });

    throw new Error(dbError.message || 'Erro ao buscar agendamentos no banco de dados');
  }
}

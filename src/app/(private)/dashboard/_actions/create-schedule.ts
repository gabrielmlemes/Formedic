'use server';

import { revalidatePath } from 'next/cache';

import { db } from '@/db';
import { schedules } from '@/db/schema';

import { CreateScheduleSchema, createScheduleSchema } from '../_schemas/create-schedule-schema';

type DatabaseError = {
  message: string;
  detail?: string;
  code?: string;
};

export async function createSchedule(data: CreateScheduleSchema) {
  const validation = createScheduleSchema.safeParse(data);
  if (!validation.success) {
    throw new Error(
      `Dados inválidos: ${validation.error.issues.map((issue) => issue.message).join(', ')}`
    );
  }

  const { title, startTime } = validation.data;

  // Converte o horário (HH:MM) para uma data completa do dia atual
  const [hours, minutes] = startTime.split(':').map(Number);
  const now = new Date();
  const startDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    0,
    0
  );

  try {
    const [result] = await db
      .insert(schedules)
      .values({
        title,
        startTime: startDate,
      })
      .returning();

    revalidatePath('/dashboard');
    revalidatePath('/agendamentos');

    return {
      success: true,
      message: 'Agendamento criado com sucesso!',
      data: result,
    };
  } catch (error) {
    const dbError = error as DatabaseError;
    console.error('Erro ao criar agendamento:', {
      message: dbError.message,
      detail: dbError.detail,
      code: dbError.code,
    });

    throw new Error(dbError.message || 'Erro ao criar agendamento no banco de dados');
  }
}

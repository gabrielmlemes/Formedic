'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { createSchedule } from '../_actions/create-schedule';
import { CreateScheduleSchema, createScheduleSchema } from '../_schemas/create-schedule-schema';

export function useCreateSchedule(closeModal?: () => void) {
  const router = useRouter();

  const form = useForm<CreateScheduleSchema>({
    resolver: zodResolver(createScheduleSchema),
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      startTime: '' as CreateScheduleSchema['startTime'],
    },
  });

  async function onSubmit(data: CreateScheduleSchema) {
    try {
      await createSchedule(data);
      toast.success('Agendamento criado com sucesso!');
      form.reset();
      closeModal?.();
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error('Erro ao criar agendamento. Tente novamente.');
    }
  }

  return {
    form,
    onSubmit,
  };
}

import { Schedule } from '@/db/schema';

import { ScheduleCard } from './schedule-card';

type SchedulesListProps = {
  schedules: Schedule[];
};

export function SchedulesList({ schedules }: SchedulesListProps) {
  if (schedules.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-lg font-medium text-muted-foreground">Nenhum agendamento encontrado</p>
        <p className="text-sm text-muted-foreground mt-2">
          Crie seu primeiro agendamento para começar
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {schedules.map((schedule) => (
        <ScheduleCard key={schedule.id} schedule={schedule} />
      ))}
    </div>
  );
}

import { CalendarIcon, ClockIcon } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Schedule } from '@/db/schema';

type ScheduleCardProps = {
  schedule: Schedule;
};

const formatDate = (date: Date): string => {
  const formatted = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
  // Capitaliza a primeira letra do dia da semana
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

const formatTime = (date: Date): string => {
  return new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export function ScheduleCard({ schedule }: ScheduleCardProps) {
  const scheduleDate = new Date(schedule.startTime);
  const formattedDate = formatDate(scheduleDate);
  const formattedTime = formatTime(scheduleDate);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{schedule.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span className="capitalize">{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ClockIcon className="h-4 w-4" />
          <span>{formattedTime}</span>
        </div>
      </CardContent>
    </Card>
  );
}

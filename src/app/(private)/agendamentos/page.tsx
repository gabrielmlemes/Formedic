import { Container, PageContent } from '@/components/ui/page-container';

import { getSchedules } from './_actions/get-schedules';
import AgendamentosPageHeader from './_components/page-header';
import { SchedulesList } from './_components/schedules-list';

export default async function AgendamentosPage() {
  const result = await getSchedules();

  if (!result.success) {
    return (
      <Container>
        <AgendamentosPageHeader />
        <PageContent>
          <p className="text-destructive">
            Erro ao carregar agendamentos. Tente novamente mais tarde.
          </p>
        </PageContent>
      </Container>
    );
  }

  return (
    <Container>
      <AgendamentosPageHeader />
      <PageContent>
        <SchedulesList schedules={result.data} />
      </PageContent>
    </Container>
  );
}

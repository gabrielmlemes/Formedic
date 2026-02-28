import {
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from '@/components/ui/page-container';

const AgendamentosPageHeader = () => {
  return (
    <PageHeader>
      <PageHeaderContent>
        <PageTitle>Agendamentos</PageTitle>
        <PageDescription>Visualize e gerencie todos os seus agendamentos</PageDescription>
      </PageHeaderContent>
    </PageHeader>
  );
};

export default AgendamentosPageHeader;

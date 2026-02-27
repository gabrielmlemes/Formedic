import React from 'react';

import {
  Container,
  PageActions,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from '@/components/ui/page-container';

import { AddScheduleButton } from './add-schedule-button';

const DoctorsPageHeader = () => {
  return (
    <Container>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Controle sua clínica</PageTitle>
          <PageDescription>Painel de criação de agendamentos</PageDescription>
        </PageHeaderContent>

        <PageActions>
          <AddScheduleButton />
        </PageActions>
      </PageHeader>
    </Container>
  );
};

export default DoctorsPageHeader;

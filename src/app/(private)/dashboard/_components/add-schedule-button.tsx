'use client';

import { PlusIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';

const CreateScheduleForm = dynamic(
  () => import('./create-schedule-form').then((mod) => mod.CreateScheduleForm),
  { ssr: false, loading: () => <Skeleton /> }
);

export const AddScheduleButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="size-4" />
          Adicionar agendamento
        </Button>
      </DialogTrigger>

      {open && <CreateScheduleForm setOpen={setOpen} />}
    </Dialog>
  );
};

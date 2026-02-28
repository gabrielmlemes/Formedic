'use client';

import { ActionButton } from '@/components/ui/action-button';
import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useCreateSchedule } from '../_hooks/useCreateSchedule';
import { TIME_SLOTS } from '../_schemas/create-schedule-schema';

const TIME_SLOT_OPTIONS = TIME_SLOTS.map((slot) => ({
  label: slot,
  value: slot,
}));

export const CreateScheduleForm = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const { form, onSubmit } = useCreateSchedule(() => setOpen(false));

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Crie um agendamento</DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form className="space-y-4">
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome do paciente" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="startTime"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Horário</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um horário" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TIME_SLOT_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter className="flex">
            <DialogClose asChild>
              <Button variant="outline" className="flex-1">
                Cancelar
              </Button>
            </DialogClose>

            <ActionButton onSubmitAction={form.handleSubmit(onSubmit)} className="flex-1">
              Cadastrar
            </ActionButton>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

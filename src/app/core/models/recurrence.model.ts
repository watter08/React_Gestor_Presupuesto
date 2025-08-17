export type RecurrenceName =
  | 'Único'
  | 'Diario'
  | 'Semanal'
  | 'Quincenal'
  | 'Mensual'
  | 'Trimestral'
  | 'Anual';

export interface IRecurrence {
  id: number;
  name: RecurrenceName;
  description: string; // se autollenará según name
  createdAt: Date;
}
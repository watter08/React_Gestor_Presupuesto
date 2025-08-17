import { RecurrenceName } from "../models/recurrence.model";

export const RecurrenceDescriptions: Record<RecurrenceName, string> = {
  Único: 'Ingreso que ocurre una sola vez.',
  Diario: 'Ingreso que se repite cada día.',
  Semanal: 'Ingreso que se repite cada semana.',
  Quincenal: 'Ingreso que se repite cada 15 días.',
  Mensual: 'Ingreso que se repite cada mes.',
  Trimestral: 'Ingreso que se repite cada 3 meses.',
  Anual: 'Ingreso que se repite cada año.'
};
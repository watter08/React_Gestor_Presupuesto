import { TypeOfIncomeName } from "../models/incomes.model";

export const TypeOfIncomeDescriptions: Record<TypeOfIncomeName, string> = {
  Fijo: 'Ingreso estable y recurrente (ejemplo: salario, pensión, renta).',
  Variable: 'Ingreso que fluctúa en cantidad o frecuencia (ejemplo: comisiones, propinas, ventas).',
  Extraordinario: 'Ingreso adicional pero esperado en ciertos momentos (ejemplo: aguinaldo, bono anual).',
  Fortuito: 'Ingreso inesperado y no planificado (ejemplo: premio, herencia, lotería).',
};
export type TypeOfIncomeName = 'Fijo' | 'Variable' | 'Extraordinario' | 'Fortuito';

export interface ITypeOfIncome {
  id: number;
  name: TypeOfIncomeName;
  description: string; // pero se rellena automáticamente
  createdAt: Date;
}

export interface IIncome {
  id: number;
  typeOfIncomeId: number;
  recurrenceId: number;
  title: string;
  description: string;
  grossAmount: number;
  discountPercentage: number;
  discountAmount: number;
  netAmount: number;
  createdAt: Date;
}
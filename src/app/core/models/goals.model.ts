export type GoalType =
  | 'Ahorro'
  | 'Viaje'
  | 'Compra'
  | 'Inversión'
  | 'Educación'
  | 'Emergencia'
  | 'Otro';

export type GoalStatus = 'Pendiente' | 'En progreso' | 'Completada' | 'Cancelada';

export interface IGoal {
  id: number;
  title: string;
  description: string;
  type: GoalType;        // 👈 tipo de la meta
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  status: GoalStatus;
  createdAt: Date;
  updatedAt: Date;
}
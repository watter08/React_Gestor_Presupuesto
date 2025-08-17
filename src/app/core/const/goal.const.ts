import { GoalType } from "../models/goals.model";

export const GoalTypeDescriptions: Record<GoalType, string> = {
  Ahorro: 'Meta destinada a guardar dinero sin un fin específico.',
  Viaje: 'Meta relacionada con viajes o vacaciones.',
  Compra: 'Meta para adquirir un bien o servicio específico.',
  Inversión: 'Meta destinada a generar rendimientos a futuro.',
  Educación: 'Meta para gastos de estudios, cursos o formación.',
  Emergencia: 'Meta de ahorro para cubrir imprevistos.',
  Otro: 'Meta que no encaja en las categorías anteriores.',
};
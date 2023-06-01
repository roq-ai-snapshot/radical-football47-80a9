import { TrainingPlanInterface } from 'interfaces/training-plan';

export interface ExerciseInterface {
  id?: string;
  name: string;
  description?: string;
  training_plan_id: string;

  training_plan?: TrainingPlanInterface;
  _count?: {};
}

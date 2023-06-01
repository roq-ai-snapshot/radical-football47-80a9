import * as yup from 'yup';
import { performanceDataValidationSchema } from 'validationSchema/performance-data';
import { playerTrainingPlanValidationSchema } from 'validationSchema/player-training-plans';

export const playerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
  performance_data: yup.array().of(performanceDataValidationSchema),
  player_training_plan: yup.array().of(playerTrainingPlanValidationSchema),
});

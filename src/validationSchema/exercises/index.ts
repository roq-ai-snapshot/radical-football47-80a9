import * as yup from 'yup';

export const exerciseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  training_plan_id: yup.string().nullable().required(),
});

import * as yup from 'yup';

export const performanceDataValidationSchema = yup.object().shape({
  data: yup.string().required(),
  timestamp: yup.date().required(),
  player_id: yup.string().nullable().required(),
});

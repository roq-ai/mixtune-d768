import * as yup from 'yup';

export const recipeValidationSchema = yup.object().shape({
  title: yup.string().required(),
  instructions: yup.string().required(),
  image: yup.string(),
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});

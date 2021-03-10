import * as yup from 'yup';

export default yup.object().shape({
  username: yup.string().required().trim(),
  password: yup.string().required().trim(),
});

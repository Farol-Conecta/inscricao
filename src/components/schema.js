import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
  cpf: Yup.string().required(),
  phone: Yup.string().required(),
  data: Yup.date().required(),
});

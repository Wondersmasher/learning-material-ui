import * as yup from "yup";

export const ValidateSchema = yup.object().shape({
  title: yup.string().required("Required"),
  note: yup.string().required("Required"),
});

export default ValidateSchema;

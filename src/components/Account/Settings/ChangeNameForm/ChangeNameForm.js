import { Form } from "semantic-ui-react";
import styles from "./ChangeNameForm.module.scss";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeNameForm.Form";
import { useAuth } from "@/hooks/userAuth";

const ChangeNameForm = () => {

  const {user} = useAuth()

console.log(user);
  const formik = useFormik({
    initialValues: initialValues(user?.firstname, user?.lastname),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log(formValue);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Nombre y apellidos</label>

      <div className={styles.content}>
        <Form.Input
          name="firstname"
          placeholder="Nombre "
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.errors.firstname}
        />
        <Form.Input
          name="lastname"
          placeholder="apellidos"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.errors.lastname}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>Enviar</Form.Button>
      </div>
    </Form>
  );
};

export default ChangeNameForm;

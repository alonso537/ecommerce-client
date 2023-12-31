import { Form } from "semantic-ui-react";
import Styles from "./ChangeEmailForm.module.scss";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { initialValues, validationSchema } from "./ChangeEmailForm.form";
import { User } from "@/api/user";
import { useAuth } from "@/hooks/userAuth";

const userCtrl = new User()

const ChangeEmailForm = () => {
  const {user, updateUser} = useAuth()


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        // console.log(formValue);
        await userCtrl.updateMe(user.id, {
          email: formValue.email
        })
        updateUser("email", formValue.email)
        formik.handleReset()
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className={Styles.form}>
      <label>Cambiar correo electronico</label>
      <Form.Input
        name="email"
        placeholder="Nuevo Correo electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="repeatEmail"
        placeholder="Repite el Correo electronico"
        value={formik.values.repeatEmail}
        onChange={formik.handleChange}
        error={formik.errors.repeatEmail}
      />
      <Form.Button type="submit" loading={formik.isSubmitting}>
        Enviar
      </Form.Button>
    </Form>
  );
};

export default ChangeEmailForm;

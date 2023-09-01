import * as Yup from 'yup';

export const initialValues = () => ({
    email: '',
    username: '',
    name: '',
    password: '',

})

export const validationSchema = () => Yup.object({
    email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
    username: Yup.string().required('El nombre de usuario es obligatorio'),
    name: Yup.string().required('El nombre y apellido es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
})
import * as Yup from 'yup'


export const initialValues = (firstname, lastname) => {
    return {
        firstname,
        lastname
    }
}

export const validationSchema = () => {
    return Yup.object({
        firstname: Yup.string().required('Es necesario'),
        lastname: Yup.string().required('Es necesario'),

    })
}
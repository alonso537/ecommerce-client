import React from 'react'
import styles from './sign-up.module.scss'
import JoinLayout from '@/layouts/JoinLayout/JoinLayout'
import Link from 'next/link'
import RegisterForm from '@/components/Auth/RegisterForm/RegisterForm'

const SignUpPage = () => {
  return (
    <>
        <JoinLayout>
        <div className={styles.signUp}>
            <h3>Crear Cuenta</h3>
        <RegisterForm />
        <div className={styles.actions}>
              <Link href="/join/sign-in">
                Ingresar
              </Link>
            </div>
        </div>


        </JoinLayout>
    </>
  )
}

export default SignUpPage
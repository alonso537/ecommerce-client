import React from 'react'
import styles from './sign-in.module.scss'
import JoinLayout from '@/layouts/JoinLayout/JoinLayout'
import Link from 'next/link'
import LoginForm from '@/components/Auth/LoginForm/LoginForm'

const SignInPage = () => {
  return (
    <>
        <JoinLayout>
        <div className={styles.signUp}>
            <h3>Crear Cuenta</h3>
        <LoginForm />
        <div className={styles.actions}>
              <Link href="/join/sign-up">
                Registrate
              </Link>
            </div>
        </div>
        </JoinLayout>
    </>
  )
}

export default SignInPage
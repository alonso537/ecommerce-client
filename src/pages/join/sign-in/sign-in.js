import React from 'react'
import styles from './sign-in.module.scss'
import JoinLayout from '@/layouts/JoinLayout/JoinLayout'

const SignInPage = () => {
  return (
    <>
        <JoinLayout>
        <div className={styles.signIn}>
            <h3>Iniciar Sesión</h3>
        </div>
        </JoinLayout>
    </>
  )
}

export default SignInPage
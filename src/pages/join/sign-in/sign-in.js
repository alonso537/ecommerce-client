import React from 'react'
import styles from './sign-in.module.scss'
import JoinLayout from '@/layouts/JoinLayout/JoinLayout'
import Link from 'next/link'

const SignInPage = () => {
  return (
    <>
        <JoinLayout>
        <div className={styles.signIn}>
            <h3>Iniciar Sesión</h3>

            <div className={styles.actions}>
              <Link href="/join/sign-up">
                Registrarte
              </Link>
            </div>
        </div>
        </JoinLayout>
    </>
  )
}

export default SignInPage
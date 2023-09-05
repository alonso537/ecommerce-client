import { useAuth } from '@/hooks/userAuth'
import Link from 'next/link'
import React from 'react'
import {Button} from 'semantic-ui-react'

const index = () => {

  const {logout, user} = useAuth()

  return (
    <div>
      <Button primary>
        Ir AL Login
      </Button>

      {
        user ? (
          <div>
          <p>Hola, {user?.firstname} {user.lastname}</p>
          <Button
            onClick={logout}
            primary
          >
            Cerrar Session
          </Button>
          </div>
        ) : (
          <div>
            <Link href='/join/sign-in'>
              Iniciar session
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default index
import Info from '@/components/Account/Info/Info'
import BasicLayout from '@/layouts/BasicLayout/BasicLayout'
import React from 'react'
import { Tab } from 'semantic-ui-react'
import styles from './Account.module.scss';
import { useAuth } from '@/hooks/userAuth';
import { useRouter } from 'next/router';
import ChangeNameForm from '@/components/Account/Settings/ChangeNameForm/ChangeNameForm';
import Separator from '@/components/Shared/Separator/Separator';

const Account = () => {

  const {user, logout} = useAuth()
  const router = useRouter()


  if(!user) {
    router.push('/')
    return null
  }

  const onLogout = () => {
    logout()
    router.push('/join/sign-in')
  }

  const panes = [
    {
      menuItem: 'Mis Pedidos',
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis Pedidos...</p>

        </Tab.Pane>
      )
    },
    {
      menuItem: 'Lista de deseos',
      render: () => (
        <Tab.Pane attached={false}>
          <p>Lista de deseos...</p>

        </Tab.Pane>
      )
    },
    {
      menuItem: 'Direcciones',
      render: () => (
        <Tab.Pane attached={false}>
          <p>direcciones...</p>

        </Tab.Pane>
      )
    },
    {
      menuItem: {icon: 'settings', content: 'Ajustes'},
      render: () => (
        <Tab.Pane attached={false}>
          <ChangeNameForm />
          <Separator height={80} />
        </Tab.Pane>
      )
    },
    {
      menuItem: {
        icon: 'logout',
        content: '',
        onClick: onLogout
      }
    }
  ]

  
  return (
    <BasicLayout isContainer relative>
      <Info />

      <Tab menu={{secondary: true, pointing: true} } panes={panes} className={styles.tabs} />
    </BasicLayout>
  )
}

export default Account
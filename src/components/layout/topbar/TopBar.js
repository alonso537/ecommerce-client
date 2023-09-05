import React from 'react'
import styles from './TopBar.module.scss'
import Link from 'next/link'
import {Image} from 'semantic-ui-react'
import Account from '../account/Account'

const TopBar = ({isOpenSearch}) => {
  return (
    <div className={styles.topBar}>
        <div className={styles.left}>
            <Link href='/'>
                <Image src='/images/logo.png' alt='Gaming' />
            </Link>
        </div>

        <div className={styles.center}>
            <span>MENU</span>
        </div>

        <div className={styles.right}>
            <Account />
        </div>
    </div>
  )
}

export default TopBar
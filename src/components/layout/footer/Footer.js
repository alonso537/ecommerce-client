import React from 'react'
import styles from './Footter.module.scss';
import { Button, Container, Image } from 'semantic-ui-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <Container>
            <div className={styles.columns}>
                <div>
                    <Link href='/'>
                        <Image src='images/logo.png' alt='Gaming' />
                    </Link>
                </div>

                <div>
                    <ul>
                        <li as={Link} href='#'>
                            Terminos y condiciones
                        </li>
                        <li as={Link} href='#'>
                            Politica de privacidad
                        </li>
                        <li as={Link} href='#'>
                            Contacto
                        </li>
                        <li as={Link} href='#'>
                            FAQs
                        </li>
                        
                    </ul>
                </div>

                <div className={styles.social}>
                    <Button as='a' href='#' circular color='facebook' icon='facebook'/>
                    <Button as='a' href='#' circular color='twitter' icon='twitter'/>
                    <Button as='a' href='#' circular color='linkedin' icon='linkedin'/>
                    <Button as='a' href='#' circular color='youtube' icon='youtube'/>
                </div>
            </div>

            <div className={styles.copyright}>
                <span>Copyright 2023 Gaming - All rights reserved</span>
            </div>
        </Container>
    </div>
  )
}

export default Footer
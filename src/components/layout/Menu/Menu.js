import React, { useEffect, useState } from 'react'
import styles from './Menu.module.scss'
import { Platform } from '@/api/platform'


const platformCtrl = new Platform()

const Menu = ({isOpenSearch}) => {
    const [platforms, setPlatforms] = useState(null)

    useEffect(() => {
      (async () => {
        try {
            //TODO: peticion...
            const response = await platformCtrl.getAll()
            setPlatforms(response)
        } catch (error) {
            console.log(error);
        }
      })()
    }, [])
    
    console.log(platforms);

  return (
    <div>Menu 1</div>
  )
}

export default Menu
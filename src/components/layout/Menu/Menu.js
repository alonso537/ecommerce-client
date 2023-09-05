import React, { useEffect, useState } from 'react'
import styles from './Menu.module.scss'
import { Platform } from '@/api/platform'
import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import { map } from 'lodash'


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
    <div className={styles.platforms}>
        {
            map(platforms?.data, (platform) => {
                return (
                    <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
                    <Image src={platform?.attributes.icon.data.attributes.url} />
                    {
                        platform?.attributes?.title
                    }
                </Link>
                )
            })
        }
    </div>
  )
}

export default Menu
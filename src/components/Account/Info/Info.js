
import { useAuth } from '@/hooks/userAuth';
import styles from './Info.module.scss';
import { DateTime } from 'luxon';
import { Button, Icon } from 'semantic-ui-react';



const Info = () => {
    const {user} = useAuth()

    // const createdAt = new Date(user?.createdAt).toDateString()



  return (
    <div className={styles.info}>
        <Button icon className={styles.user}>
            <Icon name='user outline' />
        </Button>
        <h3 className={styles.username}>
            {user?.username}
        </h3>
        <h4 className={styles.email}>
            {user?.email}
        </h4>
        <p className={styles.createdAt}>
            Miembro desde {DateTime.fromISO(user?.createdAt, {locale: 'es'}).toFormat('DDD')}
        </p>
    </div>
  )
}

export default Info
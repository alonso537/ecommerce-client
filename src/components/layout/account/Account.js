import React from "react";
import styles from "./Account.module.scss";
import { useRouter } from "next/router";
import { Button, Icon, Label } from "semantic-ui-react";
import { useAuth } from "@/hooks/userAuth";
import classNames from "classnames";

const total = 5

const Account = () => {
  const { user } = useAuth();
  const router = useRouter();

  const goToLogin = () => router.push('/join/sign-in')
  const goToAccount = () => router.push('/account')
  const goToCar = () => {
    if(!user) goToLogin()
    else router.push('/car')
  }


  return <div
    className={styles.account}
  >
    <Button icon className={styles.car}>
      <Icon name='cart' onClick={goToCar} />
      {
        total > 0 && <Label circular>{total}</Label>
      }
    </Button>

      <Button icon className={classNames({[styles.user]: user})}>
        <Icon name='user outline' onClick={user ? goToAccount : goToLogin} />
      </Button>

    
  </div>;
};

export default Account;

import { Button } from "semantic-ui-react";
import Styles from "./AddAddress.module.scss";
import { useState } from "react";

const AddAddress = () => {
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState)


  return (
    <>
      <Button
        primary
        className={Styles.addbtn}
        onClick={onOpenClose}
      >
        Crear
      </Button>
    </>
  );
};

export default AddAddress;

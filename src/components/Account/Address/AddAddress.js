import { Button } from "semantic-ui-react";
import Styles from "./AddAddress.module.scss";
import { useState } from "react";
import BasicModal from "@/components/Shared/BasicModal/BasicModal";

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

      <BasicModal 
        show={show}
        close={onOpenClose}
        title={'Nueva Direccion'}
      >
        <h2>Contenido Modal</h2>
      </BasicModal>
    </>
  );
};

export default AddAddress;

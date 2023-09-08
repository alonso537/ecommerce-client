import { Form } from "semantic-ui-react";
import styles from "./AddressForm.module.scss";

const AddressForm = ({ onClose }) => {
  return (
    <Form>
      <Form.Input name="title" placeholder="Titulo de la direccion" />

      <Form.Group widths="equal">
        <Form.Input name="name" placeholder="Nombre y apellidos" />
        <Form.Input name="address" placeholder="Direccion" />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input name="state" placeholder="Estado" />
        <Form.Input name="city" placeholder="Ciudad" />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input name="postal_code" placeholder="Codigo postal" />
        <Form.Input name="phone" placeholder="Telefono" />
      </Form.Group>

      <Form.Button type='submit' fluid>
        Enviar
      </Form.Button>
    </Form>
  );
};

export default AddressForm;

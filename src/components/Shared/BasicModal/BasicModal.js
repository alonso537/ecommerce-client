import { Modal } from 'semantic-ui-react'
import style from './BasicModal.module.scss'




const BasicModal = ({children, show, close, title}) => {
  return (
    <Modal open={show} onClose={close} size='small'>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>{children}</Modal.Content>
    </Modal>
  )
}

export default BasicModal
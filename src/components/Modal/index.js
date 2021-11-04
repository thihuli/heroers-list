import './styles.scss'

function Modal ({ children, visible, onClose }) {
  return (
    <>
      {
        visible &&
          <div
            className='modal'
            onClick={onClose}
          >
            {children}
          </div>
      }
    </>
  )
}

export default Modal

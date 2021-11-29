import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop2 from './Backdrop2';
import ModalOverLay2 from './ModalOverLay2';

const DeleteModal = (props) => {
    
    return(
        <React.Fragment>
        {ReactDOM.createPortal (
            <Backdrop2 onClick={props.onCancel}/>,
            document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal (
            <ModalOverLay2 onDelete={props.onDelete} onCancel={props.onCancel}>{props.children}</ModalOverLay2>,
            document.getElementById('modal-root')
        )}
      </React.Fragment>
    )
}
export default DeleteModal;

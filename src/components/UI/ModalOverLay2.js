import React,{useState} from 'react';
import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';


const ModalOverLay2 = (props) => {
    return(
        <Card className={classes.modal}>
        <h1>Delete?</h1>
        <Button onClick={props.onDelete}>Yes</Button>
        <Button onClick={props.onCancel} >No</Button>
    </Card>
    )
}
export default ModalOverLay2;
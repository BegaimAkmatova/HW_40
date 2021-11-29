import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import DeleteModal from '../UI/DeleteModal';
import classes from './UsersList.module.css';

const UsersList = (props) => {

    const [modalDelete, setModalDelete] = useState(false);
    
    const deleteHandler = () => {
        setModalDelete(true)
    }


    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user =>
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                        <Button onClick={deleteHandler}>Delete</Button>
                        {modalDelete && <DeleteModal onDelete={() => props.onDelete(user.id)} onCancel={() => setModalDelete(false)}/>}
                    </li>
                    )}
            </ul>
        </Card>
    )
}
export default UsersList;
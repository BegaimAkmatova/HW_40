import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // setUserList([
    //   ...userList,
    //   {name:uName, age:uAge, id: Math.random().toString()}
    // ])

    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {name:uName, age:uAge, id: Math.random().toString()}
      ]
    })
  }

  function onDelete(id) {
    setUserList(prev => {
      const updatedDATA = prev.filter(item => item.id !== id)
      return updatedDATA
    })
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList} onDelete={onDelete}/>
    </React.Fragment>
  );
}

export default App;



import axios from "axios";
import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    await axios.get("http://localhost:8000/users").then((res) => {
      console.log(users);
      setUsers(res.data)
    })

  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className='container'>
        <h3>CRUD Operation</h3>
        <div className="input-search">
          <input type="search" name="" id="" />
          <button className='btn'>Add record</button>
        </div>
        <div className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user,index) => {
              return (
                <tr key={user.id}>
                  <td>{index}</td>
                  <td>Ram Kumar</td>
                  <td>25</td>
                  <td>Salen</td>
                  <td><button className='btn green'>Edit</button></td>
                  <td><button className='btn red'>Delete</button></td>
                </tr>)
            })}
          </tbody>
        </div>
      </div>
    </>
  )
}

export default App

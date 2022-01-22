import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory , Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './home.css';
import { toast } from 'react-toastify';
const Home = () => {
    const [data ,setData] = useState([]);

    const history = useHistory();
    useEffect(()=> {
        getUsers();
    },[]);
    const getUsers = async() => {
        const response = await axios.get('http://localhost:5000/users');
        if(response.status === 200){
            setData(response.data);
        }
    };
    


    const deleteUser = async(id) => {
        if(window.confirm('Are u sure u want to delete')) {
        const response = await axios.delete(`http://localhost:5000/users/${id}`);
        if (response.status === 200){
            toast.success(response.data);
            getUsers();
            
            history.push('/');

        }
    }
    };
    console.log(data);
    return (
        <div style = {{ marginTop:'150px'}}>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style = {{ textAlign : 'center'}}> No : </th>
                        <th style = {{ textAlign : 'center'}}> Name : </th>
                        <th style = {{ textAlign : 'center'}}> Email : </th>
                        <th style = {{ textAlign : 'center'}}> Contact : </th>
                        <th style = {{ textAlign : 'center'}}> Action : </th>
                    </tr>
                </thead>
                <tbody>
                    {data && 
                        data.map((item,index) => {
                            return (
                                <tr key = {index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.Phone}</td>
                                    <td>
                                        <Link to = {`/update/${item.id}`}>
                                            <button className='btn btn-edit'>
                                                Edit
                                            </button>
                                            <button className='btn btn-delete' onClick={()=> deleteUser(item.id)}> Delete</button>
                                        </Link>
                                        <Link to = {`/view/${item.id}`}>
                                            <button className='btn btn-view'>
                                                View
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
            
        </div>
    )
}

export default Home;
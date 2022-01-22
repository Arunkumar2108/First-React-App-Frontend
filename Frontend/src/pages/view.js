import React ,{ useEffect , useState} from 'react';
import { useParams,Link} from 'react-router-dom';
import axios from 'axios';
const View = () => {
    const  [user,setUser] = useState(null);
    const {id} = useParams(); 

    useEffect(() => {
        if(id){
            getSingleUser(id);
        } 
    },[id])

    const getSingleUser = async (id) => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        if(response.status === 200) {
            setUser({...response.data[0]});
            // toast.success(response.data);
        }
    };
    return (
        <div style ={{marginTop: '150px'}}>
            <div className='card'>
                <div className='card-header'>
                    <p>
                        User Contact Detail
                    </p>
                </div>
                <div className='container'>
                    <span>Id:</span>
                    <span>{id}</span>
                    <br />
                    <br />
                    <span>Name:</span>
                    <span>{user && user.name}</span>
                    <br />
                    <br />
                    <span>Email:</span>
                    <span>{user && user.email}</span>
                    <br />
                    <br />
                    <span>Mobile Number:</span>
                    <span>{user && user.Phone}</span>
                    <br />
                    <br />
                    <Link to = "/">
                        <button Classname = 'btn btn-edit'>Go Back</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default View;
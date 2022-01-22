import React , {useEffect , useState} from 'react';
import { useHistory, useLocation, useParams} from 'react-router-dom';
import axios from 'axios';
import './add.css';
import { toast } from 'react-toastify';

const InitialState = {
    name:'',
    email:'',
    Phone:''
}
const AddEdit = () => {
    
    const [state, setState] = useState({
        name:'',
        email:'',
        Phone:''
    });
    
    const { name,email,Phone} = state;
    
    const history = useHistory();

    const {id} = useParams(); 

    useEffect(() => {
        if(id){
            getSingleUser(id);
        } 
    },[id])

    const getSingleUser = async (id) => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        if(response.status === 200) {
            setState({...response.data[0]});
            // toast.success(response.data);
        }
    };

    const addContact = async(data) => {
        const response = await axios.post('http://localhost:5000/user',data);
        if (response.status ===200 ) {
            toast.success(response.data);
        }
    };


    const updateContact = async(data,id) => {
        const response = await axios.put(`http://localhost:5000/users/${id}`,data);
        if (response.status ===200 ) {
            toast.success(response.data);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !Phone){
            toast.error('Please provide values in all the field'); 
        }
        else{
            if(!id) {
            addContact(state);
            history.push('/');
        }else{
            updateContact(state,id);
        } 

        
    }
};

    const handleInputChange = (e) => {
        let {name,value} = e.target;
        setState({
            ...state,
            [name] : value
        });
    };

    console.log('state: ', state)

    return (
        <div style = {{ marginTop : '100px'}}>
            <form 
                style={{
                    margin: 'auto',
                    padding: '15px',
                    maxwidth:'400px',
                    alignContent:'center',
                }}
                onSubmit={handleSubmit}
                >
                <label htmlFor='name'>Name:</label>
                <input 
                    type = 'text' 
                    id='name' 
                    name='name' 
                    placeholder='Enter Name ...' 
                    onChange={handleInputChange}
                    value = {name}
                />
                <label htmlFor='email'>Email:</label>
                <input 
                    type = 'text'
                    id='email' 
                    name='email' 
                    placeholder='Enter Email ...' 
                    onChange={handleInputChange}
                    value = {email}
                />
                <label htmlFor='Phone'>Phone Number:</label>
                <input 
                    type = 'number' 
                    id='Phone' 
                    name='Phone' 
                    placeholder='Enter Phone ...' 
                    onChange={handleInputChange}
                    value = {Phone}
                />
                <input type = 'submit' value = {id ? 'update' : 'add' }/>  
            </form>
            
        </div>
    )
}

export default AddEdit;
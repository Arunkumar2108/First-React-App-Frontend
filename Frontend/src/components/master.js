import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './master.css';
const Master = () => {
    const [ activeTab, setActiveTab] = useState("home");
    const location = useLocation();
    useEffect(()=> {
        if(location.pathname === '/'){
            setActiveTab('home');
        }
        else if(location.pathname === '/add'){
            setActiveTab('addEdit');
        }
        else if (location.pathname === '/about') {
            setActiveTab('about');
        }
    },[location]);
    return (
       <div className='header'>
           <p className='logo'>User Management Information</p>
            <div className='header-right'>
                <Link to = '/'>
                    <p className={`${activeTab === 'home' ? "active" : ''}`}
                        onClick={() => setActiveTab('home')}>
                        Home
                    </p>        
                </Link> 
                <Link to = '/add'>
                    <p className={`${activeTab === 'addEdit' ? "active" : ''}`}
                        onClick={() => setActiveTab('addEdit')}>
                       Add User
                    </p>        
                </Link> 
                <Link to = '/about'>
                    <p className={`${activeTab === 'about' ? "active" : ''}`}
                        onClick={() => setActiveTab('about')}>
                        About
                    </p>        
                </Link> 
            </div>
       </div>
    )
}

export default Master;
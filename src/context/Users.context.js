import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext({
    user : [],
    setUser : () => Promise,
    input : [],
    setInput : () => Promise,
    handleSignup : () => null,
    handleLogin : () => null
})

export const useUser = () => useContext(UserContext);

export default function UsersContextProvider({children}) {

    const [user,setUser] = useState([]);
    const [input,setInput] = useState(null);

    useEffect(() => {
        const URL = process.env.NODE_ENV === 'development'? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/users` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/users`;
        axios.get(URL)
            .then(res => {
                // console.log(res.data.result);
                setUser(res.data.result);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    const navigat = useNavigate();
    const handleSignup = (event) => {
        event.preventDefault();
        const SIGNUP_URL = process.env.NODE_ENV === 'development'? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/signup/createUser` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/signup/createUser`;
        axios.post(SIGNUP_URL,input)
            .then(res => {
            navigat('/AccountCreated')
            })
            .catch(err =>{
            alert("Something Went Wrong")
            console.log("Account Created Failed",err);
            })
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const LOGIN_URL = process.env.NODE_ENV === 'development'? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/login` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/login`;
        axios.post(LOGIN_URL,input)
            .then(res => {
                if(res.data.message === "Login Successful!!"){
                    navigat('/loginSuccess');
                }
                else{
                    alert(res.data.message);
                }
            })
            .catch(err => {
                alert("Something Went Wrong");
                console.log(err);
            })
    }

    const value = {
        user,
        setUser,
        input,
        setInput,
        handleSignup,
        handleLogin
    }

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

import axios from "axios";
import { toast } from 'react-toastify';

export const userLogin = (reqObj) => async dispatch => {
    dispatch({type: 'LOADING', payload: true});

    try{
        const user = await axios.post('/api/user/login', reqObj);
        localStorage.setItem('user',JSON.stringify(user.data));
        toast.success('Login Successfully!');
        dispatch({type: 'LOADING', payload: false})

    }catch(error){
        console.log(error);
        toast.error('Error, Try again!');
        dispatch({type: 'LOADING', payload: false});
    }
}

export const userRegister = (reqObj) => async dispatch => {
    dispatch({type: 'LOADING', payload: true});

    try{
        const user = await axios.post('/api/user/register', reqObj);
        toast.success('Registration Successfully!');
        dispatch({type: 'LOADING', payload: false})

    }catch(error){
        console.log(error)
        toast.error('Error, Try again!');
        dispatch({type: 'LOADING', payload: false});
    }
}
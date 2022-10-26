import React from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import { userLogin } from '../redux/user'

const Login = () => {

  const dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(userLogin(values));
    console.log(values);
  }
  
  return (
    <Layout>
     <div className='form-container'>
      <div className='form-groups'>
        <form className='form' onSubmit={onFinish}>
          <div className='form-group'>
            <h3 className='form-title'>Login</h3>
            <label htmlFor='username'>Username</label>
            <input type="text" className="input" id="username" required />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type="password" className="input" id="password" required />
          </div>
          <div className='form-group'>
          <button className='rent-now'>Login</button>
          </div>
          <div className='form-group'>
            <p> Don't have an account? <a href="/register" className='form-link'>Here for Register</a></p>
          </div>
        </form>
      </div>
     </div>
    </Layout>
  )
}

export default Login

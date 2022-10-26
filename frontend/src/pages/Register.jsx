import React from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import { userRegister } from '../redux/user'


const Register = () => {

  const dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(userRegister(values))
    console.log(values)
  }

  return (
    <Layout>
        <div className='form-container'>
      <div className='form-groups'>
        <form className='form' onSubmit={onFinish}>
          <div className='form-group'>
            <h3 className='form-title'>Register</h3>
            <label htmlFor='username'>Username</label>
            <input type="text" className="input" id="username" required />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type="password" className="input" id="password" required />
          </div>
          <div className='form-group'>
            <label htmlFor='rpassword'>Retype Password</label>
            <input type="password" className="input" id="rpassword" required />
          </div>
          <div className='form-group'>
          <button className='rent-now'>Register</button>
          </div>
          <div className='form-group'>
            <p> You have an account? <a href="/login" className='form-link'>Here for Login</a></p>
          </div>
        </form>
      </div>
     </div>
    </Layout>
  )
}

export default Register
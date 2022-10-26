import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import { getAllCars } from '../redux/actions/actions'

const Home = () =>{
  
  const {cars} = useSelector(state => state.reducer);
  const {loading} = useSelector(state => state.reducer);

  console.log(cars)
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getAllCars())
  }, [dispatch])


  
  return (
    
   
    <Layout>
     <div className='slider'>
      <div className='left'>
        <h1 className='title'> Kragujevac Car Hire</h1>
      </div>
      <div className='right'>
        <img src='./images/slider/peugeot.png' alt=''/>
      </div>
     </div>
     <div>
     <div className='content'>
        <div className='content-row'>
          <h1 className='big-tilte'>Top Cars for Rent</h1>
        </div>
      <div className='content-row'>

        </div>
        <div className='content-row'>
          {loading ? (<Loading />): (
            <div className='content-groups'>
            {cars.map((car) => {
              return (
                <div className='card' key={car._id}>
                <div className='card-body'>
                  <img src={car.image} className='img-cars'alt={car.name}/>
                  </div>
                  <div className='card-footer'>
                      <div className='card-footer-top'>
                        <h3 className='car-title'>{car.name}</h3>
                        <p className='per-day'>Per Day: <span className='bold-price'>${(car.payPerDay).toFixed(2)}</span></p>
                      </div>
                      <div className='card-footer-bottom'>
                        <button className='rent-now'>Rent Now</button>
                      </div>
                    </div>
                </div>
              )
            })}
          </div>
          )}
          
        </div>
        </div>
     </div>
    </Layout>
  )
}

export default Home

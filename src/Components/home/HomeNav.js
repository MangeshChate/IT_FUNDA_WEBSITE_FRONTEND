import React from 'react'
import './homenav.css'
export default function HomeNav() {
  return (
    <div className='vh-100  homenav'>
      <img src="https://images5.alphacoders.com/792/792424.png" alt="" className='zoro ' />
      <div className="container-fluid    d-flex justify-content-center align-items-center flex-column h-25 mt-5 pt-5" >
        <div className='container-fluid d-flex justify-content-center align-items-center'>

          <form action="" className='d-flex justify-content-center align-items-center  w-75  '>
            <input type="text" placeholder='search' className='form-control p-3 rounded-5 border-3 border-danger shadow-lg ' />
            <button className='btn bg-danger text-light btn-lg rounded-5 ms-3 fw-bold shadow'>Go</button>
          </form>
        </div>
      </div>
      <div className="container d-flex  justify-content-center flex-wrap w-100  ">
      

        <span className='text-danger fw-bold  text-light shadow p-1 m-1 rounded-5' style={{ backgroundColor: "blueviolet" }}>Search for </span>
        <div className='overflow-scroll '>

        <span className='fw-bold ms-2 text-decoration-none d-flex  justify-content-center flex-wrap '>
          <a href="" className=' text-decoration-none me-2 bg-danger text-light shadow p-1 m-1   rounded-5' >Dbms</a>
          <a href="" className=' text-decoration-none me-2 bg-danger text-light shadow p-1 m-1  rounded-5'>AI</a>
          <a href="" className=' text-decoration-none me-2 bg-danger text-light shadow p-1 m-1 rounded-5'>Data Science</a>
          <a href="" className=' text-decoration-none me-2 bg-danger text-light shadow p-1 m-1 rounded-5'>Machine Learning</a>
          <a href="" className=' text-decoration-none me-2 bg-danger text-light shadow p-1 m-1   rounded-5' >Dbms</a>
          <a href="" className=' text-decoration-none me-2 bg-danger text-light shadow p-1 m-1  rounded-5'>AI</a>
          <a href="" className=' text-decoration-none me-2 bg-danger text-light shadow p-1 m-1 rounded-5'>Data Science</a>
          <a href="" className=' text-decoration-none me-2 bg-danger text-light shadow p-1 m-1 rounded-5'>Machine Learning</a>
        


        </span>
        </div>

      </div>

      <span className='fw-bold  text-danger'> </span>
      <div className='container-fluid  h-50 d-flex justify-content-center align-items-center'>

        <div className=" justify-content-evenly align-items-center d-flex">


        </div>



      </div>
    </div>
  )
}

import React from 'react'

export default function Footer(props) {
  return (
    <footer className=" p-3 pt-5 pb-5 " style={{backgroundColor:props.bg , color:props.text_color}}>
        <div className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <div className="container ">
                    <h4 className="fw-bold" >Contact Us</h4>
                </div>
            </div>
            <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                <form>
                    <input type="text" placeholder="Enter Your Name" className="form-control mt-4 shadow  border-3 border-danger"/>
                    <input type="email" placeholder="Enter Your Email" className="form-control mt-4 shadow border-3 border-danger"/>
                    <textarea type="text" placeholder="Enter Message" className="form-control mt-4 shadow border-3 border-danger"></textarea>
                    <button className="btn btn-danger mt-4 w-100 border-3 border-danger rounded-5">Submit</button>
                </form>
            </div>
        </div>-
    </div>
    </footer>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-danger p-3 pt-5 pb-5">
        <div className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <div className="container text-light">
                    <h4 className="fw-bold">Contact Us</h4>
                </div>
            </div>
            <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                <form>
                    <input type="text" placeholder="Enter Your Name" className="form-control mt-4 shadow"/>
                    <input type="email" placeholder="Enter Your Email" className="form-control mt-4 shadow"/>
                    <textarea type="text" placeholder="Enter Message" className="form-control mt-4 shadow"></textarea>
                    <button className="btn btn-outline-light mt-4 w-100">Submit</button>
                </form>
            </div>
        </div>
    </div>
    </footer>
  )
}

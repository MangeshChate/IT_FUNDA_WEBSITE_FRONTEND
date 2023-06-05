import React from 'react'

export default function Body() {
  return (
    <div className="container mt-4">
    <div className="row justify-content-center align-items-center">
        <div className="col-lg-6">
            <img src="https://gifdb.com/images/high/cartoon-man-asking-are-you-okay-i86qfkrhbybzp7dl.gif" className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-auto mt-4 mt-lg-0 text-center text-lg-start">
            <div className="container-fluid p-5 shadow rounded-4 d-flex flex-column justify-content-center align-items-center">
                <h3 className="fw-bolder text-info-emphasis" style={{fontSize:" 5rem", color: "darkslateblue" ,fontFamily:"'Indie Flower'"}}>IT FUNDA</h3>
                <p className="fw-bolder text-decoration-underline" style={{fontFamily:"'Indie Flower'"}}>Grab All Assignment In One Place</p>
            </div>
            <button className="btn btn-danger mt-3">Let's Start</button>
        </div>
    </div>
    <div className="row mt-4 justify-content-center" style={{fontFamily:"'Indie Flower'"}}>
        <div className="col-md-auto">
            <div className="card shadow m-3 p-3" style={{maxWidth:"25rem"}}>
                <div className="card-body text-center">
                    <h4 className="fw-bold text-info-emphasis">Verified By Class Teachers</h4>
                </div>
            </div>
        </div>
        <div className="col-md-auto">
            <div className="card shadow m-3 p-3" style={{maxWidth:"25rem"}}>
                <div className="card-body text-center">
                    <h4 className="fw-bold text-info-emphasis">Easily Downloadable</h4>
                </div>
            </div>
        </div>
        <div className="col-md-auto">
            <div className="card shadow m-3 p-3" style={{maxWidth:"25rem"}}>
                          
            <div className="card-body text-center">
                    <h4 className="fw-bold text-info-emphasis">Well Maintained</h4>
                </div>
            </div>
        </div>
    </div>
    <hr/>
    <div className="row m-3">
        <div className="col-md d-flex justify-content-center align-items-center bg-danger rounded-5">
            <div className="container text-light">
                <h3 className="fw-bold p-3" style={{fontFamily:" Verdana, Geneva, Tahoma, sans-serif"}}>"Never let the fear of striking out keep you from playing the game."</h3>
            </div>
        </div>
        <div className="col-md mt-3 mb-3">
            <img src="https://d3m1rm8xuevz4q.cloudfront.net/wp-content/uploads/2022/04/web_feature_image.jpg" className="img-fluid " alt=""/>
        </div>
    </div>
    <div className="m-3">
        <div className="container bg-dark text-light p-4 rounded-4 shadow d-flex align-items-center justify-content-between flex-wrap">
            <h5 className="fw-bold">Join Our Services, Be a Contributor</h5>
            <button className="btn btn-outline-light mt-2">Learn More</button>
        </div>
    </div>
    <div className="row m-3">
        <div className="col-md mt-3 mb-3">
            <img src="https://d3m1rm8xuevz4q.cloudfront.net/wp-content/uploads/2021/09/perfect_image3.png" className="img-fluid " alt=""/>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center bg-danger rounded-4">
            <div className="container text-light">
                <h3 className="fw-bold p-3" style={{fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>"In the end, it's not the years in your life that count."</h3>
            </div>
        </div>
    </div>
</div>
  )
}

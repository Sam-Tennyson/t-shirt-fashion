import React from 'react'
import "./style.css"

const ENUM = {
    CURATED_FASHION: "Curated fashion for curious minds",
    T: "T",
    SHIRTS: "-Shirts",
    IMAGE_URL_1: "https://img.freepik.com/free-photo/people-looking-clothes-thrift-shop-side-view_23-2150082900.jpg?w=360&t=st=1695791580~exp=1695792180~hmac=1f4f4091c82e3c06b8349e967dc4f263449e0aa72e38efdd688e9a4ebdc9e632",
    IMAGE_URL_2: "https://img.freepik.com/free-photo/woman-looking-clothes-full-shot_23-2150082876.jpg?w=360&t=st=1695791615~exp=1695792215~hmac=38ffcc7bf1e8dcbaded815b98ee23ccb99c3969a1734ff0e07bccee6776bf54b",
}

const MainBanner = () => {
    return (
        <>
            <div className="row back">
                <div className="col-12 col-md-6 my-auto mx-auto px-5 text-md-start text-center main-banner">
                    <h1 className="text-warning m-0 p-0" ><span className="text-white">{ENUM.T}</span>{ENUM.SHIRTS}</h1>
                    <p className="px-2 text-white" >{ENUM.CURATED_FASHION.toUpperCase()}</p>
                </div>
                <div className="col-12 col-md-3 text-center pb-5 pt-3">
                    <img src={ENUM.IMAGE_URL_1} className="img-fluid h-100 rounded-5" />
                </div>
                <div className="col-12 col-md-3 text-md-center pt-5 pb-3 d-none d-md-block">
                    <img src={ENUM.IMAGE_URL_2} className="img-fluid h-100 rounded-5" />
                </div>
            </div>
        </>
    )
}

export default MainBanner
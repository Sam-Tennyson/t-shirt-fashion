import React from 'react'
import "./style.css"
import { CONSTANTS } from '../../../shared/Constants'

const CommonFeatureCard = (props) => {
    const { data } = props
    return (
        <>
            <div className="card bg-dark my-card rounded-3 my-feature">
                <img src={data?.image_url} className="card-img h-100 rounded-3 w-100" alt="feature_image" />
                <div className="w-100 position-absolute bottom-0 p-3 d-flex justify-content-center">
                    <button className="btn  px-4  btn-dark text-center  rounded-pill btn-lg"><b> {CONSTANTS.ADD_TO_CART} </b> </button>
                </div>
            </div>
        </>
    )
}

export default CommonFeatureCard
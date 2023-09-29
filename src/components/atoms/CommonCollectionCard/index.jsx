import React from 'react'
import "./style.css"
import { CONSTANTS } from '../../../shared/Constants'

const CommonCollectionCard = (props) => {
    const {data} = props
    return (
        <>
            <div className="card bg-dark my-card rounded-5 my-collection">
                <img src={data?.image_url} className="card-img h-100 rounded-5 w-100" alt="..." />
                    <div className="w-100 position-absolute bottom-0 p-3 d-flex justify-content-between">
                        <h1 className="card-title text-white fw-bolder">{data?.amount}</h1>
                        <button className="btn  px-4  btn-dark text-center  rounded-pill btn-lg"><b> {CONSTANTS.ADD_TO_CART} </b> </button>
                    </div>
            </div>
        </>
    )
}

export default CommonCollectionCard
// libs
import React from 'react'

import CommonCollectionCard from '../../components/atoms/CommonCollectionCard'

import "./style.css"
import { TOP_COLLECTIONS_DATA } from '../../data'

const ENUM = {
    TOP_COLLECTIONS: "Top Collections",
    NEW_ARRIVALS: "New Arrivals",
    SUMMER_WEARS: "Summmer Wears",
    IMAGE_URL_1: "https://img.freepik.com/free-photo/beautiful-young-woman-choosing-what-wear-looking-front_176420-42947.jpg?w=360&t=st=1695789424~exp=1695790024~hmac=201591d95a0e59a4eb29a0ceecb355e7081988d6515f7591e90754affd5b3d3f",
    IMAGE_URL_2: "https://img.freepik.com/free-photo/girl_1303-4480.jpg?w=360&t=st=1695789803~exp=1695790403~hmac=b4708f21b072fe1921ae7153989948ffe25a265bf0b8e74d7d6329b4f55184d6",
    IMAGE_URL_3: "https://img.freepik.com/free-photo/brunette-woman-with-shirt-posing_144627-19046.jpg?w=360&t=st=1695789572~exp=1695790172~hmac=0ad6f84ecb7a02dd60238adb2fae63288e626c7a1c45da1f4f5bdb7094db310a",
}

const TopCollections = () => {
    return (
        <>
            <div className='p-5'>
                <h1 class="py-5 text-center fw-bolder text-warning">{ENUM.TOP_COLLECTIONS.toUpperCase()}</h1>
                <div className="d-flex flex-wrap justify-content-around gap-5 pb-5">
                    {TOP_COLLECTIONS_DATA.map((item) => (
                        <CommonCollectionCard
                            key={item?._id}
                            data={item}
                        />
                    ))}
                </div>
            </div>
            <div className="banner shadoww p-">
                <div className="w-100 h-100 p-5 back" >
                    <div className="text-center text-white">
                        <h3 className="text-warning">{ENUM.NEW_ARRIVALS.toUpperCase()}</h3>
                        <h1> {ENUM.SUMMER_WEARS.toUpperCase()} </h1>
                    </div>
                    <div className="d-flex p-5 pb-2 flex-wrap justify-content-around gap-3">
                        <div className="mt-5 rounded-4">
                            <img src={ENUM.IMAGE_URL_1} className="img-fluid mt-5 rounded-4 shadoww summer-wear" />
                        </div>
                        <div className="pb-5 mb-5 rounded-4 d-none d-md-block">
                            <img src={ENUM.IMAGE_URL_2} className="img-fluid d-none d-md-block shadoww mb-5 rounded-4 summer-wear" />
                        </div>
                        <img src={ENUM.IMAGE_URL_3} className="mt-5 img-fluid rounded-4 shadoww d-none d-md-block summer-wear" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopCollections
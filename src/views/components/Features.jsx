import React from 'react'

import CommonFeatureCard from '../../components/atoms/CommonFeatureCard'
import { FEATURES_DATA } from '../../data'

const ENUM = {
    FEATURED: "Featured",
}

const Features = () => {
    return (
        <>
            <div>
                <h1 className="py-5 text-center text-warning fw-bolder">{ENUM.FEATURED.toUpperCase()}</h1>
                <div className="d-flex flex-wrap justify-content-center gap-5 pb-5">
                    {FEATURES_DATA.map((item) => (
                        <CommonFeatureCard
                            key={item?._id}
                            data={item}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Features
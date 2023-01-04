import React, { useEffect, useState } from 'react'
import Globe from 'react-globe.gl';
import Header from '../components/Header'
import starlinkImg from '../recources/starlink.png'
import earthImg from '../recources/earth.jpg';
import ApiService from '../../data/ApiService';
import { Starlink } from '../../domain/models/Starlink';
import './starlink-page.scss';
import { Typography } from 'antd';


function InfoCard() {

    return (
        <div style={{ position: 'absolute', zIndex: '1', color: 'white' }}>
            ASDASDASDASDASDASDASASDASDAS
        </div>
    )
}

export default function StarlinkPage() {

    const apiService = new ApiService()
    const [starlinks, setStarlinks] = useState<Starlink[]>([])
    const [selectedStarlink, setSelectedStarlink] = useState<Starlink>()

    useEffect(() => {
        apiService.getAllStarlinks().then(starlinks => {
            setStarlinks(starlinks)
        })
    }, [])

    return (
        <div style={{ overflow: 'clip' }}>
            <InfoCard />
            <div className='globe-wrapper'>
                <Globe
                    globeImageUrl={earthImg}
                    backgroundColor={'rgb(36 36 36 / 0%)'}
                    objectsData={starlinks}
                    objectLat={'latitude'}
                    objectLng={'longitude'}
                    objectAltitude={0.3}
                    onObjectClick={(obj) => setSelectedStarlink(obj as Starlink)}
                />
            </div>


        </div>
    )
}

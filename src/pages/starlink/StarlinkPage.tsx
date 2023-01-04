import React, { useEffect, useState } from 'react'
import Globe from 'react-globe.gl';
import Header from '../components/Header'
import starlinkImg from '../recources/starlink.png'
import earthImg from '../recources/earth.jpg';
import ApiService from '../../data/ApiService';
import { Starlink } from '../../domain/models/Starlink';
import './starlink-page.scss';
import { Typography } from 'antd';




export default function StarlinkPage() {

    const apiService = new ApiService()
    const [starlinks, setStarlinks] = useState<Starlink[]>([])

    useEffect(() => {
        apiService.getAllStarlinks().then(starlinks => {
            setStarlinks(starlinks)
        })
    }, [])


    return (
        <div style={{ overflow: 'clip' }}>
            <Globe
                globeImageUrl={earthImg}
                backgroundColor={'rgb(36 36 36 / 0%)'}
                objectsData={starlinks}
                objectLat={'latitude'}
                objectLng={'longitude'}
                objectAltitude={0.3}
                objectLabel={(d) => {
                    const starlink = d as Starlink
                    return (
                        `<div>
                            NAME: ${starlink?.spaceTrack.OBJECT_NAME} <br/>
                            LAUNCH DATE: ${starlink?.spaceTrack.LAUNCH_DATE} <br/>
                            HEIGHT: ${starlink?.height_km}km <br/>
                        </div>`
                    )
                }}
                onObjectClick={() => {}}
            />
        </div>
    )
}

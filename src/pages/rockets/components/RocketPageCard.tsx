import { Button, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Rocket } from '../../../domain/models/Rocket'

interface RocketPageCardProps {
    rocket: Rocket
}

export default function RocketPageCard(props: RocketPageCardProps) {
    const navigate = useNavigate();
    return (
        <div className='rocket-page-card'>
            <img src={props.rocket.flickr_images[0]} height={320} width={320}></img>
            <div className='page-card-title'>
                <Typography.Title level={3}>
                    {props.rocket.name}
                </Typography.Title>


                {
                    props.rocket.active ?
                        <div className='active'>
                            STATUS: ACTIVE
                        </div> :
                        <div className='inactive'>
                            STATUS: INACTIVE
                        </div>
                }
            </div>


            <button className='light' style={{ width: '100%', marginTop: '16px' }}
                onClick={() => navigate(`/rockets/${props.rocket.id}`)}
            >
                MORE
            </button>
        </div>
    )
}
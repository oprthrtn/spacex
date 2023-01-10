import { Button, Skeleton, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Rocket } from '../../../domain/models/Rocket'
import { useSpring, animated } from '@react-spring/web'

interface RocketPageCardProps {
    rocket?: Rocket
}

function RocketImage(props: { image: string }) {
    const [imageIsLoaded, setImageIsLoaded] = useState<boolean>(false);


    return (

        <>
            <span style={{ display: imageIsLoaded ? 'none' : '' }}>
                <Skeleton.Image active style={{ width: 320, height: 320 }} />
            </span>

            <img
                src={props.image}
                height={320} width={320}
                onLoad={() => setImageIsLoaded(true)}
                style={{ display: imageIsLoaded ? 'block' : 'none' }}
            />
        </>

    )
}

export default function RocketPageCard(props: RocketPageCardProps) {

    const navigate = useNavigate();

    const rocketCardStyle = useSpring({
        from: {
            opacity: 0, y: 15
        },
        to: {
            opacity: 1, y: 0
        },
    })

    if (props.rocket) {
        return (
            <animated.div className='rocket-page-card' style={rocketCardStyle}>
                <RocketImage image={props.rocket.flickr_images[0]} />
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
                    onClick={() => navigate(`/rockets/${props.rocket!.id}`)}
                >
                    MORE
                </button>
            </animated.div>
        )
    }
    else {
        return (
            <animated.div className='rocket-page-card' style={rocketCardStyle}>
                <Skeleton.Image active style={{ width: 320, height: 320 }} />
                <div className='page-card-title'>
                    <Typography.Title level={3}>
                        <Skeleton />
                    </Typography.Title>
                </div>
            </animated.div>
        )
    }

}
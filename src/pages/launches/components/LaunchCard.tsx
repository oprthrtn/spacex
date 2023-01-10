import { CheckCircleFilled, ClockCircleFilled, CloseCircleFilled, RedditCircleFilled, YoutubeFilled } from '@ant-design/icons'
import { useSpring, animated } from '@react-spring/web'
import { Popover, Skeleton, Typography } from 'antd'
import React, { Component, useState } from 'react'
import Launch from '../../../domain/models/Launch'

interface LaunchCardProps {
    launch?: Launch
}

interface LaunchCardState {
    selected: boolean
}

function PatchImage(props: { image: string }) {
    const [imageIsLoaded, setImageIsLoaded] = useState<boolean>(false);


    return (

        <>
            <span style={{ backgroundColor: 'gray', display: imageIsLoaded ? 'none' : '' }}>
                <Skeleton.Image active style={{ width: 128, height: 128 }} />
            </span>

            <img
                src={props.image}
                height={128} width={128}
                onLoad={() => setImageIsLoaded(true)}
                style={{ display: imageIsLoaded ? 'block' : 'none' }}
            />
        </>

    )
}

export default function LaunchCard(props: LaunchCardProps) {

    const [selected, setSelected] = useState(false)

    const launchCardStyle = useSpring({
        from: {
            opacity: 0, x: 15
        },
        to: {
            opacity: 1, x: 0
        },
    })

    const ref = React.createRef<HTMLDivElement>()


    if (props.launch) {
        return (
            <animated.div
                className='wrapper'
                style={launchCardStyle}
            >
                <div
                    className='status'
                >
                    {
                        props.launch.success ? <CheckCircleFilled style={{ color: 'white' }} /> :
                            props.launch.success !== null ? <CloseCircleFilled style={{ color: 'white' }} /> : <ClockCircleFilled style={{ color: 'white' }} />
                    }
                </div>

                <Popover
                    color='unset'
                    placement='right'

                    trigger='click'
                    onOpenChange={(visible) => {
                        setSelected(visible)
                    }}
                    content={
                        <div
                            className={`launch-card ${props.launch.success ? 'success' : props.launch.success !== null ? 'failure' : 'wait'}`}
                            style={{ height: '700px', width: '700px', color: 'white' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

                                <Typography.Title >
                                    Details:
                                </Typography.Title>
                                <Typography.Title level={4}>
                                    {props.launch.details}
                                </Typography.Title>


                                <a href={`/rockets/${props.launch.rocket}`} target="_blank" rel="noopener noreferrer">About rocket</a>

                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', fontSize: '40px' }}>

                                {
                                    props.launch.links.webcast && <a href={props.launch.links.webcast} target="_blank" rel="noopener noreferrer"><YoutubeFilled style={{ color: 'red' }} /></a>
                                }

                                {
                                    props.launch.links.reddit.launch && <a href={props.launch.links.reddit.launch} target="_blank" rel="noopener noreferrer"><RedditCircleFilled /></a>
                                }


                            </div>
                        </div>
                    }
                >
                    <div
                        className={
                            `launch-card ${props.launch.success ? 'success' : props.launch.success !== null ? 'failure' : 'wait'}
                                ${selected ? 'selected' : ''}
                                `
                        }
                        onClick={() => {
                            ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }}
                        ref={ref}
                    >
                        <div className='info'>
                            <Typography.Title level={2}>
                                {props.launch.name} #{props.launch.flight_number}
                            </Typography.Title>

                            <Typography.Text>
                                {new Date(props.launch.date_local).toString()}
                            </Typography.Text>
                        </div>
                        <PatchImage image={props.launch.links.patch.small} />
                    </div>
                </Popover>
            </animated.div>

        )
    }
    else {
        return (
            <div className='wrapper'>
                <div className='status'><ClockCircleFilled style={{ color: 'white' }} /></div>
                <div className={`launch-card skeleton`}>
                    <div className='info'>
                        <Skeleton active style={{ color: 'white' }} />
                    </div>
                </div>
            </div >
        )
    }


}

import { Skeleton, Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import ApiService from '../../data/ApiService';
import { Capsule } from '../../domain/Capsule';
import Header from '../components/Header'
import capsulesPage from '../recources/capsules.png';
import './capsules-page.scss'
import { animated, useSpring } from '@react-spring/web'

export default function CapsulesPage() {

    const [capsules, setCapsules] = useState<Capsule[]>([])
    useEffect(() => {
        ApiService.getAllCapsules().then(capsules => {
            setCapsules(capsules)
        })
    }, [])

    const capsuleCardStyle = useSpring({
        from: {
            opacity: 0, x: -30
        },
        to: {
            opacity: 1, x: 0
        },
    })
    return (
        <div>
            <Header
                theme='light'
                size='small'
                bgImageUrl={capsulesPage}
                title='Capsules'
            />

            <div className='capsules-wrapper'>
                {
                    capsules.length ? capsules.map(capsule => {
                        return (
                            <animated.div className='capsule-card' style={capsuleCardStyle}>
                                <Typography.Title>
                                    {capsule.serial} | {capsule.type}
                                </Typography.Title>

                                <Typography.Title level={3}>
                                    status: {capsule.status}
                                </Typography.Title>

                                <Typography.Title level={3}>
                                    details: {capsule.last_update || 'none'}
                                </Typography.Title>
                            </animated.div>
                        )
                    }) :
                        <>
                            <animated.div className='capsule-card' style={capsuleCardStyle}>
                                <Skeleton active />
                            </animated.div>
                            <animated.div className='capsule-card' style={capsuleCardStyle}>
                                <Skeleton active />
                            </animated.div>
                            <animated.div className='capsule-card' style={capsuleCardStyle}>
                                <Skeleton active />
                            </animated.div>
                            <animated.div className='capsule-card' style={capsuleCardStyle}>
                                <Skeleton active />
                            </animated.div>
                        </>
                }

            </div>
        </div>
    )
}

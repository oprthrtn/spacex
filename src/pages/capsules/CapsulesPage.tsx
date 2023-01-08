import { Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import ApiService from '../../data/ApiService';
import { Capsule } from '../../domain/Capsule';
import Header from '../components/Header'
import capsulesPage from '../recources/capsules.png';
import './capsules-page.scss'

export default function CapsulesPage() {

    const [capsules, setCapsules] = useState<Capsule[]>([])
    useEffect(() => {
        ApiService.getAllCapsules().then(capsules => {
            setCapsules(capsules)
        })
    }, [])

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
                    capsules.map(capsule => {
                        return (
                            <div className='capsule-card'>
                                <Typography.Title>
                                    {capsule.serial} | {capsule.type}
                                </Typography.Title>

                                <Typography.Title level={3}>
                                    status: {capsule.status}
                                </Typography.Title>

                                <Typography.Title level={3}>
                                    details: {capsule.last_update || 'none'}
                                </Typography.Title>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

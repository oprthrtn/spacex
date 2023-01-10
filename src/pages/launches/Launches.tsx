import { Skeleton, Spin } from 'antd';
import { Component, useEffect, useState } from 'react'
import ApiService from '../../data/ApiService'
import Launch from '../../domain/models/Launch'
import LaunchCard from './components/LaunchCard'
import { LoadingOutlined } from '@ant-design/icons';
import './launches.scss';
import Header from '../components/Header';
import launchesImg from '../recources/launches.png';

interface LaunchesProps { }



export default function Launches(props: LaunchesProps) {

    const [launches, setLaunches] = useState<Launch[]>([]);

    useEffect(() => {
        ApiService.getAllLaunches().then(launches => {
            setLaunches(launches)
        })

    }, [])



    return (
        <div className='launches-page'>

            <Header
                theme='dark'
                size='small'
                bgImageUrl={launchesImg}
                title='Launches'
            />

            <div className='launch-card-wrapper'>
                {
                    launches.length ? launches.map(launch => {
                        return <LaunchCard key={launch.id} launch={launch} />
                    })

                        :
                        <>
                            <LaunchCard />
                            <LaunchCard />
                            <LaunchCard />
                        </>
                }
            </div>

        </div>
    )
}

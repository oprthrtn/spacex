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

interface LaunchesState {
    launches: Launch[],
    isLoading: boolean
}

export default function Launches(props: LaunchesProps) {

    const [launches, setLaunches] = useState<Launch[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        ApiService.getAllLaunches().then(launches => {
            setLaunches(launches)
            setIsLoading(false)
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
            <Spin spinning={isLoading} indicator={<LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />}>
                <div className='launch-card-wrapper'>
                    {
                        launches.map(launch => {
                            return <LaunchCard key={launch.id} launch={launch} />
                        })
                    }
                </div>
            </Spin>
        </div>
    )
}

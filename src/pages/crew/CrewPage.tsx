import { Skeleton, Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import ApiService from '../../data/ApiService';
import { Crew } from '../../domain/models/Crew';
import Header from '../components/Header'
import crewsImg from '../recources/crews.png';
import './crew.scss'

function CrewSkeleton() {
    return (
        <div className='crew-card-skeleton'>
            <Skeleton.Image active style={{ width: 256, height: 343 }} />
            <Skeleton.Button active />
        </div>
    )
}

function CrewImage(props: { image: string }) {
    const [imageIsLoaded, setImageIsLoaded] = useState<boolean>(false);


    return (

        <>
            <span style={{ backgroundColor: 'gray', display: imageIsLoaded ? 'none' : '' }}>
                <Skeleton.Image active style={{ width: 256, height: 343 }} />
            </span>

            <img
                src={props.image}
                width={256}
                height={343}
                onLoad={() => setImageIsLoaded(true)}
                style={{ display: imageIsLoaded ? 'block' : 'none' }}
            />
        </>

    )
}

export default function CrewPage() {

    const [crew, setCrew] = useState<Crew[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        ApiService.getAllCrew().then(crew => {
            setCrew(crew)
            setIsLoading(false)
        })
    }, [])

    return (
        <div className='crew-page'>
            <Header
                theme='dark'
                size='small'
                bgImageUrl={crewsImg}
                title='Crews'
            />
            <div className='crew-wrapper'>
                {
                    !isLoading && crew.map(crew => {
                        return (
                            <div className='crew-card'>
                                <CrewImage image={crew.image} />

                                <Typography.Title level={4}>
                                    {crew.name}
                                </Typography.Title>

                                <a href={crew.wikipedia} target="_blank" rel="noopener noreferrer">
                                    <button className='light' style={{ width: '100%' }}>
                                        Wikipedia
                                    </button>
                                </a>

                            </div>
                        )
                    })
                }
                {
                    isLoading &&
                    <>
                        <CrewSkeleton />
                        <CrewSkeleton />
                        <CrewSkeleton />
                        <CrewSkeleton />
                    </>
                }

            </div>

        </div>
    )
}

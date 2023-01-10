import ApiService from "../../data/ApiService";
import { useEffect, useState } from 'react'
import { Rocket } from "../../domain/models/Rocket";
import RocketPageCard from "./components/RocketPageCard";
import './rocket-page.scss'
import Header from "../components/Header";
import rocketsImg from '../recources/rockets.png'
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function RocketPage() {

    const [rockets, setRockets] = useState<Rocket[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        ApiService.getAllRockets().then(rockets => {
            setRockets(rockets)
            setIsLoading(false)
        })

    }, [])

    return (
        <div className="rocket-page">
            <Header
                theme='dark'
                size='small'
                bgImageUrl={rocketsImg}
                title='Rockets'
            />
            <Spin
                spinning={isLoading}
                indicator={<LoadingOutlined style={{ fontSize: 24, color: 'black' }}
                    spin
                />}
            >
                <div className="rocket-page-cards-wrapper">

                    {
                        rockets.length ? rockets.map(rocket => {
                            return <RocketPageCard rocket={rocket} />
                        })
                            :
                            <>
                                <RocketPageCard />
                                <RocketPageCard />
                            </>
                    }

                </div>
            </Spin>

        </div>
    )
}

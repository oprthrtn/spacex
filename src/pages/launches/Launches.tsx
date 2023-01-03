import { Skeleton, Spin } from 'antd';
import { Component } from 'react'
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

export default class Launches extends Component<LaunchesProps, LaunchesState> {

    apiService = new ApiService()

    constructor(props: LaunchesProps) {
        super(props)
        this.state = {
            launches: [],
            isLoading: true
        }
    }

    componentDidMount(): void {
        this.apiService.getAllLaunches().then(launches => {
            this.setState({ launches: launches, isLoading: false })
        })
    }


    render() {
        return (
            <div className='launches-page'>

                <Header
                    theme='dark'
                    size='small'
                    bgImageUrl={launchesImg}
                    title='Launches'
                />
                <Spin spinning={this.state.isLoading} indicator={<LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />}>
                    <div className='launch-card-wrapper'>
                        {
                            this.state.launches.map(launch => {
                                return <LaunchCard key={launch.id} launch={launch} />
                            })
                        }
                    </div>
                </Spin>
            </div>
        )
    }
}

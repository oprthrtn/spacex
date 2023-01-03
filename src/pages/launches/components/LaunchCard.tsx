import { CheckCircleFilled, CheckCircleOutlined, ClockCircleFilled, CloseCircleFilled, RedditCircleFilled, YoutubeFilled } from '@ant-design/icons'
import { Popover, Typography } from 'antd'
import React, { Component } from 'react'
import Launch from '../../../domain/models/Launch'

interface LaunchCardProps {
    launch: Launch
}

interface LaunchCardState {
    selected: boolean
}

export default class LaunchCard extends Component<LaunchCardProps, LaunchCardState> {

    constructor(props: LaunchCardProps) {
        super(props)

        this.state = {
            selected: false
        }
    }

    ref = React.createRef<HTMLDivElement>()

    render() {
        return (
            <div
                className='wrapper'
            >
                <div
                    className='status'
                >
                    {
                        this.props.launch.success ? <CheckCircleFilled style={{ color: 'white' }} /> :
                            this.props.launch.success !== null ? <CloseCircleFilled style={{ color: 'white' }} /> : <ClockCircleFilled style={{ color: 'white' }} />
                    }
                </div>

                <Popover
                    color='unset'
                    placement='right'

                    trigger='click'
                    onOpenChange={(visible) => {
                        this.setState({ selected: visible })
                    }}
                    content={
                        <div
                            className={`launch-card ${this.props.launch.success ? 'success' : this.props.launch.success !== null ? 'failure' : 'wait'}`}
                            style={{ height: '700px', width: '700px', color: 'white' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

                                <Typography.Title >
                                    Details:
                                </Typography.Title>
                                <Typography.Title level={4}>
                                    {this.props.launch.details}
                                </Typography.Title>


                                <a href={`/rockets/${this.props.launch.rocket}`} target="_blank" rel="noopener noreferrer">About rocket</a>

                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', fontSize: '40px' }}>

                                {
                                    this.props.launch.links.webcast && <a href={this.props.launch.links.webcast}  target="_blank" rel="noopener noreferrer"><YoutubeFilled style={{ color: 'red' }} /></a>
                                }

                                {
                                    this.props.launch.links.reddit.launch && <a href={this.props.launch.links.reddit.launch}  target="_blank" rel="noopener noreferrer"><RedditCircleFilled /></a>
                                }


                            </div>
                        </div>
                    }
                >
                    <div
                        className={
                            `launch-card ${this.props.launch.success ? 'success' : this.props.launch.success !== null ? 'failure' : 'wait'}
                            ${this.state.selected ? 'selected' : ''}
                            `
                        }
                        onClick={() => {
                            this.ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }}
                        ref={this.ref}
                    >
                        <div className='info'>
                            <Typography.Title level={2}>
                                {this.props.launch.name} #{this.props.launch.flight_number}
                            </Typography.Title>

                            <Typography.Text>
                                {new Date(this.props.launch.date_local).toString()}
                            </Typography.Text>
                        </div>
                        <img src={this.props.launch.links.patch.small} height={128} width={128} />
                    </div>
                </Popover>
            </div>

        )
    }
}

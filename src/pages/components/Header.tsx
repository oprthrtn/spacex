import { Typography } from 'antd'
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import './header.scss';
import { animated, useSpring } from '@react-spring/web'
import { wait } from '@testing-library/user-event/dist/utils';

interface HeaderProps {
    theme: 'light' | 'dark';
    bgImageUrl: string;
    title: string;
    size: 'large' | 'small';
}

export default function Header(props: HeaderProps) {

    const navigate = useNavigate()
    const [redirected, setRedirected] = useState(false);

    const styles = useSpring({
        from: {
            opacity: 0, x: -30
        },
        to: {
            opacity: 1, x: 0
        },
    })
    const headerStyle = useSpring({

        from: {
            opacity: 0, x: redirected ? 0 : -15
        },
        to: {
            opacity: 1, x: redirected ? 15 : 0
        }
    })


    return (
        <animated.div style={headerStyle}>
            <div className={`header-component ${props.theme}`}
                style={
                    {
                        backgroundImage: `url(${props.bgImageUrl})`,
                        minHeight: `${props.size === 'large' ? '600px' : '300px'}`
                    }
                }
            >

                <div>

                    <animated.div style={styles}>

                        <Typography.Title>
                            {props.title}
                        </Typography.Title>
                        {
                            props.size === 'large' &&
                            <div style={{ display: 'flex', flexDirection: 'column' }}>


                                <button className={props.theme}

                                    onClick={async () => {
                                        setRedirected(true)
                                        await wait(100)
                                        navigate(`/${props.title.toLowerCase()}`)

                                    }
                                    }
                                >
                                    {props.title.toUpperCase()}
                                </button>


                                <br />

                            </div>

                        }
                    </animated.div>
                </div>
            </div>
        </animated.div>
    )
}

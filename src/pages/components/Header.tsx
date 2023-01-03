import { Typography } from 'antd'
import { Link } from "react-router-dom";
import './header.scss';

interface HeaderProps {
    theme: 'light' | 'dark';
    bgImageUrl: string;
    title: string;
    size: 'large' | 'small';
}

export default function Header(props: HeaderProps) {

    return (
        <div className={`header-component ${props.theme}`}
            style={
                {
                    backgroundImage: `url(${props.bgImageUrl})`,
                    minHeight: `${props.size === 'large' ? '600px' : '300px'}`
                }
            }
        >
            <div>
                <div>
                    <Typography.Title>
                        {props.title}
                    </Typography.Title>

                    {
                        props.size === 'large' &&
                        <Link to={`/${props.title.toLowerCase()}`}>
                            <button className={props.theme}>
                                {props.title.toUpperCase()}
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

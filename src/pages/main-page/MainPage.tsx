import Header from '../components/Header';
import capsules from '../recources/capsules.png'
import crews from '../recources/crews.png'
import launches from '../recources/launches.png'
import roadster from '../recources/roadster.png'
import rockets from '../recources/rockets.png'
import starlink from '../recources/starlink.png'

export default function MainPage() {

    return (
        <>


            <Header
                theme='light'
                size='large'
                bgImageUrl={capsules}
                title='Capsules'
            />

            <Header
                theme='dark'
                size='large'
                bgImageUrl={crews}
                title='Crews'
            />

            <Header
                theme='light'
                size='large'
                bgImageUrl={starlink}
                title='Starlink'
            />

            <Header
                theme='dark'
                size='large'
                bgImageUrl={launches}
                title='Launches'
            />

            <Header
                theme='light'
                size='large'
                bgImageUrl={roadster}
                title='Roadster'
            />

            <Header
                theme='dark'
                size='large'
                bgImageUrl={rockets}
                title='Rockets'
            />
        </>
    )
}

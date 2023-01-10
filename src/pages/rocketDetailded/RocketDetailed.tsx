import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ApiService from '../../data/ApiService'
import { Rocket } from '../../domain/models/Rocket'
import Header from '../components/Header';
import './rocket-detailed.scss';
import rocketImg from '../recources/rockets.png';
import { Divider, Skeleton, Typography } from 'antd';
import { useSpring, animated } from '@react-spring/web'



function RocketImage(props: { image: string }) {
  const [imageIsLoaded, setImageIsLoaded] = useState<boolean>(false);


  return (

    <>
      <span style={{ display: imageIsLoaded ? 'none' : '' }}>
        <Skeleton.Image active style={{ width: 640, height: 480 }} />
      </span>

      <img
        src={props.image}
        height={480} width={640}
        onLoad={() => setImageIsLoaded(true)}
        style={{ display: imageIsLoaded ? 'block' : 'none' }}
      />
    </>

  )
}

export default function RocketDetailed() {

  const params = useParams()
  const [rocket, setRocket] = useState<Rocket>()

  useEffect(() => {
    ApiService.getRocket(params.rocketId!).then(rocket => {
      setRocket(rocket)
    })
  }, [])

  const rocketInfoStyle = useSpring({
    from: {
      opacity: 0, x: -15
    },
    to: {
      opacity: 1, x: 0
    },
  })

  const rocketDescStyle = useSpring({
    from: {
      opacity: 0, x: 15
    },
    to: {
      opacity: 1, x: 0
    },
  })

  return (
    <>
      <Header
        theme='dark'
        title={rocket?.name || ''}
        size='small'
        bgImageUrl={rocketImg}
      />

      <div className='rocket-detailed-wrapper'>

        <div className='image'>
          {
            rocket && <RocketImage image={rocket?.flickr_images[0]} />
          }
        </div>



        <animated.div className='info' style={rocketInfoStyle}>
          <Typography.Title>
            Specs:
          </Typography.Title>
          {
            rocket ? <ul>
              <li> height: {rocket?.height.meters}m</li>
              <li> diameter: {rocket?.diameter.meters}m</li>
              <li>  mass: {rocket?.mass.kg}kg</li>
              <li>  boosters: {rocket?.boosters}</li>
            </ul> : <Skeleton />
          }


          <Typography.Title style={{ marginTop: '16px' }}>
            Engines:
          </Typography.Title>

          {
            rocket ?

              <ul>
                <li>   engines: {rocket?.engines.number}</li>
                <li>  type: {rocket?.engines.type}</li>
                <li>  version: {rocket?.engines.version} </li>
                <li>   layout: {rocket?.engines.layout}</li>
                <li>   first propellant: {rocket?.engines.propellant_1}</li>
                <li>   second propellant: {rocket?.engines.propellant_2}</li>
              </ul> : <Skeleton />
          }
        </animated.div>

        <animated.div className='desc' style={rocketDescStyle}>

          {
            rocket ?

              <>
                <Typography.Title>
                  Description:
                </Typography.Title>

                <Typography.Paragraph>
                  {rocket?.description}
                </Typography.Paragraph>

                <a
                  href={rocket?.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className='light'
                    style={{ width: '100%' }}
                  >
                    Wikipedia
                  </button>
                </a>
              </> : <Skeleton />
          }
        </animated.div>
      </div>
    </>
  )
}

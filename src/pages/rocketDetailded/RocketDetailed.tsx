import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ApiService from '../../data/ApiService'
import { Rocket } from '../../domain/models/Rocket'
import Header from '../components/Header';
import './rocket-detailed.scss';
import rocketImg from '../recources/rockets.png';
import { Divider, Typography } from 'antd';

export default function RocketDetailed() {

  const params = useParams()
  const [rocket, setRocket] = useState<Rocket>()
  const api = new ApiService()

  useEffect(() => {
    api.getRocket(params.rocketId!).then(rocket => {
      setRocket(rocket)
    })
  }, [])

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
          <img src={rocket?.flickr_images[0]} height={480} width={640} />
        </div>



        <div className='info'>
          <Typography.Title>
            Specs:
          </Typography.Title>
          <ul>
            <li> height: {rocket?.height.meters}m</li>
            <li> diameter: {rocket?.diameter.meters}m</li>
            <li>  mass: {rocket?.mass.kg}kg</li>
            <li>  boosters: {rocket?.boosters}</li>
          </ul>

          <Typography.Title style={{ marginTop: '16px' }}>
            Engines:
          </Typography.Title>

          <ul>
            <li>   engines: {rocket?.engines.number}</li>
            <li>  type: {rocket?.engines.type}</li>
            <li>  version: {rocket?.engines.version} </li>
            <li>   layout: {rocket?.engines.layout}</li>
            <li>   first propellant: {rocket?.engines.propellant_1}</li>
            <li>   second propellant: {rocket?.engines.propellant_2}</li>
          </ul>
        </div>

        <div className='desc'>
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

        </div>
      </div>
    </>
  )
}

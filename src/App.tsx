import { Layout, Row, Col } from 'antd';
import ConfigProvider from 'antd/es/config-provider';
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './app.scss';
import CapsulesPage from './pages/capsules/CapsulesPage';
import CrewPage from './pages/crew/CrewPage';
import Launches from './pages/launches/Launches';
import MainPage from './pages/main-page/MainPage';
import RocketDetailed from './pages/rocketDetailded/RocketDetailed';
import RocketPage from './pages/rockets/RocketPage';
import StarlinkPage from './pages/starlink/StarlinkPage';

const { Content } = Layout;

function App() {

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 0,
          colorLinkActive: 'white',
          colorLink: '#afafaf',
          colorLinkHover: 'white',
        }
      }}
    >
      <Layout style={{ display: 'flex', flexDirection: 'column', maxWidth: '1920px', backgroundColor: 'unset' }}>

        <Row className='main-menu'>
          <Col>
            <Link to='/'>SpaceX</Link>
          </Col>

          <Link to='/capsules'>CAPSULES</Link>
          <Link to='/crews'>CREWS</Link>
          <Link to='/starlink'>STARLINK</Link>
          <Link to='/launches'>LAUNCHES</Link>
          <Link to='/rockets'>ROCKETS</Link>
          <Link to='/info'>INFO</Link>
        </Row>

        <Content style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/launches' element={<Launches />} />
            <Route path='/starlink' element={<StarlinkPage />} />
            <Route path='/rockets' element={<RocketPage />} />
            <Route path='/rockets/:rocketId' element={<RocketDetailed />} />
            <Route path='/crews' element={<CrewPage />} />
            <Route path='/capsules' element={<CapsulesPage />} />
          </Routes>

        </Content>

      </Layout>
    </ConfigProvider >
  );
}

export default App;

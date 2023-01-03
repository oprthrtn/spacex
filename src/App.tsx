import { Layout, Row, Col } from 'antd';
import ConfigProvider from 'antd/es/config-provider';
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './app.scss';
import MainPage from './pages/main-page/MainPage';

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

          <Link to='/launches'>LAUNCHES</Link>
          <Link to='/rockets'>ROCKETS</Link>
          <Link to='/starlink'>STARLINK</Link>
          <Link to='/roadster'>ROADSTER</Link>
          <Link to='/info'>INFO</Link>
        </Row>

        <Content style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>

        </Content>

      </Layout>
    </ConfigProvider >
  );
}

export default App;

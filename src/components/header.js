import { Layout, Button, Space } from "antd";
import '../styles/header.css'

const Header = () => {
    const { Header } = Layout;

    return <Header className='nav'>
        <b style={{ fontSize: '1.5rem' }}>Atools<span style={{ color: '#F2BD53' }}>.</span></b>
        <div className="buttons">
            <Space size='large'>
                <Button type='primary' size='large'>Start Free Trial</Button>
                <Button style={{ backgroundColor: '#F2BD53', border: 'none', color: 'white' }}  size='large'>Login</Button>
            </Space>
        </div>
    </Header>
}

export default Header
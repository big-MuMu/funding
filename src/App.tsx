import { useState } from 'react'
import './App.css'
import { Layout, Menu } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import 'antd/dist/antd.css';
import ChildrenRoutes from './router';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function App(props) {
  const history = useHistory();
  console.log(333, props)
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          onClick={(item) => {
            console.log(3, item)
            history.push(item.key)
          }}
        >
          <Menu.Item key="/user">
            用户列表
          </Menu.Item>
          <Menu.Item key="2">
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </Menu>
        </Sider>
        <Content>
          <ChildrenRoutes />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App

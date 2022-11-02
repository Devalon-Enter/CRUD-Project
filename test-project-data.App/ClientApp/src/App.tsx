import './App.css';
import 'antd/dist/antd.css'
import {
  Layout
} from 'antd';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import { UserRepository } from './Storage/UserRepository';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header >
        </Header>
        <Content>
          <Routes>
            <Route path="/users/*" element={<UserManagement UserRepository={new UserRepository()} />} />
          </Routes>
        </Content>
        <Footer>
        </Footer>
      </Layout> 
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import Login from './pages/Login'
import Layout from './pages/Layout'
import { Button, Space } from 'antd';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Button type="primary">Primary Button</Button>
        <Routes>
          <Route path='/' element={<Layout />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

import React, { useState } from 'react'
import Sidebar from 'react-sidebar'
import menu from '../Assets/menu.png'
import Analytics from './Analytics'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
function Home () {
  
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const onSetSidebarOpen = open => {
    setSidebarOpen(open)
  }


  const sidebarData = () => {
    return (
      <div style={{padding:10}}>
      <Link to="/analytics">Analytics</Link><br/><br/>
      <Link to="/data">Data</Link>
      </div>
    )
  }

  return (
    <div>
      <Sidebar
        sidebar={sidebarData()}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: 'white' } }}
      >
        <img
          src={menu}
          style={{ height: 50, width: 50, margin: 10 }}
          onClick={() => onSetSidebarOpen(true)}
        />
      </Sidebar>
    </div>
  )
}

export default Home

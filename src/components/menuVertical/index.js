import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Menu, Container } from 'semantic-ui-react'

export default function MenuVertical() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => {
    setActiveItem(name)
    navigate(name)
  }

  return (
    <Container>
      <Menu pointing vertical className=''>
        <Menu.Header>
          <div className='header-menu'>
            <img src="/logo.svg" alt="" />
            <center>
              <h5>
                <i>Version: {process.env.REACT_APP_VERSION}</i><br/>
              </h5>
            </center>
          </div>
        </Menu.Header>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='repositories'
          active={activeItem === 'repositories'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='config'
          active={activeItem === 'config'}
          onClick={handleItemClick}
        />
      </Menu>
    </Container>
  )
}
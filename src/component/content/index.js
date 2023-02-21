import React from 'react'
import './style.css'

const Content = ({routePage, children}) => {
    return (
        <div className='content'>
            <div className='grub'>Home \ {routePage}</div>
            <div>{children}</div>
        </div>
    );
}

export default Content;


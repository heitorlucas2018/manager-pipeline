import React from 'react'
import './style.css'

const Content = ({ routePage, children }) => {
    
    const routePath = (pageName) => {
        if (pageName && (typeof pageName) === 'object') {
            let path = 'Home';
            pageName.forEach(e => {
                path = +` > ${e}`;
            });
            return path;
        }

        return `Home > ${!pageName ? '' : pageName}`;
    }

    return (
        <div className='content'>
            <div className='grub'><b>{ routePath(routePage) }</b></div>
            <div>{children}</div>
        </div>
    );
}

export default Content;


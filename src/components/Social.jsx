import React, { useRef } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import './Social.css';

const Social = () => {
    const wpp = useRef(null);
    const face = useRef(null);
    const insta = useRef(null);

    const closeSocial = () => {
        if (wpp.current) {
            wpp.current.style.marginRight = "0px";
            wpp.current.style.marginTop = "0px";
        }
        if (face.current) {
            face.current.style.marginRight = "0px";
        }
        if (insta.current) {
            insta.current.style.marginRight = "0px";
            insta.current.style.marginTop = "0px";
        }
    }
    
    const openSocial = () => {
        if (wpp.current) {
            wpp.current.style.marginRight = "20px";
            wpp.current.style.marginTop = "-50px";
        }
        if (face.current) {
            face.current.style.marginRight = "60px";
        }
        if (insta.current) {
            insta.current.style.marginRight = "20px";
            insta.current.style.marginTop = "50px";
        }
    };

    return (
        <div className='book' onClick={openSocial}>
            <div className='wpp' ref={wpp}></div>
            <div className='face' ref={face}></div>
            <div className='insta' ref={insta}></div>
            <i className="bi bi-arrow-return-right" onClick={closeSocial}></i>
        </div>
    );
};

export default Social;

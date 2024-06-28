import React, { useRef, useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import './Social.css';

const Social = () => {
    const wpp = useRef(null);
    const face = useRef(null);
    const insta = useRef(null);
    const [socialTab, setSocialTab] = useState(false)

    
    const openSocial = () => {
        if(socialTab === false){
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
            setSocialTab(true)
        } else {
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
            setSocialTab(false)
        }
        
    };

    return (
        <div className='book' onClick={openSocial}>
            <div className='wpp' ref={wpp}>
                <img src="https://i.imgur.com/hm8h6Hp.png" alt="" />
            </div>
            <div className='face' ref={face}>
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png" alt="" />
            </div>
            <div className='insta' ref={insta}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" />
            </div>
            <i className="bi bi-arrow-return-right"></i>
        </div>
    );
};

export default Social;

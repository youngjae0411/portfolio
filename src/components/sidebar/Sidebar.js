import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { FiExternalLink } from 'react-icons/fi';
import logo from '../images/Halo.jpg'

class Sidebar extends Component {
    render() {

        return (
            <div className="sidebar">
                <div style={{ color: 'black', fontWeight: 'bold' }} className="tagtop"> # DevOps </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # 집사 8년차 </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # 코린이 </div>
                <h1><Link smooth to="/#start" className="h1_links">김 영 재 <div className='kim'>Halo</div> </Link></h1>

                <img src={logo} />
                <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail"><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL" rel="opener noreferrer" target="_blank" className="fa fa-envelope"></a> kimgjs112233@gmail.com </p>

                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"> <a href="https://github.com/youngjae0411" rel="opener noreferrer" target="_blank" className="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/%EC%98%81%EC%9E%AC-%EA%B9%80-76276b239" rel="opener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:kimgjs112233@gmail.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"></a></li>
                        
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sidebar
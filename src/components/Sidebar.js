import React from 'react';
import leaf from './icons/leaf.png';
import home from './icons/home.png';
import crown from './icons/crown.png';
import analytics from './icons/analytics.png';
import coin from './icons/coin.png';
import settings from './icons/settings.png';
import smiley from './icons/smiley.png';
import moon from './icons/moon.png';
import logout from './icons/logout.png';

export default function Sidebar() {
    return (
        <div style={{ height: '100vh', width: 'fit-content', backgroundColor: '#FFFFFF', textAlign: 'center', padding: '15px' }}>
            <div style={{ padding: '20px' }}><img src={leaf} alt="icon" height='35px' /></div>
            <div className="pad" style={{ backgroundColor: '#FEEEF2', color: '#FE918C' }}><img src={crown} alt="home" height='20px' /><div>My Page</div></div>
            <div className="pad"><img src={home} alt="home" height='20px' /><div>Monetize</div></div>
            <div className="pad"><img src={analytics} alt="home" height='20px' /><div>Analytics</div></div>
            <div className="pad"><img src={coin} alt="home" height='20px' /><div>Earnings</div></div>
            <div className="pad"><img src={smiley} alt="home" height='20px' /><div>Referrals</div></div>
            <div className="pad"><img src={settings} alt="home" height='20px' /><div>Settings</div></div>
            <div style={{marginTop: '70px'}}>
                <div className="pad2"><img src={moon} alt="moon" height='20px' /></div>
                <div className="pad2"><img src={logout} alt="logout" height='20px' /><div>Log Out</div></div>
            </div>
        </div>
    )
}

import React from 'react';
import leaf from './icons/leaf.png';
import user from './icons/user.png';

export default function Mobile() {
    return (
        <div style={{ backgroundColor: '#FFFFFF', marginLeft: '40px', width: '100%', height: '100' }}>
            <div className="mobile">
                <div style={{textAlign:'start'}}>
                    <img style={{margin: '15px'}} src={leaf} alt="logo" height='30px' />
                </div>
                <div style={{padding: '15px'}}>
                    <img src={user} alt="user" height='80px'/>
                    <p style={{fontWeight: 'bold', fontSize: '25px'}}>@mrsingh</p>
                </div>
                <div>
                    <button className="support">
                        <span style={{marginLeft: '20px'}}>Support Me</span>
                    </button>
                    <p style={{marginTop: '15px'}}><span style={{fontSize: '13px'}}>Powered by</span> <img src={leaf} alt="logo" height='27px'/> <span style={{fontWeight: '500'}}>Snipfeed</span></p>
                </div>
            </div>
        </div>
    )
}

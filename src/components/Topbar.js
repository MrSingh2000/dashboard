import React from 'react';
import tabs from './icons/tabs.png';
import paint from './icons/paint.png'

export default function Topbar() {
    return (
        <>
        <div style={{backgroundColor: '#FFFFFF', width: '100%', height: '60px', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', listStyle: 'none', position: 'relative'}}>
                <div className="topItem" style={{borderBottom: "2px solid red"}}><img src={tabs} alt="tabs" height='20px' style={{marginRight: '10px'}}/> Links</div>
                <div className="topItem"><img src={paint} alt="tabs" height='20px' style={{marginRight: '10px'}}/> Design</div>
            </div>
            <form className="search">
                <span style={{fontSize: '13px', marginRight: '20px'}}>https://link.snipfeed.co/mrsingh</span>
                    <button className="button2"> <span style={{fontSize: '13px', fontWeight: 'bold',position: 'relative', bottom: '5px'}}>Copy</span> </button>
            </form>
            
        </div>
        </>
    )
}

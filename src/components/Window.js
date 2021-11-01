import React from 'react';
import click from './icons/click.png';
import mail from './icons/mail.png';
import share from './icons/share.png';
import texti from './icons/text.png';
import music from './icons/music.png';
import videoi from './icons/video.png';
import bag from './icons/bag.png';
import camera from './icons/camera.png';
import mike from './icons/megaphone.png';
import cube from './icons/cube.png';
import heart from './icons/heart.png';
import heartBlack from './icons/heart_black.png';
import user from './icons/user.png';
import eye from './icons/eye.png';
import grid from './icons/grid.png';
import top from './icons/top.png';
import star from './icons/star.png';

export default function Window() {
    let icons = [click, mail, share, texti, music, videoi, bag];
    let names = ["Custom Link", "Mailing List", "Link Your Socials", "Text", "Music/Podcast Preview", "Video Preview", "Product"];
    let colors = ["#F2F1FF", "#E7FDF5", "#EDFBFF", "#FCF0DF", "#F2F5FF", "#EBEFFF", "#FFF3F0", "#E8FCF6"];

    let icons2 = [camera, mike, cube, heart];
    let names2 = ["Livestreams", "Shoutouts/Q&As", "Exclusive Content", "Tipping"];
    let colors2 = ["#FFEEF2", "#FEF8D4", "#F3EEFF", "#FFF5F7"];

    return (
        <div style={{width: '700px', textAlign: 'center' }}>
            <div className="container" style={{ margin: '20px', backgroundColor: '#FFFFFF' }}>
                <p className="windowheader">Add Block</p>
                <div className="row">
                    {icons.map((e) => {
                        return (
                            <div className="col" key={e}>
                                <div className="iconBlock" style={{backgroundColor: `${colors[icons.indexOf(e)]}`}}>
                                    <img src={e} alt="img" height='30px' />
                                </div>
                                <p style={{ fontSize: '13px' }}>{names[icons.indexOf(e)]}</p>
                            </div>)
                    })}
                </div>
                <hr />
                <p className="windowheader">Monitizable Blocks</p>
                <div className="row">
                    {icons2.map((e) => {
                        return (
                            <div className="col iconBlock2" key={e}>
                                <div className="iconBlock" style={{backgroundColor: `${colors2[icons2.indexOf(e)]}`}}>
                                    <img src={e} alt="img" height='30px' />
                                </div>
                                <p style={{ fontSize: '13px', marginLeft: '8px' }}>{names2[icons2.indexOf(e)]}</p>
                            </div>)
                    })}
                </div>
            </div>
            <div className="container arrowStyle"><img src={top} alt="arrow" height="20px" /></div>
            <div style={{ textAlign: 'left', backgroundColor: '#FFFFFF',marginTop: '-7px', margin: '20px', width: '700px' }}>
                <p className="pageHeader">Page Header</p>
                <hr />
                <div style={{display: 'flex', marginLeft: '15px'}}>
                    <div><img src={user} alt="user" height='50px'/></div>
                    <div style={{marginLeft: '15px'}}>
                        <p className="addBio">Add Your Bio</p>
                        <p className="profilePic">Profile Pic, Name and Bio</p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'left', backgroundColor: '#FFFFFF', margin: '20px',width: '700px' }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div className="d-flex">
                    <p className="pageHeader" style={{backgroundColor: '#f9748f1f', color: '#f2627c'}}> <span style={{position: 'relative', bottom:'2px'}}><img src={star} alt="star" height="12px"/></span> Monetizable</p>
                    <p className="pageHeader">Tipping</p>
                    </div>
                    <div className="d-flex" style={{marginRight: '15px'}}>
                        <img src={eye} alt="eye" height='25px' style={{marginRight: '15px'}}/>
                        <img src={grid} alt="grid" height='25px'/>
                    </div>
                </div>
                <hr style={{position: 'relative', bottom: '13px'}}/>
                <div style={{display: 'flex', marginLeft: '15px'}}>
                    <div><img src={heartBlack} alt="heart" height="50px"/></div>
                    <div style={{marginLeft: '15px'}}>
                        <p className="addBio">Tipping</p>
                        <p className="profilePic">Let your followers show their support!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

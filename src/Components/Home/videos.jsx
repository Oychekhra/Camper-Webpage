import React from 'react'
import Popup from 'reactjs-popup';
import { MiniVideo, VideoWrapper } from './style';
import PlayButton from '../../Assets/home/video/playbutton.png'
import background1 from '../../Assets/home/video/1.png'
import background2 from '../../Assets/home/video/2.png'
import background3 from '../../Assets/home/video/3.png'
import background4 from '../../Assets/home/video/4.png'
import background5 from '../../Assets/home/video/5.png'
import background6 from '../../Assets/home/video/6.png'
import background7 from '../../Assets/home/video/7.png'
import background8 from '../../Assets/home/video/8.png'

const VideoContainer = () => {
  return (
    <VideoWrapper>
         <div>
        <Popup
            trigger={<MiniVideo style={{backgroundImage:`url(${background1})` }}><img src={PlayButton} alt="" /></MiniVideo>}
            modal
            nested
        >
            {close => (
            <div className="modal">
                <div className='modaltop'>
                <div className="header"> Name of the Video </div>
                <button className="close" onClick={close}>
                &times;
                </button>
                </div>
                <div className="content">
                {' '}
                <iframe className='video' width="80%" height="400px" border-radius='20px' src="https://www.youtube.com/embed/nt_f2cM6kk8?si=yxxhKUYt0q4I9Z3C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            )}
        </Popup>
        </div>
        <div>
        <Popup
            trigger={<MiniVideo style={{backgroundImage:`url(${background2})` }}><img src={PlayButton} alt="" /></MiniVideo>}
            modal
            nested
        >
            {close => (
            <div className="modal">
                <div className='modaltop'>
                <div className="header"> Name of the Video </div>
                <button className="close" onClick={close}>
                &times;
                </button>
                </div>
                <div className="content">
                {' '}
                <iframe className='video' width="80%" height="400px" src="https://www.youtube.com/embed/wqhvVRPpels?si=3wQkN0et2pSxBLh7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            )}
        </Popup>
        </div>
        <div>
        <Popup
            trigger={<MiniVideo style={{backgroundImage:`url(${background3})` }}><img src={PlayButton} alt="" /></MiniVideo>}
            modal
            nested
        >
            {close => (
            <div className="modal">
                <div className='modaltop'>
                <div className="header"> Name of the Video </div>
                <button className="close" onClick={close}>
                &times;
                </button>
                </div>
                <div className="content">
                {' '}
                <iframe className='video' width="80%" height="400px" src="https://www.youtube.com/embed/lM3Kx1VymgA?si=EtaxrV2M0Cpa8cmd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            )}
        </Popup>
        </div>
        <div>
        <Popup
            trigger={<MiniVideo style={{backgroundImage:`url(${background4})` }}><img src={PlayButton} alt="" /></MiniVideo>}
            modal
            nested
        >
            {close => (
            <div className="modal">
                <div className='modaltop'>
                <div className="header"> Name of the Video </div>
                <button className="close" onClick={close}>
                &times;
                </button>
                </div>
                <div className="content">
                {' '}
                <iframe className='video' width="80%" height="400" src="https://www.youtube.com/embed/oyrv7m30e_c?si=x5uYne4Kp-7EZhGt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            )}
        </Popup>
        </div>
        <div>
        <Popup
            trigger={<MiniVideo style={{backgroundImage:`url(${background5})` }}><img src={PlayButton} alt="" /></MiniVideo>}
            modal
            nested
        >
            {close => (
            <div className="modal">
                <div className='modaltop'>
                <div className="header"> Name of the Video </div>
                <button className="close" onClick={close}>
                &times;
                </button>
                </div>
                <div className="content">
                {' '}
                <iframe className='video' width="80%" height="315" src="https://www.youtube.com/embed/3GIXvtN6IM8?si=CuGWIM_3ZdRgQSfI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            )}
        </Popup>
        </div>
        <div>
        <Popup
            trigger={<MiniVideo style={{backgroundImage:`url(${background6})` }}><img src={PlayButton} alt="" /></MiniVideo>}
            modal
            nested
        >
            {close => (
            <div className="modal">
                <div className='modaltop'>
                <div className="header"> Name of the Video </div>
                <button className="close" onClick={close}>
                &times;
                </button>
                </div>
                <div className="content">
                {' '}
                <iframe className='video' width="80%" height="315" src="https://www.youtube.com/embed/cUDry0z4Hqk?si=ZKcVOaSo26P8YVXj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            )}
        </Popup>
        </div>
        <div>
        <Popup
            trigger={<MiniVideo style={{backgroundImage:`url(${background7})` }}><img src={PlayButton} alt="" /></MiniVideo>}
            modal
            nested
        >
            {close => (
            <div className="modal">
                <div className='modaltop'>
                <div className="header"> Name of the Video </div>
                <button className="close" onClick={close}>
                &times;
                </button>
                </div>
                <div className="content">
                {' '}
                <iframe className='video' width="80%" height="315" src="https://www.youtube.com/embed/0bMYR_dre5c?si=zbwkw28K8tmAc4_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            )}
        </Popup>
        </div>
        <div>
        <Popup
            trigger={<MiniVideo style={{backgroundImage:`url(${background8})` }}><img src={PlayButton} alt="" /></MiniVideo>}
            modal
            nested
        >
            {close => (
            <div className="modal">
                <div className='modaltop'>
                <div className="header"> Name of the Video </div>
                <button className="close" onClick={close}>
                &times;
                </button>
                </div>
                <div className="content">
                {' '}
                <iframe className='video' width="80%" height="315" src="https://www.youtube.com/embed/DGwH0XcRzDY?si=Vx-Y8hu8tSvs9iSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            )}
        </Popup>
        </div>
    </VideoWrapper>
  )
}

export default VideoContainer

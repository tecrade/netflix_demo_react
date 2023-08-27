import React from 'react'
function Youtube(props) {
    const opts = {
        height: props.height,
        width: props.width,
          videoSrc: "http://www.youtube-nocookie.com/embed/" + props.video + "?autoplay=1&mute=1&controls=1&showinfo=0&loop=1&playlist="+props.video,
    }
  return (
    <div className='player'>
      <iframe type="text/html" src={opts.videoSrc} height={opts.height} width={opts.width} frameborder="0 "/>
    </div>
  );
}

export default Youtube
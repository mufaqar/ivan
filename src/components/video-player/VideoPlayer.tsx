import React, { FC } from 'react'

const VideoPlayer:FC <any> = ({url}) => {
  return (
     <div className="aspect-w-16 aspect-h-9">
  <iframe src={url} width="640" height="360" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
</div>
  )
}

export default VideoPlayer
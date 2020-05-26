import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <h3>Search for something</h3>;
  }

  const videoSrc = `https:www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className='player'>
      <div className='ui embed'>
        <iframe
          src={videoSrc}
          frameBorder='0'
          title='main video'
          allowFullScreen
        />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

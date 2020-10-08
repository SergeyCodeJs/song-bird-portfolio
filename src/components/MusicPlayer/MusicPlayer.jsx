import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import data from '../../assets/data/birds'

export default function MusicPlayer({src, autoPlay, loop, autoPlayAfterSrcChange, onPlay, style}) {
    const songUrl = data[0][0].audio;
    return (<AudioPlayer 
      src={songUrl} 
      autoPlay={autoPlay}
      loop={loop}
      autoPlayAfterSrcChange={autoPlayAfterSrcChange}
      onPlay={onPlay}
      style={style}
      />)
}

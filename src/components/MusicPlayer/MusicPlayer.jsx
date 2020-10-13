import React, {useRef, useEffect} from 'react'
import {connect} from 'react-redux'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function MusicPlayer({
    src,
    autoPlay,
    loop,
    autoPlayAfterSrcChange,
    onPlay,
    style,
    isPlaying
}) {
    const audioElement = useRef();
    
    useEffect(() => {
      const myRef = audioElement.current.audio.current;
      if(!isPlaying) {
        myRef.pause()
      }
    }, [audioElement, isPlaying])
    
    return (<AudioPlayer
        ref={audioElement}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        autoPlayAfterSrcChange={autoPlayAfterSrcChange}
        onPlay={onPlay}
        style={style}/>)
}

function mapStateToProps({game}) {
const {isPlaying} = game.gameLogic;
return {isPlaying}
}

export default connect(mapStateToProps, null)(MusicPlayer)
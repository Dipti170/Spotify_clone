import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {

    const {track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong} = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black text-white px-4 flex items-center justify-between border-t border-gray-800">
      {/* Left - Song Info */}
      <div className="hidden lg:flex items-center gap-4 w-[25%]">
        <img className="w-12 h-12 rounded" src={track.image} alt="song" />
        <div>
          <p className="text-sm font-semibold">{track.name}</p>
          <p className="text-xs text-gray-400">{track.desc.slice(0, 20)}</p>
        </div>
      </div>

      {/* Center - Controls and Progress */}
      <div className="flex flex-col items-center gap-1 w-[50%]">
        {/* Controls */}
        <div className="flex gap-5">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="shuffle" />
          <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="previous" />
           { playStatus
           ?
           <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="pause" />
           :
            <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="play" />
           }
         
           
          <img onClick={next}className="w-4 cursor-pointer" src={assets.next_icon} alt="next" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="loop" />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3 w-full justify-center">
          <span className="text-xs">{time.currentTime.minute}:{time.currentTime.second}</span>
          <div ref={seekBg} onClick={seekSong} className="relative w-full max-w-[400px] h-1 bg-gray-500 rounded overflow-hidden">
            <div ref={seekBar} className="absolute left-0 top-0 h-1 bg-green-500 w-1/3 rounded"></div>
          </div>
          <span className="text-xs">{time.totalTime.minute}:{time.totalTime.second}</span>
        </div>
      </div>

      {/* Right - Extra Icons */}
      <div className="hidden lg:flex items-center gap-3 opacity-75 w-[25%] justify-end">
        <img className="w-4" src={assets.plays_icon} alt="plays" />
        <img className="w-4" src={assets.mic_icon} alt="mic" />
        <img className="w-4" src={assets.queue_icon} alt="queue" />
        <img className="w-4" src={assets.speaker_icon} alt="speaker" />
        <img className="w-4" src={assets.volume_icon} alt="volume" />
        <div className="w-20 h-1 bg-slate-200 rounded-full"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="mini player" />
        <img className="w-4" src={assets.zoom_icon} alt="zoom" />
      </div>
    </div>
  );
};

export default Player;

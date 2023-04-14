import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });

    //Refs
    const audioRef = useRef(null);

    //Handlers
    const playSongHandler = () => {
        const audioPlayer = audioRef.current;
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
        setIsPlaying(!isPlaying);
    };

    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;

        setSongInfo({ currentTime, duration });
    };

    const dragHandler = (e) => {
        const newTime = e.target.value;

        audioRef.current.currentTime = newTime;
        setSongInfo({ ...songInfo, currentTime: newTime });
    };

    const changeSongHandler = (direction, e) => {
        
    }

    //Functions
    const formatTime = (decimalSeconds) => {
        decimalSeconds = Math.round(decimalSeconds);
        const minutes = Math.floor(decimalSeconds / 60);
        const seconds = Math.floor(decimalSeconds % 60);
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div>
            <div className="player-container">
                <div className="time-control">
                    <p>{formatTime(songInfo.currentTime)}</p>
                    <input
                        onChange={dragHandler}
                        type="range"
                        min={0}
                        max={Math.round(songInfo.duration)}
                        value={Math.round(songInfo.currentTime)}
                    />
                    <p>{formatTime(songInfo.duration)}</p>
                </div>
                <div className="play-control">
                    <FontAwesomeIcon
                        className="back"
                        size="2x"
                        icon={faAngleLeft}
                    />
                    <FontAwesomeIcon
                        onClick={playSongHandler}
                        className="play"
                        size="2x"
                        icon={isPlaying ? faPause : faPlay}
                    />
                    <FontAwesomeIcon
                        className="forward"
                        size="2x"
                        icon={faAngleRight}
                    />
                </div>
            </div>
            <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
            ></audio>
        </div>
    );
};

export default Player;

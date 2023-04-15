import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
    currentSong,
    setCurrentSong,
    songs,
    isPlaying,
    setIsPlaying,
    audioRef,
    songInfo,
    setSongInfo,
}) => {
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

    const dragHandler = (e) => {
        const newTime = e.target.value;

        audioRef.current.currentTime = newTime;
        setSongInfo({ ...songInfo, currentTime: newTime });
    };

    const skipSongHandler = async (direction) => {
        const currentSongIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );

        let newSongIndex;
        if (direction === "skip-back") {
            newSongIndex = currentSongIndex - 1;
        } else if (direction === "skip-forward") {
            newSongIndex = currentSongIndex + 1;
        }

        if (newSongIndex === songs.length) {
            newSongIndex = 0;
        } else if (newSongIndex === -1) {
            newSongIndex = songs.length - 1;
        }
        await setCurrentSong(songs[newSongIndex]);
        if (isPlaying) audioRef.current.play();
    };

    //Functions
    const formatTime = (decimalSeconds) => {
        decimalSeconds = Math.round(decimalSeconds);
        const minutes = Math.floor(decimalSeconds / 60);
        const seconds = Math.floor(decimalSeconds % 60);
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    //Adding track style
    const animateTrackStyle = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    };

    const trackStyle = {
        background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
    };

    return (
        <div>
            <div className="player-container">
                <div className="time-control">
                    <p>{formatTime(songInfo.currentTime || 0)}</p>
                    <div style={trackStyle} className="track">
                        <input
                            onChange={dragHandler}
                            type="range"
                            min={0}
                            max={Math.round(songInfo.duration || 0)}
                            value={Math.round(songInfo.currentTime || 0)}
                        />
                        <div
                            style={animateTrackStyle}
                            className="animate-track"
                        ></div>
                    </div>
                    <p>{formatTime(songInfo.duration || 0)}</p>
                </div>
                <div className="play-control">
                    <FontAwesomeIcon
                        onClick={() => skipSongHandler("skip-back")}
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
                        onClick={() => skipSongHandler("skip-forward")}
                        className="forward"
                        size="2x"
                        icon={faAngleRight}
                    />
                </div>
            </div>
        </div>
    );
};

export default Player;

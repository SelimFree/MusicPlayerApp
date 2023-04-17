import "./styles/app.css";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import data from "./data";
import React, { useState, useRef } from "react";

function App() {
    //Refs
    const audioRef = useRef(null);

    //States
    const [songs] = useState(data());
    let randomSong = Math.floor(Math.random() * songs.length);

    const [currentSong, setCurrentSong] = useState(songs[randomSong]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });
    const [isOpened, setIsOpened] = useState(false);

    //Handlers
    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        const animationPercentage = Math.round((currentTime / duration) * 100);

        setSongInfo({ currentTime, duration, animationPercentage });
    };

    const songEndedHandler = async () => {
        const currentSongIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );
        let newSongIndex = currentSongIndex + 1;

        if (newSongIndex === songs.length) {
            newSongIndex = 0;
        }
        await setCurrentSong(songs[newSongIndex]);

        //wait 500 milliseconds to avoid event overlapping
        await setTimeout(() => {
            if (isPlaying) audioRef.current.play();
        }, 500)


    };

    return (
        <div className = {isOpened ? "App main-pushed": "App"}>
            <Nav isOpened={isOpened} setIsOpened={setIsOpened} />
            <Song
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                isPlaying={isPlaying}
            />
            <Player
                songs={songs}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
            />
            <Library
                songs={songs}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}
                isOpened={isOpened}
            />
            <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                onEnded={songEndedHandler}
                ref={audioRef}
                src={currentSong.audio}
            ></audio>
        </div>
    );
}

export default App;

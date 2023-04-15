const LibrarySong = ({
    audioRef,
    song,
    currentSong,
    setCurrentSong,
    isPlaying,
}) => {
    //Handlers
    const changeSongHandler = async () => {
        await setCurrentSong(song);
        if (isPlaying) audioRef.current.play();
    };

    return (
        <div
            onClick={changeSongHandler}
            className={
                currentSong.id === song.id
                    ? "library-song-container active"
                    : "library-song-container"
            }
        >
            <img src={song.cover} alt=""></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;

import LibrarySong from "./LibrarySong";

const Library = ({
    audioRef,
    songs,
    currentSong,
    setCurrentSong,
    isPlaying,
    isOpened,
}) => {
    return (
        <div
            className={
                isOpened ? "libary-container opened" : "libary-container"
            }
        >
            <h2>Library</h2>
            <div className="song-list">
                {songs.map((song) => (
                    <LibrarySong
                        audioRef={audioRef}
                        song={song}
                        currentSong={currentSong}
                        setCurrentSong={setCurrentSong}
                        isPlaying={isPlaying}
                        key={song.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;

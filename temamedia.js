var music = (function () {
    var obj = {};
    var playlist= {
        track1: "Melodia 1- cantaretul1",
        track2: "Melodia 2- cantaretul2",
        track3: "Melodia 3- cantaretul3",
     }
obj.mp1 = function showPlaylist() {
    console.log(playlist)
};
obj.mp2 = function showNextTrack() {
    console.log("Next track is: ", playlist[1])
};
obj.mp3 = function removeTrackfromQueue( track) {
    playlist.pop(track)
    console.log("Track removed")
    // sau playlist.dequeue()
};
obj.mp4 = function addTrackToQueue( track ) {
    playlist.push(track)
    console.log("Track added")
    // sauu playlist.enqueue()
};
obj.mp5 = function nextTrack( track ) {};
obj.mp6 = function previousTrack( track ) {};
obj.mp7 = function play() {
    console.log( "Play Music")
};
obj.mp8 = function pause() {
    console.log( "Pause Music")
};
obj.mp9 = function stop() {
    console.log( "Stop Music")
};
return obj;
return playlist;
}
)
/// eroare:
music.stop();
music.showNextTrack();
music.push(" Melodie 4- cantaretul 4") ; 

  
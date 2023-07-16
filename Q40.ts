/ Q40 - Album

function make_album(artist: string, album: string, numoftracks?: number) {
  let obj;
  if (numoftracks) {
    obj = {
      artist: artist,
      album: album,
      tracks: numoftracks
    }
    console.log(obj)
  } else {
    obj = {
      artist: artist,
      album: album
    }
    console.log(obj)
  }
}
make_album("artist 1", "album 1")
make_album("artist 2", "album 2", 4)
make_album("artist 3", "album 3")

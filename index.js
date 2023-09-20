const songs = [
  {
    title: "Hayloft I",
    artist: "Mother Mother",
    genre: "Indie rock",
    duration: "3:24",
    yearOfRelease: 2008,
    wasOnFire: true,
  },
  {
    title: "La posada de los muertos",
    artist: "Mägo de Oz",
    genre: "Metal progresivo",
    duration: "4:45",
    yearOfRelease: 2005,
    wasOnFire: true,
  },
  {
    title: "Vitality",
    artist: "Mittsies",
    genre: "Instrumental",
    duration: "3:37",
    yearOfRelease: 2020,
    wasOnFire: false,
  },
];

newsong = {
  title: "hola",
  artist: "hola",
  genre: "hola",
  duration: "hola",
  yearOfRelease: 2222,
  wasOnFire: true,
};

const addToSongs = (newsong) => songs.push(newsong);

const deleteFromSongsWithTitle = (title) => {
  let index = 0;
  songs.find((song, position) => {
    index = position;
    return song.title === title;
  });
  songs.splice(index, index);
};

const findSongWithTitle = (title) => songs.find((song) => song.title === title);

const findSongWithgenre = (genre, songs) =>
  songs.filter((song) => song.genre == genre);

const findSongWhoWereOnFire = (songs) =>
  songs.filter((song) => song.wasOnFire).length;

const showSongs = (songs) => songs.forEach((song) => console.log(song.title));

showSongs(songs);
showSongs(findSongWithgenre("Metal progresivo", songs));
console.log(findSongWhoWereOnFire(songs));

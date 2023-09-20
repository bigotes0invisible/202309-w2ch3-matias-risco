const songs = [
  {
    title: "Hayloft I",
    artist: "Mother Mother",
    genres: "Indie rock",
    duration: "3:24",
    yearOfRelease: 2008,
    wasOnFire: true,
  },
  {
    title: "La posada de los muertos",
    artist: "Mägo de Oz",
    genres: "Metal progresivo",
    duration: "4:45",
    yearOfRelease: 2005,
    wasOnFire: true,
  },
  {
    title: "Vitality",
    artist: "Mittsies",
    genres: "Instrumental",
    duration: "3:37",
    yearOfRelease: 2020,
    wasOnFire: false,
  },
];
newsong = {
  title: "hola",
  artist: "hola",
  genres: "hola",
  duration: "hola",
  yearOfRelease: 2222,
  wasOnFire: true,
};
const addToSongs = (newsong) => songs.push(newsong);

songs.forEach((song) => console.log(song.title));
addToSongs(newsong);
songs.forEach((song) => console.log(song.title));

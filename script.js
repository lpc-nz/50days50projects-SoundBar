// To create the buttons and sounds
// Create a array to store all of Sound name, it will become an ID for each button
// Loop though the array to take each sound name
// Create variable to create button
// Add class to the button
// Add the Text for button which is value from the loop from array
// Add eventListener for each button
// When it click, It will take the element by each ID from array then play the sound

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');

  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

//Function will stop the song when you click another button
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    //be able to reclick same button to replay if click same button
    song.currentTime = 0;
  });
}

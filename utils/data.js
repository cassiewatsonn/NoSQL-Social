const usernames = [
    'BobWilson',
    'AarenWard',
    'CarlyClayton',
    'JamieLawrence',
    'RebeccaWilson',
    'AaronMoon',
    'ZacharyMachlean',
    'MatthewFrances',

  ];


  
  const reactions = [
    'Cool!',
    'Laughing Emoji',
    'Thumbs Up',
    'Smile Emoji',
 
  ];
  
  const thought = [
    'Spent the day at the Zoo!',
    'Learning NoSQL!',
    'Happy Birthday Sally!',
    'Happy Anniversary Mom and Dad!',

  ];
  
  const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
  
  const getRandomWord = () => `${thought[genRandomIndex(thought)]}`;
  
  const getRandomThought = (words) => {
    let post = '';
    for (let i = 0; i < words; i++) {
      post += ` ${getRandomWord()}`;
    }
    return post;
  };
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomUserName = () =>
    `${getRandomArrItem(usernames)} ${getRandomArrItem(usernames)}`;
  
  // Function to generate random reactions given a number (ex. 10 Reactions === getRandomReactions(10))
  const getRandomReaction = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        text: getRandomArrItem(reactions),
        username: getRandomUserName().split(' ')[0],
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = {
    getRandomUserName,
    getRandomReaction,
    getRandomThought,
    genRandomIndex,
  };
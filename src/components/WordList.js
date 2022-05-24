const WordList = [
    'sample',
    'word',
    'random',
    'hello',
    'world'
] 

function Word() {
    let word = WordList[Math.floor(Math.random() * WordList.length)];
    return word.toUpperCase();
  }

export default Word
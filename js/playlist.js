var playList = [
  ['I Thnk We\'re Alone Now','The Rubinoos'],
  ['Easy Street', 'Eddie Howell'],
  ['Kaleidoscope','Kaleidoscope UK'],
  ['Come Back Jonee','Devo'],
  ['Peter\'s Birthday','World of Oz'],
  ['L\'Education', 'Aline']
 ];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);

/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  if (isNaN(height) || height < 1) throw 'Please use a value for height equal to or greater than 1';
  if (typeof(character) !== 'string' && character.length !== 1) throw 'Please use a single character string';
  let newStr = '';
  switch (shape) {
    case 'Square':
      let block = character.repeat(height);
      for (let i = 0; i < height; i++) {
        newStr += block;
        if (i !== height - 1) newStr += '\n';
      }
      break;

    case 'Triangle':
      for (let i = 0; i < height; i++) {
        newStr += character.repeat(i + 1);
        if (i !== height - 1) newStr += '\n';
      }
      break;

    case 'Diamond':
      if (height < 3) throw 'Sorry, but for a diamond we need a height of at least 3';
      for (let i = 0; i < height; i += 2) {
        let block = character.repeat(i + 1);
        while (block.length < height) {
          block = ' ' + block + ' ';
        }
        newStr += block + '\n';
      }
      for (let i = height - 1; i >= 0; i -= 2) {
        if (i === height - 1) continue;
        let block = character.repeat(i + 1);
        while (block.length < height) {
          block = ' ' + block + ' ';
        }
        newStr += block;
        if (i > 1) newStr += '\n';
      }
      break;

    default:
      console.log("That wasn't an option.");
  }
  console.log(newStr);
}

printShape('Square', 5, '%');
printShape('Triangle', 5, '$');
printShape('Diamond', 5, '*');
printShape('Square', 7, '#');
printShape('Triangle', 8, '@');
printShape('Diamond', 9, '!');
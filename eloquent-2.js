//Excersise 1

for (var i = '#'; i.length < 8; i += '#')
  console.log(i);

//Excersise 2

for (var i = 1; i <= 100; i++) {
  var result = "";
  if (i % 3 == 0)
  result += 'Fizz';
  if (i % 5 == 0)
    result += 'Buzz';
  else
    result = i;
  console.log(result);
}

//Excersise 3

var grid = "";
var size = 15;

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      grid += " ";
    else
      grid += "#";
  }
  grid += "\n";
}  

console.log(grid)
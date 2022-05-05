// Initialising arrays

let letters = new Array(11)
letters[0] = '.,!'
letters[1] = 'abc'
letters[2] = 'def'
letters[3] = 'ghi'
letters[4] = 'jkl'
letters[5] = 'mno'
letters[6] = 'pqrs'
letters[7] = 'tuv'
letters[8] = 'wxyz'
letters[9] = ''
letters[10] = ''
letters[11] = ''

let numbers = new Array(11)
numbers[0] = '1'
numbers[1] = '2'
numbers[2] = '3'
numbers[3] = '4'
numbers[4] = '5'
numbers[5] = '6'
numbers[6] = '7'
numbers[7] = '8'
numbers[8] = '9'
numbers[9] = '*'
numbers[10] = '0'
numbers[11] = '#'

// Initialising variables
let text = ''
let counter = 0

// Starter function to display keypad and screen
function load() {
  let content = ''

  for (i = 0; i <= 11; i++) {
    let element = 'number' + i
    content =
      content +
      '<div class="letter" onclick="run(' +
      i +
      ')" id="' +
      element +
      '">' +
      numbers[i] +
      '<br>' +
      letters[i] +
      '</div>'
    if ((i + 1) % 3 == 0) content = content + '<div style="clear:both;"></div>'
  }

  document.getElementById('keycontainer').innerHTML = content
}

// Logic
function run(e) {
  for (i = 0; i <= 11; i++) {
    let element = 'number' + i
    document.getElementById(element).addEventListener('mousemove', reset)
  }
  // Switching based on the clicked div
  switch (e) {
    case 0:
      counter++
      if (counter >= 4) {
        counter = 1
        text = text.toString().replace(/.$/, '.')
        document.getElementById('screen').value = text
      } else {
        if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, '!')
          document.getElementById('screen').value = text
        } else if (counter % 2 == 0) {
          text = text.toString().replace(/.$/, ',')
          document.getElementById('screen').value = text
        } else {
          text += '.'
          document.getElementById('screen').value = text
        }
      }
      break
    case 1:
      counter++
      if (counter >= 4) {
        counter = 1
        text = text.toString().replace(/.$/, 'a')
        document.getElementById('screen').value = text
      } else {
        if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, 'c')
          document.getElementById('screen').value = text
        } else if (counter % 2 == 0) {
          text = text.toString().replace(/.$/, 'b')
          document.getElementById('screen').value = text
        } else {
          text += 'a'
          document.getElementById('screen').value = text
        }
      }
      break
    case 2:
      counter++
      if (counter >= 4) {
        counter = 1
        text = text.toString().replace(/.$/, 'd')
        document.getElementById('screen').value = text
      } else {
        if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, 'f')
          document.getElementById('screen').value = text
        } else if (counter % 2 == 0) {
          text = text.toString().replace(/.$/, 'e')
          document.getElementById('screen').value = text
        } else {
          text += 'd'
          document.getElementById('screen').value = text
        }
      }
      break
    case 3:
      counter++
      if (counter >= 4) {
        counter = 1
        text = text.toString().replace(/.$/, 'g')
        document.getElementById('screen').value = text
      } else {
        if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, 'i')
          document.getElementById('screen').value = text
        } else if (counter % 2 == 0) {
          text = text.toString().replace(/.$/, 'h')
          document.getElementById('screen').value = text
        } else {
          text += 'g'
          document.getElementById('screen').value = text
        }
      }
      break
    case 4:
      counter++
      if (counter >= 4) {
        counter = 1
        text = text.toString().replace(/.$/, 'j')
        document.getElementById('screen').value = text
      } else {
        if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, 'l')
          document.getElementById('screen').value = text
        } else if (counter % 2 == 0) {
          text = text.toString().replace(/.$/, 'k')
          document.getElementById('screen').value = text
        } else {
          text += 'j'
          document.getElementById('screen').value = text
        }
      }
      break
    case 5:
      counter++
      if (counter >= 4) {
        counter = 1
        text = text.toString().replace(/.$/, 'm')
        document.getElementById('screen').value = text
      } else {
        if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, 'o')
          document.getElementById('screen').value = text
        } else if (counter % 2 == 0) {
          text = text.toString().replace(/.$/, 'n')
          document.getElementById('screen').value = text
        } else {
          text += 'm'
          document.getElementById('screen').value = text
        }
      }
      break
    case 6:
      counter++
      if (counter >= 5) {
        counter = 1
        text = text.toString().replace(/.$/, 'p')
        document.getElementById('screen').value = text
      } else {
        if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, 'r')
          document.getElementById('screen').value = text
        } else if (counter % 4 == 0) {
          text = text.toString().replace(/.$/, 's')
          document.getElementById('screen').value = text
        } else if (counter % 2 == 0) {
          text = text.toString().replace(/.$/, 'q')
          document.getElementById('screen').value = text
        } else {
          text += 'p'
          document.getElementById('screen').value = text
        }
      }
      break
    case 7:
      counter++
      if (counter >= 4) {
        counter = 1
        text = text.toString().replace(/.$/, 't')
        document.getElementById('screen').value = text
      } else {
        if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, 'v')
          document.getElementById('screen').value = text
        } else if (counter % 2 == 0) {
          text = text.toString().replace(/.$/, 'u')
          document.getElementById('screen').value = text
        } else {
          text += 't'
          document.getElementById('screen').value = text
        }
      }
      break
    case 8:
      counter++
      if (counter >= 5) {
        counter = 1
        text = text.toString().replace(/.$/, 'w')
        document.getElementById('screen').value = text
      } else {
        if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, 'y')
          document.getElementById('screen').value = text
        } else if (counter % 4 == 0) {
          text = text.toString().replace(/.$/, 'z')
          document.getElementById('screen').value = text
        } else if (counter % 2 == 0) {
          text = text.toString().replace(/.$/, 'x')
          document.getElementById('screen').value = text
        } else {
          text += 'w'
          document.getElementById('screen').value = text
        }
      }
      break
    case 9:
      counter++
      if (counter >= 1) {
        text += '*'
        document.getElementById('screen').value = text
      }
      break
    case 10:
      counter++
      if (counter >= 1) {
        text += '0'
        document.getElementById('screen').value = text
      }
      break
    case 11:
      counter++
      if (counter >= 1) {
        text += '#'
        document.getElementById('screen').value = text
      }
  }
  function reset() {
    document.getElementById('screen').value = text
    counter = 0
    return counter
  }
}

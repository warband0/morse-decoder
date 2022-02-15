const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = expr.split("**********");
    let array4 = [];
    array.forEach((value) => {
      let array3 = [];
      for (let i = 0; i < value.length;){
        let l = 0;
        let letterCode = [];
        while (l != 10){
          letterCode.push(value[i + l]);
          l++;
        }
        let letterMorse = "";
        for (let p = 0; p < letterCode.length - 1;){
          if (letterCode[p] + letterCode[p + 1] == "10"){
            letterMorse += ".";
          } else if (letterCode[p] + letterCode[p + 1] == "11"){
              letterMorse += "-";
          }
          p += 2;
        }
        let letter = MORSE_TABLE[letterMorse];
        array3.push(letter);
        i += 10;
      }
      array4.push(array3.join(""));
    })
    return array4.join(" ")
}

module.exports = {
    decode
}
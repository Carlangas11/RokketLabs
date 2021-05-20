// "TOPCODER"

// Returns: 1

// We can convert "TOPCODER" to "TOOCODER" in a single operation.
// After that transformation, it has 4 vowels (three 'O's and one 'E') and 4 consonants ('T', 'C', 'D', and 'R').

// class EllysBalancedStrings {
//     constructor(value){

//         this.vowals = 0
//         this.consonant = 0
//     }

//     getMin(val){
//         const vowals = ['A','E','I','O','U'];
//         for(let i = 0; i<val.length; i++){
//             if(vowals.find( v => v === val[i])){
//                 this.vowals++
//             }
//             else {
//                 this.consonant++
//             }
//         }
//         if(this.vowals === this.consonant) return 0
//     }
// }

const EllysBalancedStrings = (string, index = 0, total = 1) => {
  const vowals = ["A", "E", "I", "O", "U"];
  const abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var maxVowals = 0;
  var maxConstant = 0;
  var changeString = string;
  for (let i = 0; i < changeString.length; i++) {
    if (vowals.find((v) => v === changeString[i])) {
      maxVowals++;
    } else {
      maxConstant++;
    }
  }

  if (maxVowals === maxConstant) {
    return index;
  } else {
      
    for (let j = 0; j < changeString.length; j++) {
      // var help = 1
      if (changeString[j] === "A") j++;
      if (changeString[j] === "Z") j++;
      if (changeString[j] === "Y") j++;
      if (!vowals.find((v) => v === changeString[j])) {
        var change = abc.indexOf(changeString[j]);
        var changeVowals = abc[change + total];
        if (vowals.find((v) => v === changeVowals)) {
            index = index + total
            total = 1
          var arr = changeString.split("");
          arr[j] = changeVowals;
          changeString = arr.join("");
          return EllysBalancedStrings(changeString, index, total);
        } else {
          changeVowals = abc[change - total];
          if (vowals.find((v) => v === changeVowals)) {
            index = index + total
            total = 1
            var arr = changeString.split("");
            arr[j] = changeVowals;
            changeString = arr.join("");
            return EllysBalancedStrings(changeString, index, total);
          }
        }
      }
    }
    total++;
    EllysBalancedStrings(changeString, index, total);
  }
};

module.exports = {
  EllysBalancedStrings,
};

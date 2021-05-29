function PalindromeCreator(str) { 

    // code goes here  
    if(str === str.split('').reverse().join('')){
      return 'palindrome'
    }
    for(let j = 0; j<str.length;j++){
      var removeOneCharStr = removeChar(str, j)
      for(let k =j+1;k<str.length;k++){
        var removeSecondCharStr = removeChar(removeOneCharStr, k)
        if(removeSecondCharStr === removeSecondCharStr.split('').reverse().join('') && removeSecondCharStr.length>=3){
          return str[j] + str[k]
        }
      }
      if(removeOneCharStr === removeOneCharStr.split('').reverse().join('') && removeOneCharStr.length>=3){
        return str[j]
      }
    }
    
  return 'not possible'
  }
  
  const removeChar = (str, index) => {
    var newStr = ''
    for( let i =0; i<str.length;i++){
      if(str[i]!==str[index]){
        newStr = newStr + str[i]
      }
    }
    return newStr
  }
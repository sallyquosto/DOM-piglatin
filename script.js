function translatePigLatin(str) {
    if (str == "") {
      return "Error: please enter a word to translate."
    }
    
    var vowels = ["a","e","i","o","u","A","E","I","O","U"];
    var punc = [".","?","!",",","\"","'"];
    
    var sentence = str.split(/(?=[!?.,])|[_-\s]/).filter(x => x);
    var result = [];
    
    for (let i = 0; i < sentence.length; i++) {
      
      var arr = sentence[i].split(/([aeiouAEIOUyY])/).filter(x => x);
      var firstLetter = "";
     
      if (/[^a-zA-Z]/.test(arr[0])) {
        firstLetter = "punc";
      } else if (/[yY]/.test(arr)) {
        firstLetter = "y";
      } else if (vowels.indexOf(arr[0]) != -1) {
        firstLetter = "vowel";
      }
      
      switch (firstLetter) {
        case 'punc':
        break;
        case 'y':
         if (/[aeiouAEIOU]/.test(arr)) {
            while (vowels.indexOf(arr[0].charAt(0)) == -1) {
              arr.push(arr.shift().toLowerCase());
            }
            arr.push('ay');
          } else {
            arr.push(arr.shift().toLowerCase());
            arr.push('ay');
          }
          break;
        case 'vowel':
          if (/[yY]/.test(arr[arr.length-1])) {
            arr.push("ay");
          } else {
            arr.push("yay"); 
          }
          break;
        default:
          arr.push(arr.shift().toLowerCase());
          arr.push('ay');
          break;
      }
      
      if (i == 0 || sentence[i].charAt(0) == sentence[i].charAt(0).toUpperCase()) {
        arr[0] = arr[0].charAt(0).toUpperCase();
      }
      
      result.push(arr.join(''));
    }
    
    return result.join(" ").replace(/\s([?.!,])/gi, '$1');
  }

  var Button = document.getElementById('Button');
  Button.onclick = function () {
    var inputText = document.getElementById('inputText').value;
    var outputText = document.getElementById('outputText').value = translatePigLatin(inputText);
  };
  
  function process(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 13) {
          var inputText = document.getElementById('inputText').value;
          var outputText = document.getElementById('outputText').value = translatePigLatin(inputText);
      }
  }
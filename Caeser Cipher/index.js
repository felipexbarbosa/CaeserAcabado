function CaeserCipher(){
  let str = document.getElementById("input").value;
  let amount = document.getElementById("shift").value;
  let answer = document.getElementById("output");
  if (amount < 0) {
    answer.innerHTML = str, amount + 26;
  }
  
  let output = "";

  for (let i = 0; i < str.length; i++) {
    let c = str[i];

    if (c.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    output += c;
  }

  answer.innerHTML = output;
}
function CaeserCipher2(){
  let str = document.getElementById("input").value;
  let amount = document.getElementById("shift").value;
  let answer = document.getElementById("output");
  if (amount < 0) {
    answer.innerHTML = str, amount + 26;
  }
  
  let output = "";

  for (let i = 0; i < str.length; i++) {
    let c = str[i];

    if (c.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 - amount) % 26) + 65);
      }

      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 - amount) % 26) + 97);
      }
    }

    output += c;
  }

  answer.innerHTML = output;
}




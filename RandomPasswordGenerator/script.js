const passwordBox = document.getElementById("password");
const length = 11;

const uppercase = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*(){}[]_;:<>,./?~`-+=";
const allChars = uppercase + lowercase + numbers + symbols;

const createPassword = () =>{
  let password = "";
  password +=uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

const copyPassword = () =>{
  passwordBox.select();
  document.execCommand("copy");
}
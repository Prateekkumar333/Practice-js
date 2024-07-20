const name  = "prateek"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName)
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)// we can not give negative value here
console.log(newString);

const anotherString = gameName.slice(-8, 4)// we can give negative value here
console.log(anotherString);

const newStringOne = "    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

console.log(splitGameName = gameName.split("-"));

const sentence = "the quick brown fox jumps over the lazy dog"
console.log(sentence.at(-5));

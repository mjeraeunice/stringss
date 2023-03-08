//Extract the last four characters from the string below;"Extravaganza"
var x= "Extravaganza"
console.log(x[8],x[9],x[10],x[11]);
//Insert the following string at the fourth index of the below variable "eat"
const b= "eat"
const food=`The quick fox jumped ${b} the lazy dog`
console.log(food);
//Count how many times the following string appears in the string variable;
//1. "the", 2. "brown"
const story= "The quick brown fox jumpsover the lazy dog"
let count=(story.match(/the/g)||[]).length;
console.log(count);
let counts=(story.match(/brown/g)||[]).length;
console.log(counts);
//Find the following words from the following strings.
//'are' const string1= "The pupils are reading in the library".
//'sitting'const string2= "The child was sitting on the table before it fell"
const string1= "The pupils are reading in the library"
const string2="The child was sitting on the table before it fell"
const reading= string1.search("are");
console.log(reading);
const table= string2.search("sitting")
console.log(table)
//Convert the following strings into the specified format:
// UpperCase: "wonderful"
//LowerCase: "amazing", "UndERneath"
// Title case "A wonderful world"
const a= "wonderfull"
const c= a.toUpperCase();
console.log(c);
const e= "amazing"
const f= e.toLowerCase();
console.log(f);
const g= "UndERneath"
const h= g.toLowerCase()
let k="A wonderful world"
k=k.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(k);


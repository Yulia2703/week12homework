const text = document.getElementById("text");
//console.log("text");
const onlyText = text.textContent;
//console.log("onlyText");
const textLenght = onlyText.length;
//console.log("textLenght");

const result = onlyText.replace(/;/g,'\n');
//console.log("result");

const substring = result.replace(/\s+/g,'');
//console.log("substring");

const newText = result.slice(28,50);
//console.log("newText");

const replacedText = newText.replace("клён","дубе");
//console.log("replacedText");

const replacedText2 = result.toUpperCase();
//console.log("replacedText2");

const replacedText3 = result.replace(/клён/g,"дуб");
//console.log("replacedText3");

const index = onlyText.indexOf("моря");
//console.log("index");

const modifiedText =() => {
const findLetter = replacedText[0];
const upperLetter = findLetter.toUpperCase();
const slisedText = replacedText.slice(1);

} 
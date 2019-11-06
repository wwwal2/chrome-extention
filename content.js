spellChecker = (text) => {
    return text
        .replace("Foo", "bar")
        .replace("Cat", "Dog")
        .replace("Helo", "hello")
        .replace("heldp", "help");
};


let inputArray = [...document.getElementsByTagName("input")];
let iFrame = [...document.getElementsByTagName("iframe")];

// let content = [...document.getElementsByTagName("*")];
// console.log(content[0])

console.log("iFrame", iFrame);

inputArray.map(obj => {
    return obj.onkeypress = (e) => {
                if (e.key === " ") obj.value = spellChecker(obj.value)
            };
})


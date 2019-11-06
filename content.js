spellChecker = (text) => {
    return text
        .replace("Foo", "bar")
        .replace("Cat", "Dog")
        .replace("Helo", "hello")
        .replace("heldp", "help");
};


let inputArray = [...document.getElementsByTagName("input")];

let content = [...document.getElementsByTagName("*")].filter(obj => obj.contenteditable === "true");

console.log("Content", content);

inputArray.map(obj => {
    return obj.onkeypress = (e) => {
                if (e.key === " ") obj.value = spellChecker(obj.value)
            };
})


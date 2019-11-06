spellChecker = (text) => {
    return text
        .replace("Foo", "bar")
        .replace("Cat", "Dog")
        .replace("Helo", "hello")
        .replace("heldp", "help");
};

let inputArray = [...document.getElementsByTagName("input")].filter(obj => obj.type === "search");

let content = [...document.querySelectorAll('[contenteditable=true]')];

console.log("Content", content);
console.log(document.querySelectorAll('[contenteditable]'));

for (obj of inputArray) {
    obj.onkeypress = (e) => {
        if (e.key === " ") obj.value = spellChecker(obj.value)
    };
}


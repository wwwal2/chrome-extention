spellChecker = (text) => {
    return text
        .replace("Foo", "bar")
        .replace("Cat", "Dog")
        .replace("Helo", "hello")
        .replace("heldp", "help");
};

let inputTagsArray = [...document.getElementsByTagName("input")];
inputTagsArray.map(obj => {
    return obj.onkeypress = (e) => {
        if (e.key === " ") obj.value = spellChecker(obj.value)
    };
})

let iFrames = [...document.getElementsByTagName("iframe")].map(obj => obj.contentWindow.document.querySelectorAll('[contenteditable=true]'));
console.log("iFrames", iFrames);
// CORS violation
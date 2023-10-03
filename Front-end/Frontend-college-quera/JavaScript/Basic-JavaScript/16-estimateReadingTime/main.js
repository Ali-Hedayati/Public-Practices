function estimateReadingTime(text) {
    const pureText = text.replace(/[,.!?:;\n\t]/g,'')
    let arraytext = pureText.split(' ')
    let len = 0;
    for(let i = 0 ; i < arraytext.length ; i++) if(arraytext[i] != "") len++;
    return Math.ceil(len / 200)
}

export default estimateReadingTime; 

function randomText(wordsCount) {
    /*
    از این تابع میتوانید برای تولید کردن
    یک متن دلخواه با تعداد کلمات دلخواه استفاده کنید
    */
    return Array(wordsCount).fill("").map(randomWord).join(" ");
}

function getRandom(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function randomWord() {
    const vowels = ["a", "e", "i", "o", "u"];
    const consonants = [
        "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", 
        "n", "p", "r", "s", "t", "v", "w", "x", "y", "z"
    ];  

    return Array(Math.floor(Math.random() * 4 + 4))
        .fill("")
        .map(() => getRandom(consonants) + getRandom(vowels))
        .join("");
}


estimateReadingTime(randomText(200));
estimateReadingTime(randomText(201));
estimateReadingTime(randomText(50));
estimateReadingTime(randomText(1895));

/////////////////Quera
function estimateReadingTime(text) {
	// TODO: Implement
	const words = text
		.replace(/[.!?,;:]/, " ")
		.replace(/\s+/, " ")
		.split(" ");

	return words.length === 1 && words[0] === ""
		? 0
		: Math.ceil(words.length / 200);
}

// DO NOT REMOVE NEXT LINE!
export default estimateReadingTime;
////////////////////////////
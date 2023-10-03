///quera anwser

// function secure(word) {
// 	const regex = /09[0-9]{9}/;
// 	if (regex.test(word)) {
// 		return word.slice(0, 4) + "***" + word.slice(7);
// 	}
// 	return word;
// }
// export function securePhoneNumbers(text) {
// 	// TODO:

// 	return String(text).split(" ").map(secure).join(" ");
// }

///////// my answer
function securePhoneNumbers(text) {
  return String(text).split(" ").map(secure).join(" ");
}

function secure(w) {
  let reg = /09[0-9]{9}/;
  if (reg.test(w)) {
    return w.slice(0, 4) + "***" + w.slice(7);
  } else return w;
}

console.log(
  securePhoneNumbers("This is a sample text. My phone number is 59216557777   ")
);

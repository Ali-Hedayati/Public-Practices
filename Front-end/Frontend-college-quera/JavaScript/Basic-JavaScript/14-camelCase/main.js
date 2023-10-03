function camelCase(text) {
	 return text.trim().split(' ').map(x => x.toLowerCase()).map((e , i) => {
    
    if(i > 0) return e.split('').map((e , i) => {
      if(i == 0) return e.toUpperCase()
      else return e
    }).join('')
    else return e
  }).join('');
}

export default camelCase;



/////quera
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function camelCase(text) {
	const [first, ...others] = text
		.trim()
		.split(" ")
		.filter((str) => str !== "")
		.map(capitalize);
	return first.toLowerCase() + others.join("");
}

export default camelCase;

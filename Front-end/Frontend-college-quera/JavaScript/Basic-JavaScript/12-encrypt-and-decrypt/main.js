function encrypt(str, n) {
   let ennum = str.split('').map((x) => ((String(x).charCodeAt(0)) + (n%26)));
   let en = ennum.map((x) => String.fromCharCode(x)).join('');
   return en;
}

function decrypt(str, n) {
	return encrypt(str, 26 - (n % 26));
}

export { encrypt, decrypt };
///////////////////////////////////////////
function encrypt(str, n) {
    let y = 0;
    let ennum = str.split('').map((x) => { y = (   (String(x).charCodeAt(0)) + (n%26))  
                                            if (y >= 123 || (y >= 91 && 96 >= y) ) {
                                             return y = y - 26;
                                            }
                                            else return y;
                                        } 
                                );
   let en = ennum.map((x) => String.fromCharCode(x)).join('');
   return en;
}

function decrypt(str, n) {
	return encrypt(str, 26 - (n % 26));
}

export { encrypt, decrypt };

/////////////////////////////////////QUERA
function encrypt(str, n) {
    const encrypted = [];
    const char = (c) => String.fromCharCode(c);
    const ascii = (c) => String(c).charCodeAt(0);
    const isUpper = (c) => String(c).toUpperCase() === c;

    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        const e = ascii(c) + (n % 26);
        if (isUpper(c)) {
            if (e > "Z".charCodeAt(0)) encrypted.push(e - 26);
            else encrypted.push(e);
        } else {
            if (e > "z".charCodeAt(0)) encrypted.push(e - 26);
            else encrypted.push(e);
        }
    }

    return encrypted.map(char).join("");
}

function decrypt(str, n) {
    return encrypt(str, 26 - (n % 26));
}


export { encrypt, decrypt };
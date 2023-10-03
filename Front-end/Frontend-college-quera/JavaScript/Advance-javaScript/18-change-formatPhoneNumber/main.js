export function formatPhoneNumber(shapes) {
    let reg = new RegExp(/09/, 'ig');
    let text = shapes.toString();    
        if(reg.test(text)) return shapes.replace(/^0/ , '+98').toString()
        else return null
}

// DO NOT REMOVE NEXT LINE!
export default formatPhoneNumber;

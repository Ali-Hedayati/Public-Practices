function filterByTerm(inputArr, searchTerm) {
  let out = [];

  if (searchTerm == undefined) {
    out.push("searchTerm cannot be empty at filterByTerm");
  } else {
    let LowerCaseSearchTerm = searchTerm.toLowerCase();
    const regex = new RegExp(LowerCaseSearchTerm);
    for (let i = 0; i < inputArr.length; i++) {
      if (regex.test(inputArr[i].url)) {
        out.push(inputArr[i]);
      }
    }
  }
  return out;
}

module.exports = filterByTerm;

let inputArr = [
  { id: 1, url: "https://www.url1.dev" },
  { id: 2, url: "https://www.url2.dev" },
  { id: 3, url: "https://www.link3.dev" },
];
let searchTerm = "LINK";
console.log(filterByTerm(inputArr, searchTerm));

let contain = document.getElementById('container');
let ptags = contain.getElementsByTagName('p');
for(i=0 ; i<ptags.length; i++) ptags[i].style.color = 'indigo';
let body = document.querySelector("body");
let ptag = body.getElementsByTagName('p');
ptag[2].style.color = 'indianred'

//////another way to answer:
//const elm = document.querySelectorAll('p');
//elm.forEach((item) => item.parentElement.id ==="container" ? item.style.color= 'indigo': item.style.color= 'indianred')


//////another way to answer:
//const inner_p = Array.from(document.querySelectorAll("#container p"));
//const outer_p = Array.from(document.querySelectorAll("#container~p"));

//inner_p.forEach((p) => {
//    p.style.color = "indigo";
//});

//outer_p.forEach((p) => {
//    p.style.color = "indianred";
//});


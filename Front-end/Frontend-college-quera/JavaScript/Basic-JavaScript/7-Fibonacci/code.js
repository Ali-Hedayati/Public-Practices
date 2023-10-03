const n = Number(readline())
let x1 = 0;
let x2 = 1;
if(n > 3){
    let y = 0;
    let all = x1 + ', ' + x2;
    for(let i = 0 ; i < n - 2 ; i++){
        y = x1 + x2;
        x1 = x2;
        x2 = y;
        all = all + ', ' + y;
    }
    console.log(all);
}
else if(n == 1){
    console.log(x1);
}
else if(n == 2){
   console.log(x1 + ', ' + x2);
}

const input = readline().split(" ");

const isPrime = (number) => {
    for(let i = 2 ; i < number ; i++){
        if(number % i == 0){
            return false;
        }
    }
        return true;
}

const output = input.filter((el) => isPrime(el));
console.log(output.join(" "));
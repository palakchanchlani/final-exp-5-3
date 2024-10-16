function* generatePrimes(limit) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let num = 2;
    while (num <= limit) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}

// Example usage:
const primeGenerator = generatePrimes(20);
let prime = primeGenerator.next();
while (!prime.done) {
    console.log(prime.value);
    prime = primeGenerator.next();
}

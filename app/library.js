module.exports = {
   getPrimes : function(n)
    { 
       if(n === 0 || n === null){
         return 'no value';
       }
       if(typeof(n) !== 'number'){
         return 'undefined';
       }
       primeArr=[2],isPrime;
       for (var i = 3;i<=n;i+=2){
           var j =Math.sqrt(i);
           var isPrime = true;
           for (var k = 2; k <= j; k++)
           {
                if (i % k === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                primeArr.push(i);
            }

        }   

        return primeArr;
    }
}
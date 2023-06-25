


let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function sum(arr){
    sum = 0
for( let i=0 ; i<arr.length; i++ ){
    if( i%2===0){
        sum =  sum + i ;
    }
}
document.write ( "<h1> <U> First assignment : </U> </h1>" + "<br>" +arr  + ":<br>" + "<br>"+ "Sum of all even number = " + sum);
}

let allsum = sum(arr);
console.log(allsum)














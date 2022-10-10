//2.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
const maxOfThree = (x, y, z) => {
return maxOfTwoNumbers(maxOfTwoNumbers(x, y), z);
}; 
console.log(maxOfThree(1, 2, 3))
//3. 
function isCharAVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let i = 0; i < vowels.length; i++) {
      if (char.toLowerCase() === vowels[i]) {
        return true;
      }
  }
  return false;
  }
  console.log(isCharAVowel("B")) 
//4.
let sumArray = (a) => {
    let sum = 0; 
    for (i = 0; i < a.length; i++){
        sum += a[i];
    }
    return sum;
}
console.log(sumArray([3, 4, 5]))
//5.
function multiplyArray(a) {
    let product = 1

    for(let i = 0; i < a.length; i++) {
        product *= a[i];
    }
    return product;
}
console.log(multiplyArray(25))
//6.
let numsArg = (a) => {
    let sum = 0
    for (i=0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
console.log(numsArg(2))
//7.
function reverseString(str) {
    let reversedStr = "yo banana boy";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
  
    return reversedStr
    }
console.log(reverseString)
//8.
  let longestStringInArray = (num1) => {
    let arr1 = num1[0].length
    console.log(arr1)
    let arr2 = num1[0]
    console.log(arr2)
    for (i = 1; i < num1.length; i++) {
        let wordC = num1[i].length
        if (wordC > arr1) {
            arr1 = wordC
            arr2 = num1[i]
        }
    }
    return arr2
}
console.log(longestStringInArray(['Cleveland', 'Ohio', 'Guardians']))
//9.
function stringsLongerThan(num1, num2){
    let x = []
     num1.forEach((check) => {
        if (check.length > num2){
            x.push(check)
        }
    })
console.log(x)
}
console.log(stringsLongerThan['Cincinnati', 'Redlegs', 'Tenz', 5])}
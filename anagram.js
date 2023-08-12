function anagram1(string1, string2){

    let len1 = string1.length;
    let len2 = string2.length;
    if (len1 !== len2){
        console.log("Your input is not valid")
        return
    }
    let str1 = string1.split('').sort().join('');
    let str2 = string2.split('').sort().join('');

    if (str1 === str2){
        console.log("True");
    } else{
        console.log("False");
    }
}

anagram1("indian","ndiani") // Case sensitive
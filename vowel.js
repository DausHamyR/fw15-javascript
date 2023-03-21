//Tugas No.5

function replaceVowel(str) {
    let result = "";
    if (typeof str === 'string') {
        for(var i = 0; i < str.length; i++){
            if(str[i] == 'a'){
                result += "o"
            }else {
                result += str[i]
            }
        }
        return result;
    }else {
        return "Teks Harus String";
    }
}

console.log(replaceVowel(12345));
console.log(replaceVowel("jakarta"));
//Tugas No.4

function cekPalindrome(str) {
    result = "";
    for(var i = str.length - 1; i >= 0; i--){
        result += str[i];
    };

    if(str.length <= 2){
        return "Teks harus lebih dari 2 huruf!";
    }else if(result === str){
        return "Palindrome";
    }else {
        return "Bukan Palindrome";
    }
}

    console.log(cekPalindrome("mm"));
    console.log(cekPalindrome("malam"));
    console.log(cekPalindrome("bintang"));
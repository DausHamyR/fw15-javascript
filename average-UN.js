// Tugas No.3

const bahasaIndonesia = 50;
const bahasaInggris = 70;
const matematika = 40;
const ipa = 0;
const test = bahasaIndonesia >= 1 && bahasaInggris >= 1 && matematika >= 1 && ipa;

if(test){
    const semuaNilai = (bahasaIndonesia + bahasaInggris + matematika + ipa) /4;
    
    if(semuaNilai >= 90 && semuaNilai <= 100) {
        console.log("Rata rata = " + semuaNilai)
        console.log("Grade = A")
        return semuaNilai;
    }else if (semuaNilai >= 80 && semuaNilai <= 89) {
        console.log("Rata rata = " + semuaNilai)
        console.log("Grade = B")
        return semuaNilai;
    }else if (semuaNilai >= 80 && semuaNilai <= 89) {
        console.log("Rata rata = " + semuaNilai)
        console.log("Grade = C")
        return semuaNilai;
    }else if (semuaNilai >= 60 && semuaNilai <= 79) {
        console.log("Rata rata = " + semuaNilai)
        console.log("Grade = D")
        return semuaNilai;
    }else if (semuaNilai >= 0 && semuaNilai <= 59) {
        console.log("Rata rata = " + semuaNilai)
        console.log("Grade = E")
        return semuaNilai;
    }
}else {
    return console.log("Nilai harus terisi semua");
}

console.log(test);
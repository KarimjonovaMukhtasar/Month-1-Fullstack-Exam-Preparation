/*
## 2. Ikki Karra Faktorial
### Vazifa ta'rifi:
Sizdan berilgan sonning "ikki karra faktorial"ni hisoblaydigan JavaScript funksiyasini yozishingiz so'raladi. 
"Ikki karra faktorial" bu faqat toq sonlarning ko'paytmasidir, ya'ni berilgan sonni faqat toq sonlar bilan kamaytirib boriladi va 
har bir qadamda ular ko'paytiriladi.
### Vazifa talablari:

1. Funksiya `num` deb nomlangan bir dona parametr qabul qiladi.
2. Funksiya berilgan sonning "ikki karra faktorial"ini hisoblaydi.
3. Funksiya rekursiya yordamida ishlashi lozim.
4. Agar berilgan son noldan kichik yoki teng bo'lsa, `1` qaytariladi (bu umumiy qoida sifatida qabul qilinadi).

### Examples
console.log(doubleFactorial(9)); // ➞ 945 (9 * 7 * 5 * 3 * 1)
console.log(doubleFactorial(7)); // ➞ 105 (7 * 5 * 3 * 1)
console.log(doubleFactorial(5)); // ➞ 15 (5 * 3 * 1)
console.log(doubleFactorial(3)); // ➞ 3 (3 * 1)
console.log(doubleFactorial(1)); // ➞ 1 (1)

*/
function doubleFactorial(num,res = 1, i=1){
    if(num <= 0){
        return res
    }
    else{
        if(num < i){
            return res
        }
        else{
            res *= i
            return doubleFactorial(num, res, i+=2)
        }
    }
}
console.log(doubleFactorial(9)); // ➞ 945 (9 * 7 * 5 * 3 * 1)
console.log(doubleFactorial(7)); // ➞ 105 (7 * 5 * 3 * 1)
console.log(doubleFactorial(5)); // ➞ 15 (5 * 3 * 1)
console.log(doubleFactorial(3)); // ➞ 3 (3 * 1)
console.log(doubleFactorial(1)); // ➞ 1 (1)

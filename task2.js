/*
2.(10 ball) Matn va Raqamlarni Teskarisiga Qaytarish
Vazifa ta'rifi:
Sizdan berilgan matn yoki raqamni so'zlar yoki raqamlar bo'yicha teskarisiga aylantirib qaytaradigan JavaScript funksiyasini yozishingiz so'raladi. Matn uchun, har bir so'zning o'zini emas, balki so'zlar ketma-ketligini teskarisiga qaytarish kerak. Raqam uchun esa raqamlar ketma-ketligi teskarisiga qaytariladi.
Vazifa talablari:
Funksiya input deb nomlangan parametr qabul qiladi, bu parametr matn yoki raqam bo'lishi mumkin.
Agar parametr matn bo'lsa, so'zlar ketma-ketligini teskarisiga qaytaring.
Agar parametr raqam bo'lsa, raqamlar ketma-ketligini teskarisiga qaytaring.
Agar parametr matn yoki raqamdan boshqa narsa bo'lsa, xato xabari qaytaring.
Examples
console.log(reverseInput("Hello world")); // ➞ "world Hello"
console.log(reverseInput(12345)); // ➞ 54321
console.log(reverseInput("How are you?")); // ➞ "you? are How"
console.log(reverseInput(true)); // ➞ "Notog`ri kirish ma`lumoti! Faqat matn yoki raqam kiriting."
*/

function reverseInput(input) {
        if (typeof input === "string") {
            let res
            res = input.split(" ").map(item => item.trim())
            res.reverse()
            let result = res.join(" ")
            return result
        }
        else if(typeof input === "number"){
            let res
            res = String(input).split("").map(item => item.trim())
            res.reverse()
            let result = res.join("")
            return result
        }
    else{
        return "Notog`ri kirish ma`lumoti! Faqat matn yoki raqam kiriting"
    }}
console.log(reverseInput("Hello world")); // ➞ "world Hello"
console.log(reverseInput(12345)); // ➞ 54321
console.log(reverseInput("How are you?")); // ➞ "you? are How"
console.log(reverseInput(true)); // ➞ "Notog`ri kirish ma`lumoti! Faqat matn yoki raqam kiriting."


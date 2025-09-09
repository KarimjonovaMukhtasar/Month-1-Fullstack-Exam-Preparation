/*
4. (12 ball)  Harflarni O'chirish
Vazifa ta'rifi:
Sizdan berilgan matndan "a", "b", va "c" harflarini olib tashlaydigan va ularning o'rniga bo'sh joy (space) qo'yadigan 
JavaScript funksiyasini yozishingiz so'raladi. Agar berilgan matnda "a", "b", yoki "c" harflari yo'q bo'lsa, 
funksiya null qiymatini qaytarishi kerak.
Vazifa talablari:
Funksiya str deb nomlangan bir dona parametr qabul qiladi (matn ko'rinishida).
Funksiya matndan "a", "b", va "c" harflarini topib, ularni bo'sh joy bilan almashtiradi.
Agar berilgan matnda "a", "b", va "c" harflari yo'q bo'lsa, funksiya null qaytaradi.
Funksiya yangilangan matnni qaytarishi kerak, agar o'zgartirish amalga oshirilgan bo'lsa.
Examples
console.log(removeABC("abcdef")); // ➞ "  def"
console.log(removeABC("Hello World")); // ➞ null
console.log(removeABC("apple")); // ➞ " pple"
console.log(removeABC("banana")); // ➞ "  n n  "
console.log(removeABC("cab")); // ➞ "  "
*/
function removeABC(str){
    if(!str.includes('a') && !str.includes('b') && !str.includes('c')){
        return null
    }
    else{
        let res = str.replace(/[abc]/g, " ")
        return res
    }
}
console.log(removeABC("abcdef")); // ➞ "  def"
console.log(removeABC("Hello World")); // ➞ null
console.log(removeABC("apple")); // ➞ " pple"
console.log(removeABC("banana")); // ➞ "  n n  "
console.log(removeABC("cab")); // ➞ "  "
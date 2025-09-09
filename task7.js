/*
7.  (20 ball)  Anagrammalarni Aniqlash Dasturi
Vazifa ta'rifi:
Sizdan ikkita so'z yoki iborani qabul qiluvchi va ular anagramma ekanligini aniqlaydigan 
JavaScript funksiyasini yozishingiz so'raladi. Anagramma - bu ikki so'z yoki ibora bir xil harflardan tashkil topgan bo'lib, 
faqat harflarning tartibi o'zgargan holatdir.
Vazifa talablari:
Funksiya ikkita so'z yoki iborani qabul qiladi.
Funksiya bu ikki so'z yoki iboraning har bir harfini sanab, ularning bir-biriga to'g'ri kelishini tekshiradi.
Agar so'zlar anagramma bo'lsa, funksiya true qiymatini qaytaradi, aks holda false qiymatini qaytaradi.
Funksiya harflarning katta yoki kichikligiga befarq bo'lishi kerak va faqat harflarni hisobga olishi lozim 
(raqamlar, bo'sh joylar va boshqa belgilar inobatga olinmaydi).
Examples
console.log(isAnagram("tuk", "kut")); // true
console.log(isAnagram("olma", "mola")); // true
console.log(isAnagram("Hello", "world")); // false
console.log(isAnagram("Dormitory", "Dirty room")); // true
*/
function isAnagram(word1,word2){
    if(word1 === word2){
        return false
    }
    else{
    let w1 = []
    let w2 = []
    w1 = word1.split("").map(item=> item.trim())
    w2 = word2.split("").map(item=> item.trim())
        for(let key of w1){
            if(!w2.includes(key)){
                return false
            }
        }
        return true
    }
}
console.log(isAnagram("tuk", "kut")); // true
console.log(isAnagram("olma", "mola")); // true
console.log(isAnagram("Hello", "world")); // false
console.log(isAnagram("Dormitory", "Dirty room")); // true
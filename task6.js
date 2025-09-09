/*
6.  (15 ball)  Sonning Barcha Karralari
Vazifa ta'rifi:
Sizdan berilgan sonning barcha karralari (faktorlari)ni topib, ularni massiv shaklida qaytaradigan 
JavaScript funksiyasini yozishingiz so'raladi. Karra deb sonning biror 
butun sonni bir necha marta ko'paytirib topiladigan natijasiga aytiladi. Misol uchun, 12 sonining karralari: 1, 2, 3, 4, 6, va 12.
Vazifa talablari:
Funksiya number deb nomlangan bir dona parametr qabul qiladi.
Funksiya berilgan sonning barcha karralarini topishi kerak.
Topilgan karralar massiv ko'rinishida qaytarilishi lozim.
Agar berilgan son manfiy yoki nol bo'lsa, bo'sh massiv qaytariladi.
Examples
console.log(factorize(12)); // ➞ [1, 2, 3, 4, 6, 12]
console.log(factorize(4));  // ➞ [1, 2, 4]
console.log(factorize(15)); // ➞ [1, 3, 5, 15]
console.log(factorize(17)); // ➞ [1, 17]
*/
function factorize(number){
    let res = []
    if(number === null || number <= 0){
        return res
    }
    else{
        for(let i=1; i<= number; i++){
            if(number % i === 0){
                res.push(i)
            }
        }
        return res
}
}
console.log(factorize(12)); // ➞ [1, 2, 3, 4, 6, 12]
console.log(factorize(4));  // ➞ [1, 2, 4]
console.log(factorize(15)); // ➞ [1, 3, 5, 15]
console.log(factorize(17)); // ➞ [1, 17]

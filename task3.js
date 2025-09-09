/*3.  (10 ball) Massivdagi Sonlar Yig'indisini Hisoblash
Vazifa ta'rifi:
Berilgan sonlardan iborat massivni qabul qilib, boshidan boshlab har bir sonni necha marta uchragan bo'lsa, shuncha darajaga ko'tarib, 
yig'indiga qo'shuvchi funksiya yaratish. Hisob-kitob 0 raqamiga duch kelguncha yoki massiv oxirigacha davom etadi.
Vazifa talablari:
Funksiya sonlardan iborat massivni qabul qiladi.
Har bir sonning indeksiga qarab, u necha marta uchraganini hisoblab, shuncha darajaga ko'tariladi va yig'indiga qo'shiladi.
Agar 0 raqami uchrasa, hisoblash to'xtatiladi.
Hisoblash massiv oxiriga yetganda ham to'xtashi mumkin.
Natijada yig'indini qaytaradi
Examples
console.log(calculateSum([2, 3, 2, 4, 2, 3, 0, 1, 2]));  // Natija: 2^1 + 3^1 + 2^2 + 4^1 + 2^3 + 3^2 = 72
console.log(calculateSum([1, 2, 3, 4, 5]));             // Natija: 1^1 + 2^1 + 3^1 + 4^1 + 5^1 = 15
console.log(calculateSum([1, 1, 1, 0, 1]));             // Natija: 1^1 + 1^2 + 1^3 = 9
*/
function calculateSum(arr){
    let freq = {}
    let res = 0
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        if(num === 0){
            break
        }
        if(freq[num]){
            freq[num] += 1
        }
        else{
            freq[num] = 1
        }
        res += num ** freq[num]
    }
    return res
}
console.log(calculateSum([2, 3, 2, 4, 2, 3, 0, 1, 2]));  // Natija: 2^1 + 3^1 + 2^2 + 4^1 + 2^3 + 3^2 = 30
console.log(calculateSum([1, 2, 3, 4, 5]));             // Natija: 1^1 + 2^1 + 3^1 + 4^1 + 5^1 = 15
console.log(calculateSum([1, 1, 1, 0, 1]));             // Natija: 1^1 + 1^2 + 1^3 = 3

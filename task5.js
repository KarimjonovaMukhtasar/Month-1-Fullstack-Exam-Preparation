/*5. (13 ball)   Avtobusdagi odamlar sonini hisoblash
Vazifa ta'rifi:
Funksiya avtobusning har bir bekatda qancha odam chiqqanligi va qancha odam tushganligini ko'rsatuvchi ikki o'lchovli massivni qabul qiladi. 
Har bir bekatdan keyin avtobusdagi qolgan odamlar sonini hisoblab, oxirgi bekatdan keyin avtobusda qancha odam qolganini qaytaradi. 
Javob minus bo’lmasligi lozim!
Vazifa talablari::
Funksiya nomi: odamSoni
Kirish ma'lumotlari: Ikki o'lchovli massiv, har bir ichki massivda ikkita son mavjud: 
birinchisi avtobusga chiqqan odamlar soni, ikkinchisi esa avtobusdan tushgan odamlar soni.
Chiqish ma'lumotlari: Oxirgi bekatdan keyin avtobusdagi odamlar soni.
Examples
console.log(odamSoni([
    [10, 0],
    [3, 5],
    [5, 8]
])); // Output: 5
console.log(odamSoni([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8]
])); // Output: 15
*/
function odamSoni(arr){
    let result = arr.reduce((acc, cur)=>{
        acc = Math.abs(acc + cur[0])
        acc = Math.abs(acc - cur[1])
        return acc
    }, 0)
    return result
}
console.log(odamSoni([
    [10, 0],
    [3, 5],
    [5, 8]
])); // Output: 5
console.log(odamSoni([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8]
]));  // Output: 15


/*
3. Identifikatsion Matritsa Yaratish
Vazifa ta'rifi:
Sizdan berilgan o'lchamdagi identifikatsion matritsani yaratadigan JavaScript funksiyasini yozishingiz so'raladi.
 Identifikatsion matritsa bu, diagonalidagi elementlari 1 bo'lgan va qolgan barcha elementlari 0 bo'lgan kvadrat matritsadir.
Vazifa talablari:
Funksiya size deb nomlangan bitta parametr qabul qiladi, bu parametr matritsaning o'lchamini bildiradi.
Agar o'lcham noldan kichik bo'lsa, bo'sh ro'yxat qaytariladi.
Funksiya to'g'ri o'lchamdagi identifikatsion matritsani yaratishi lozim.
Examples
console.log(identityMatrix(1)); // ➞ [[1]]

console.log(identityMatrix(2)); // ➞ [[1, 0],
                               //     [0, 1]]

console.log(identityMatrix(5)); // ➞ [[1, 0, 0, 0, 0],
                               //     [0, 1, 0, 0, 0],
                               //     [0, 0, 1, 0, 0],
                               //     [0, 0, 0, 1, 0],
                               //     [0, 0, 0, 0, 1]]
*/
function identityMatrix(size){
    let arr = []
    if(size <= 0){
        return arr
    }
    else{
        for(let i= 0; i < size; i++){
            let row = []
            for(let j=0; j < size; j++){
                if( i === j){
                   row.push(1)
                }
                else{
                    row.push(0)
                }
            }
            arr.push(row)
        }
        return arr
    }
}
console.log(identityMatrix(1)); // ➞ [[1]]

console.log(identityMatrix(2)); // ➞ [[1, 0],
                               //     [0, 1]]

console.log(identityMatrix(5)); // ➞ [[1, 0, 0, 0, 0],
                               //     [0, 1, 0, 0, 0],
                               //     [0, 0, 1, 0, 0],
                               //     [0, 0, 0, 1, 0],
                               //     [0, 0, 0, 0, 1]]

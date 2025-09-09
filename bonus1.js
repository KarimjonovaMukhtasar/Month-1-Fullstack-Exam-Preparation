/*
# **BONUS (vazifa ihtiyoriy wunderkind ball olaman degnalar uchun).**
## 1.  API Orqali Ma'lumotlarni Qayta Ishlash
### Vazifa ta'rifi:

Sizdan "[Breaking Bad](https://api.breakingbadquotes.xyz/v1/quotes/100)" seriali haqidagi iqtiboslar (quotes) beruvchi
 API'dan ma'lumot olib, eng ko'p takrorlangan muallif (author) nomini aniqlab, ro'yxat shaklida qaytaradigan 
 JavaScript funksiyasini yozishingiz so'raladi. Ushbu vazifa API so'rovlari, ma'lumotlarni qayta ishlash va natijalarni 
 tahlil qilish kabi muhim dasturlash ko'nikmalarini sinovdan o'tkazadi.
### Vazifa talablari:

1. `fetch` API yordamida ma'lumotlarni olib kelish.
2. Ma'lumotlarni qayta ishlash orqali har bir muallifning iqtiboslar sonini hisoblash.
3. Eng ko'p takrorlangan muallif(lar)ni topish va ularni ro'yxat shaklida qaytarish.

*/
const url = "https://api.breakingbadquotes.xyz/v1/quotes/100"
async function getData(url) {
    try {
        let res = await fetch(url)
        if(!res.ok){
            throw new Error("Error while loading the data");
        }
        let data = await res.json()
        console.log("Data is received:", data)
        let frequencies = {}
        data.forEach(element => {
            frequencies[element.author] = (frequencies[element.author] || 0)+1
            return frequencies
        });
        console.log(frequencies)
        let max = 0
        let maxAuthor = ""
        for(let key in frequencies){
            if(frequencies[key] > max){
                    max = frequencies[key]
                    maxAuthor = key
            }
        }
        let result = [maxAuthor, max]
        console.log(result)
    } catch (error) {
        console.error("Error Name:", error.name)
        console.error("Error Message:", error.message)
        console.error("Error Stack:", error.stack)
    }
}
getData(url)
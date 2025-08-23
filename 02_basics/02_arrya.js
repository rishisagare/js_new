const marvel_heros=["thor","Ironman","Spiderman"]
const dc=["superman","flash","Batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros);

// const allHeros=marvel_heros.concat(dc)
// console.log(allHeros);

// const all_new_heros =[...marvel_heros,...dc] //<---- "THIS IS SPREAD OPREATOR"
// console.log(all_new_heros);

// const an_array= [1 ,2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]
// const real_an_array =an_array.flat(Infinity)//<---- this makes all the depth of array ionto on array
// console.log(real_an_array);




console.log(Array.isArray("Rishi"))
console.log(Array.from("Rishi"))


let score1= 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

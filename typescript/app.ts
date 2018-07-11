let message: string = "Mensagem"
console.log(message)

let episode: number = 4

console.log("Current episode " + episode)

episode++

console.log("Next episode " + episode)

let favoriteDroid: string
favoriteDroid = "BB-8"
console.log(favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number): boolean{
    return parsecs < 12
}

let distance = 12

console.log(`Is ${distance} parsecs enousgh to beat Millennium Falcon ? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc (speed: number, inc: number = 1 ) : number{
    return speed + inc
}

console.log(`inc(5, 1) = ${inc(5, 1)}`)
console.log(`inc(5) = ${inc(5)}`)

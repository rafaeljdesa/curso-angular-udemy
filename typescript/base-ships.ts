class Spacecraft{
    constructor(public propulsor: string){}

    jumpIntoHiperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }

}

interface ContainerShip{
    cargoContainers: number
}

export{Spacecraft, ContainerShip}
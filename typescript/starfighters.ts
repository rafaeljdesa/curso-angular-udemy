import{Spacecraft, ContainerShip} from './base-ships'

export class MillenniumFlacon extends Spacecraft implements ContainerShip{

    cargoContainers: number

    constructor(){
        super("hiperdrive")
        this.cargoContainers = 4
    }

    jumpIntoHiperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHiperspace()
        }else{
            console.log('Failed to jump into hyperspace')
        }
    }
}
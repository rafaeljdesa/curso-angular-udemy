import {Spacecraft, ContainerShip} from './base-ships'
import{MillenniumFlacon} from './starfighters'

import * as _ from 'lodash'

console.log(_.pad("Typescript Examples", 40, "="))

let ship = new Spacecraft("hiperdrive")

ship.jumpIntoHiperspace()

let falcon = new MillenniumFlacon()
falcon.jumpIntoHiperspace()

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2
console.log(`Is falcon is good for the job ? ${goodForTheJob(falcon) ? 'YES' : 'NO' }`)


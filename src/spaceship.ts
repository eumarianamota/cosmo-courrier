import { Load } from "./load"
import { Planet } from "./planet"

export abstract class Spaceship{
    public readonly weight_capacity: number
    public readonly max_fuel: number
    public readonly fuel_consumption: number 

    constructor(weight_capacity: number, fuel_capacity: number, fuel_consumption: number) {
        this.weight_capacity = weight_capacity
        this.max_fuel = fuel_capacity
        this.fuel_consumption = fuel_consumption
    }

    CanTransport(load: Load): boolean {
        if (load.weight <= this.weight_capacity) {
            return true
        } return false
    }

    CanGoTo(planet: Planet): boolean {
        const autonomy = this.max_fuel / this.fuel_consumption
        if (autonomy >= planet.distance) {
            return true
        } return false
    }

    abstract Type(): string
}

export class CargoShip extends Spaceship{
    constructor(){
        const weight_capacity = 500
        const max_fuel = 600000
        const fuel_consumption = 2

        super(weight_capacity, max_fuel, fuel_consumption)
    }

    Type(): string {
        return "Cargo Ship"
    }
}

export class LightShip extends Spaceship{
    constructor(){
        const weight_capacity = 50
        const max_fuel = 75000
        const fuel_consumption = 0.5

        super(weight_capacity, max_fuel, fuel_consumption)
    }

        Type(): string {
        return "Light Ship"
    }
}

export class FastShip extends Spaceship{
    constructor(){
        const weight_capacity = 75
        const max_fuel = 112500
        const fuel_consumption = 0.75

        super(weight_capacity, max_fuel, fuel_consumption)
    }

        Type(): string {
        return "Fast Ship"
    }
}

export class AutomaticShip extends Spaceship{
    constructor(){
        const weight_capacity = 300
        const max_fuel = 300000
        const fuel_consumption = 1

        super(weight_capacity, max_fuel, fuel_consumption)
    }

        Type(): string {
        return "Automatic Ship"
    }
}
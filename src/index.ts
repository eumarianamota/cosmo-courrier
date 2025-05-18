// import { CargoShip } from "./spaceship";

import { Mission } from "./mission";

function ShowMissions(): Mission[] {
    const missions = []
    for (let i = 0; i < 5; i++) {
        const mission = new Mission
        console.log(mission.showMission())
        missions.push(mission)
    }
    return missions
}

function ShowLoads(missions: Mission[]): void {
    console.log('LOADS SUMMARY')
    for (const mission of missions) {
        console.log(mission.loadSummary())
    }
}

function ShowPlanets(missions: Mission[]): void {
    console.log("\nPLANETS VISITED")
    for (const mission of missions) {
        console.log(mission.PlanetSumary())
    }
}

const missions = ShowMissions()
const loads = ShowLoads(missions)
const planets = ShowPlanets(missions)






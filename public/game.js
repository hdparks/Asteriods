import { EntityManager } from './ecs/entityManager.js'
import * as Systems from './ecs/systems.js'
import * as Components from './ecs/components.js'
import { Broadphase } from './ecs/broadphase.js'
export { matRotate } from './ecs/utils.js'

//  Initialize game state
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

//  Initialize input listener
var inputs = {}
document.addEventListener("keydown", e => {
  inputs[e.keyCode] = true
})
document.addEventListener("keyup", e => {
  inputs[e.keyCode] = false
})

//  Start up an entity manager
let entityManager = new EntityManager()

//  Start up a broadphase controller
let broadphase = new Broadphase(200,10)

//  Start up the game systems
let systems = [
  //  Blit
  new Systems.BlitSystem(entityManager, ctx),
  //  Input
  new Systems.LaserCannonInputSystem(entityManager, inputs),
  new Systems.MovementInputSystem(entityManager, inputs),
  //  Modify
  new Systems.ClearBroadphaseSystem(broadphase),
  new Systems.PopulateBroadphaseSystem(entityManager, broadphase),
  new Systems.CalculateCollisionsSystem(entityManager, broadphase),
  new Systems.MovementSystem(entityManager),
  new Systems.RemoveAtBoundsSystem(entityManager,ctx.canvas.width, ctx.canvas.height),
  new Systems.LaserCooldownSystem(entityManager),
  new Systems.UpdateBroadphaseSystem(broadphase),
  //  Add
  new Systems.LaserSpawnSystem(entityManager),
  new Systems.RemoveEntitySystem(entityManager),
  //  Draw
  new Systems.DrawBroadphaseSystem(broadphase, ctx),
  new Systems.PolyrenderSystem(entityManager, ctx)

]

//  Load in initial game objects
let player = entityManager.addEntity()
entityManager.addComponents(
  player,
  new Components.AABB(5,5),
  new Components.Blit(21,21),
  new Components.Position(10,10),
  new Components.Velocity(),
  new Components.Polyrender([[5,0],[-5,5],[-5,-5]]),
  new Components.InputListener(),
  new Components.Heading(),
  new Components.LaserCannon(),
  new Components.RecievesOnCollision(new Set([Components.Remove.name]))
);

//  Start up the gameplay loop
function update(){
  systems.forEach( system => {
    system.Run()
  });
}

//  Fixed at 30fps
setInterval(update, 1000/30)

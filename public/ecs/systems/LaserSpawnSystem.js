import {AABB, LaserCannon, Position, Velocity, Heading, Polyrender, Blit, RemoveAtBounds, RecievesOnCollision, Remove} from '../components.js'

export function LaserSpawnSystem(entityManager){

  let entities = entityManager.registerQueryTemplate(new Set([LaserCannon.name, Position.name, Velocity.name, Heading.name]))

  this.Run = function(){
    entities.forEach( e => {
      if (e.LaserCannon.fire){
        let laser = entityManager.addEntity();
        entityManager.addComponents(laser,
          new AABB(1,1),
          new Position(e.Position.x + 10 * Math.cos(e.Heading.theta), e.Position.y - 10 * Math.sin(e.Heading.theta)),
          new Velocity(e.Velocity.vx + 1 * Math.cos(e.Heading.theta), e.Velocity.vy - 1 * Math.sin(e.Heading.theta)),
          new Polyrender([[0,1],[-5,1],[-5,-1],[0,-1]]),
          new Blit(11,11),
          new Heading(e.Heading.theta),
          new RemoveAtBounds(),
          new RecievesOnCollision(new Set([Remove.name]))
        )
        e.LaserCannon.cooldown = e.LaserCannon.totalCooldown
        e.LaserCannon.fire = false
      }
    });
  }
}

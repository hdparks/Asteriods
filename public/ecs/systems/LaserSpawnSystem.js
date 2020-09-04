define(["../components"],function(Components){
  return function LaserSpawnSystem(entityManager){

    let entities = entityManager.registerQueryTemplate(new Set([Components.LaserCannon.name, Components.Position.name, Components.Velocity.name, Components.Heading.name]))

    this.Run = function(){
      entities.forEach( e => {
        if (e.LaserCannon.fire){
          let laser = entityManager.addEntity();
          entityManager.addComponents(laser,
            new Components.AABB(1,1),
            new Components.Position(e.Position.x + 10 * Math.cos(e.Heading.theta), e.Position.y - 10 * Math.sin(e.Heading.theta)),
            new Components.Velocity(e.Velocity.vx + 1 * Math.cos(e.Heading.theta), e.Velocity.vy - 1 * Math.sin(e.Heading.theta)),
            new Components.Polyrender([[0,1],[-5,1],[-5,-1],[0,-1]]),
            new Components.Blit(11,11),
            new Components.Heading(e.Heading.theta),
            new Components.RemoveAtBounds(),
            new Components.RecievesOnCollision(new Set([Components.Remove.name]))
          )
          e.LaserCannon.cooldown = e.LaserCannon.totalCooldown
          e.LaserCannon.fire = false
        }
      });
    }
  }
})

define(["../components"],function(Components){
  return function LaserCooldownSystem(entityManager){
    let entities = entityManager.registerQueryTemplate(new Set([Components.LaserCannon.name]))

    this.Run = function(){
      entities.forEach( e => {
        if (e.LaserCannon.cooldown > 0) e.LaserCannon.cooldown -= 1
      });
    }
  }
})

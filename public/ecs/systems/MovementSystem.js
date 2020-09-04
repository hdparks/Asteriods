define(["../components"],function(Components){
  return function MovementSystem(entityManager){

    let entities = entityManager.registerQueryTemplate(new Set([Components.Position.name, Components.Velocity.name]))

    this.Run = function(){
      //  Alter the position component according to the velocity component
      entities.forEach( e => {
        e.Position.x += e.Velocity.vx;
        e.Position.y += e.Velocity.vy;
      });
    }
  }
})

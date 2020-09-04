define(['../components'],function(Components){
  return function LaserCannonInputSystem(entityManager, inputs){

    let entities = entityManager.registerQueryTemplate(new Set([Components.InputListener.name, Components.LaserCannon.name]))

    this.Run = function(){

      entities.forEach( e => {
        if ( inputs[32] && e.LaserCannon.cooldown === 0 ){
          e.LaserCannon.fire = true;
        }
      });
    }
  }
})

define(["../components"],function(Components){
  return function PopulateBroadphaseSystem(entityManager, broadphase){

    let entities = entityManager.registerQueryTemplate(new Set([Components.AABB.name, Components.Position.name, Components.Velocity.name]))

    this.Run = function(){
      entities.forEach( e => {
        broadphase.addEntity(e)
      });
    }
  }
})

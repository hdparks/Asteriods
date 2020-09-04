define(["../components"],function(Components){
  return function RemoveEntitySystem(entityManager){
    let entities = entityManager.registerQueryTemplate(new Set([Components.Remove.name]))
    this.Run = function(){
      entities.forEach( e => {
        entityManager.deleteEntity(e)
      });
    }
  }
})

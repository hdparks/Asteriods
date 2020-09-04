define(["../components"],function(Components){

  return function RemoveAtBoundsSystem(entityManager, width, height){
    let entities = entityManager.registerQueryTemplate(new Set([Components.Position.name, Components.RemoveAtBounds.name]))

    this.Run = function(){
      entities.forEach( e => {
        if( e.Position.x < 0     ||
            e.Position.x > width ||
            e.Position.y < 0     ||
            e.Position.y > height){
          entityManager.addComponents(e, new Components.Remove())
        }
      });

    }
  }
})

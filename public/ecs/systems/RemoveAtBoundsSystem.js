import {Position, Remove, RemoveAtBounds} from '../components.js'

export function RemoveAtBoundsSystem(entityManager, width, height){
  let entities = entityManager.registerQueryTemplate(new Set([Position.name, RemoveAtBounds.name]))

  this.Run = function(){
    entities.forEach( e => {
      if( e.Position.x < 0     ||
          e.Position.x > width ||
          e.Position.y < 0     ||
          e.Position.y > height){
        entityManager.addComponents(e, new Remove())
      }
    });

  }
}

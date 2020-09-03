import { AABB, Position, Velocity } from '../components.js'

export function PopulateBroadphaseSystem(entityManager, broadphase){

  let entities = entityManager.registerQueryTemplate(new Set([AABB.name, Position.name, Velocity.name]))

  this.Run = function(){
    entities.forEach( e => {
      broadphase.addEntity(e)
    });

  }
}

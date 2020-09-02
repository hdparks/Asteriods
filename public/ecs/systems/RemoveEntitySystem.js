import { Remove } from '../components/Remove.js'

export function RemoveEntitySystem(entityManager){
  let entities = entityManager.registerQueryTemplate(new Set([Remove.name]))
  this.Run = function(){
    entities.forEach( e => {
      entityManager.deleteEntity(e)
    });
  }
}

import {LaserCannon} from '../components/LaserCannon.js'

export function LaserCooldownSystem(entityManager){
  let entities = entityManager.registerQueryTemplate(new Set([LaserCannon.name]))

  this.Run = function(){
    entities.forEach( e => {
      if (e.LaserCannon.cooldown > 0) e.LaserCannon.cooldown -= 1
    });
  }
}

import {InputListener} from '../components/InputListener.js'
import {LaserCannon} from '../components/LaserCannon.js'

export function LaserCannonInputSystem(entityManager, inputs){

  let entities = entityManager.registerQueryTemplate(new Set([InputListener.name, LaserCannon.name]))

  this.Run = function(){

    entities.forEach( e => {
      if ( inputs[32] && e.LaserCannon.cooldown === 0 ){
        e.LaserCannon.fire = true;
      }
    });
  }
}

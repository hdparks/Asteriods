import {Position} from '../components/Position.js'
import {Velocity} from '../components/Velocity.js'

export function MovementSystem(entityManager){

  let entities = entityManager.registerQueryTemplate(new Set([Position.name, Velocity.name]))

  this.Run = function(){
    //  Alter the position component according to the velocity component
    entities.forEach( e => {
      e.Position.x += e.Velocity.vx;
      e.Position.y += e.Velocity.vy;
    });
  }
}

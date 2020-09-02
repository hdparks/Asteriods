import {Blit} from '../components/Blit.js'
import {Position} from '../components/Position.js'

export function BlitSystem(entityManager, ctx){

  let entities = entityManager.registerQueryTemplate(new Set([Position.name, Blit.name]))

  this.Run = function(){
    // entities.forEach( e => {
    //   ctx.clearRect(
    //     Math.max(e.Position.x - e.Blit.width/2,0),
    //     Math.max(e.Position.y - e.Blit.height/2,0),
    //     e.Blit.width,
    //     e.Blit.height
    //   );
    // })
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }
}

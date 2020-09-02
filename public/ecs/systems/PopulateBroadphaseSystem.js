import { AABB, Position, Velocity } from '../components.js'

export function PopulateBroadphaseSystem(entityManager, broadphase){

  let entities = entityManager.registerQueryTemplate(new Set([AABB.name, Position.name, Velocity.name]))

  this.Run = function(){
    entities.forEach( e => {
      let pt0 = { x : e.Position.x - e.AABB.hw + Math.min(e.Velocity.vx,0),
                  y : e.Position.y - e.AABB.hh + Math.min(e.Velocity.vy,0) }
      let pt1 = { x : e.Position.x + e.AABB.hw + Math.max(e.Velocity.vx,0),
                  y : e.Position.y - e.AABB.hh + Math.min(e.Velocity.vy,0)}
      let pt2 = { x : e.Position.x - e.AABB.hw + Math.min(e.Velocity.vx,0),
                  y : e.Position.y + e.AABB.hh + Math.max(e.Velocity.vy,0)}
      let pt3 = { x : e.Position.x + e.AABB.hw + Math.max(e.Velocity.vx,0),
                  y : e.Position.y + e.AABB.hh + Math.max(e.Velocity.vy,0)}
      broadphase.addEntity(pt0,e)
      broadphase.addEntity(pt1,e)
      broadphase.addEntity(pt2,e)
      broadphase.addEntity(pt3,e)
    });

  }
}

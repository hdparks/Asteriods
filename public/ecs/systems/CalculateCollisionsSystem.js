import { Remove } from '../components.js'

export function CalculateCollisionsSystem(entityManager, broadphase){

  function handleCollision(e1, e2){
    //  Check for bounding box collision
    if (e1.AABB      &&
        e1.Position  &&
        e2.AABB      &&
        e2.Position  &&
        e1.Position.x - e1.AABB.hw < e2.Position.x + e2.AABB.hw &&
        e1.Position.x + e1.AABB.hw > e2.Position.x - e2.AABB.hw &&
        e1.Position.y - e1.AABB.hh < e2.Position.y + e2.AABB.hh &&
        e1.Position.y + e1.AABB.hh > e2.Position.y - e2.AABB.hh
      ){}else{return}



    if (e1.RecievesOnCollision && e1.RecievesOnCollision.components.has(Remove.name)){
      entityManager.addComponents(e1,new Remove())
    }

    if (e2.RecievesOnCollision && e2.RecievesOnCollision.components.has(Remove.name)){
      entityManager.addComponents(e2, new Remove())
    }
  }

  this.Run = function(){
    broadphase.getEntitySubsets().forEach( entitySet => {
      let entities = Array.from(entitySet)
      for (let i = 0; i < entities.length;i++){
        for (let j = i + 1; j < entities.length;j++){
          handleCollision(entities[i],entities[j])
        }
      }
    });
  }
}

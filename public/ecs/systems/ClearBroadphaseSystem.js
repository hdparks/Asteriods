export function ClearBroadphaseSystem(broadphase){
  this.Run = function(){
    broadphase.clear()
  }
}

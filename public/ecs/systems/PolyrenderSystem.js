define(["../components","../utils"],function(Components, Utils){
  return function PolyrenderSystem(entityManager, ctx){
    let entities = entityManager.registerQueryTemplate(new Set([Components.Position.name, Components.Polyrender.name, Components.Heading.name]))

    this.Run = function(){
      //  render
      ctx.beginPath()
      entities.forEach( e => {
        let pts = Utils.matRotate( e.Polyrender.pts, e.Heading.theta ).map(row => [ row[0] + e.Position.x, row[1] + e.Position.y ] )
        ctx.moveTo(...pts[0])
        for (let i = 1; i < e.Polyrender.pts.length; i++){
          ctx.lineTo(...pts[i])
        }
        ctx.closePath();
      });
      ctx.fill();
    }
  }
})

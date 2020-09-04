define(['../components'],function(Components){
  return function BlitSystem(entityManager, ctx){
    console.log(Components)
    let entities = entityManager.registerQueryTemplate(new Set([Components.Position.name, Components.Blit.name]))

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
})

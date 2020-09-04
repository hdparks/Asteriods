define(() => function DrawBroadphaseSystem(broadphase, ctx){
  function draw(quad,cx,cy,hw){
    if (quad.entitySet){
      ctx.strokeRect(cx-hw,cy-hw,2*hw,2*hw)
    } else {
      let nhw = hw/2
      draw(quad.q0,cx-nhw,cy-nhw,nhw)
      draw(quad.q1,cx+nhw,cy-nhw,nhw)
      draw(quad.q2,cx-nhw,cy+nhw,nhw)
      draw(quad.q3,cx+nhw,cy+nhw,nhw)
    }
  }

  this.Run = function(){
    let hw = broadphase.dim/2
    draw(broadphase.root, hw, hw, hw)
  }
})

define({
  setEq : function(a,b){
    if (a.size != b.size) return false;
    for (let el of a) if (!b.has(el)) return false;
    return true;
  },
  matRotate : function(mat, theta){
    //   Multiplies any n x 2 matrix by the rotation matrix,
    //  rotating the points about the origin
    return mat.map( row =>
      [ row[0] * Math.cos(theta) + row[1] * Math.sin(theta),
        row[0] * -Math.sin(theta) + row[1] * Math.cos(theta) ])
  }
})

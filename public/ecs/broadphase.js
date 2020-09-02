class Quad{

  /*
  Quad recursion shaped as follows:
   ___ ___
  | 0 | 1 |
  |---|---|
  | 2 | 3 |
   --- ---
  */

  entitySet = new Set()

}

export class Broadphase{
  /*
  Broadphase works like this each round:
      1. Clear *dynamic entities* (clear)
      2. Add each entity to the appropriate blocks (addEntity)
      3. Iterate through each block and calculate real collisions (getEntitySubsets)
      4. Improve blocks based on metrics (updateQuad)

  */

  constructor(dim, min_dim, quad_max = 8, quad_min = 4){
    this.dim = dim
    this.max_depth = Math.floor( Math.log2(dim / min_dim) )
    this.quad_max = quad_max
    this.quad_min = quad_min
    this.root = new Quad()
  }

  addEntity = function(pt, entity){
    let current = this.root
    let cx = this.dim / 2
    let cy = this.dim / 2
    let cDim = this.dim / 2

    while (!current.entitySet) {
      //  Figure out which child pt belongs in
      cDim /= 2;
      let out = 0;

      if (pt.x < cx){ cx -= cDim; } else { cx += cDim; out += 1; }
      if (pt.y < cy){ cy -= cDim; } else { cy += cDim; out += 2; }

      current = current['q'+out]
    }

    //  Add entity to set
    current.entitySet.add(entity)

  }

  clear = function(){
    //  Clear each entity subset
    this.getEntitySubsets().forEach( s => s.clear() );
  }

  entityCount = function(quad){
    //  If leaf, return entity count
    if (quad.entitySet !== null){
      return quad.entitySet.size;
    }

    return  this.entityCount(quad.q0) +
            this.entityCount(quad.q1) +
            this.entityCount(quad.q2) +
            this.entityCount(quad.q3);
  }

  updateQuad = function(quad=this.root,depth=1){
    //  If leaf, split on more than quad_max entities
    if (quad.entitySet){
      if (quad.entitySet.size > this.quad_max && depth < this.max_depth){
        quad.entitySet = null;
        quad.q0 = new Quad();
        quad.q1 = new Quad();
        quad.q2 = new Quad();
        quad.q3 = new Quad();
      }
      return
    }

    //  If not a leaf and entity count less than quad_min, consolidate
    if(this.entityCount(quad) <= this.quad_min ){
      console.log()
      quad.entitySet = new Set()
      quad.q0 = null
      quad.q1 = null
      quad.q2 = null
      quad.q3 = null
      return
    }

    this.updateQuad(quad.q0, depth+1)
    this.updateQuad(quad.q1, depth+1)
    this.updateQuad(quad.q2, depth+1)
    this.updateQuad(quad.q3, depth+1)
  }

  getEntitySubsets = function(quad = this.root){
    if (quad.entitySet !== null){ return [quad.entitySet]; }

    return [...this.getEntitySubsets(quad.q0),
            ...this.getEntitySubsets(quad.q1),
            ...this.getEntitySubsets(quad.q2),
            ...this.getEntitySubsets(quad.q3)]
  }
}

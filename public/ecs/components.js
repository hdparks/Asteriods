define(['./components/Remove', './components/RemoveAtBounds', './components/AABB', './components/InputListener', './components/Polyrender', './components/RecievesOnCollision', './components/Velocity', './components/LaserCannon', './components/Blit', './components/Heading', './components/Position'],
    function(Remove, RemoveAtBounds, AABB, InputListener, Polyrender, RecievesOnCollision, Velocity, LaserCannon, Blit, Heading, Position){
        return {
            Remove:Remove,
            RemoveAtBounds:RemoveAtBounds,
            AABB:AABB,
            InputListener:InputListener,
            Polyrender:Polyrender,
            RecievesOnCollision:RecievesOnCollision,
            Velocity:Velocity,
            LaserCannon:LaserCannon,
            Blit:Blit,
            Heading:Heading,
            Position:Position,
        }
    })
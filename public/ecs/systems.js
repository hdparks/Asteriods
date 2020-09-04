define(['./systems/LaserCooldownSystem', './systems/RemoveEntitySystem', './systems/MovementInputSystem', './systems/CalculateCollisionsSystem', './systems/LaserSpawnSystem', './systems/RemoveAtBoundsSystem', './systems/ClearBroadphaseSystem', './systems/UpdateBroadphaseSystem', './systems/MovementSystem', './systems/DrawBroadphaseSystem', './systems/PopulateBroadphaseSystem', './systems/BlitSystem', './systems/PolyrenderSystem', './systems/LaserCannonInputSystem'],
    function(LaserCooldownSystem, RemoveEntitySystem, MovementInputSystem, CalculateCollisionsSystem, LaserSpawnSystem, RemoveAtBoundsSystem, ClearBroadphaseSystem, UpdateBroadphaseSystem, MovementSystem, DrawBroadphaseSystem, PopulateBroadphaseSystem, BlitSystem, PolyrenderSystem, LaserCannonInputSystem){
        return {
            LaserCooldownSystem:LaserCooldownSystem,
            RemoveEntitySystem:RemoveEntitySystem,
            MovementInputSystem:MovementInputSystem,
            CalculateCollisionsSystem:CalculateCollisionsSystem,
            LaserSpawnSystem:LaserSpawnSystem,
            RemoveAtBoundsSystem:RemoveAtBoundsSystem,
            ClearBroadphaseSystem:ClearBroadphaseSystem,
            UpdateBroadphaseSystem:UpdateBroadphaseSystem,
            MovementSystem:MovementSystem,
            DrawBroadphaseSystem:DrawBroadphaseSystem,
            PopulateBroadphaseSystem:PopulateBroadphaseSystem,
            BlitSystem:BlitSystem,
            PolyrenderSystem:PolyrenderSystem,
            LaserCannonInputSystem:LaserCannonInputSystem,
        }
    })
var upgrade = {
  run: function(Creep){
    if (Creep.upgradeController(Creep.room.controller) == ERR_NOT_IN_RANGE){
      Creep.moveTo(Creep.room.controller);
    } else if (LessWorkers == false){
      if (Creep.carry.energy == 0){
        let Home = Game.spawns.Spawn1;
        let Total = Creep.carryCapacity -_.sum(Creep.carry);
        if (Creep.withdraw(Home, RESOURCE_ENERGY, [Total]) == ERR_NOT_IN_RANGE) {
          Creep.moveTo(Home);
        }
      }
    } else if (LessWorkers == true){
      Creep.say('LessWorkers');
    }
  }
};

module.exports = upgrade;

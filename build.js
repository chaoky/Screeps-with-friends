var Upgrade = require('upgrade');
var build = {
  run: function(Creep){
    var Site = Creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);

    if (Site == undefined){
      Upgrade.run(Creep);
    }else{
      if (Creep.carry.energy != 0){
        if (Creep.build(Site) == ERR_NOT_IN_RANGE){
          Creep.moveTo(Site);
        }
      }else{
        if(LessWorkers == false){
          let Home = Game.spawns.Spawn1;
          let Total = Creep.carryCapacity -_.sum(Creep.carry);
          if (Creep.withdraw(Home, RESOURCE_ENERGY, [Total]) == ERR_NOT_IN_RANGE) {
            Creep.moveTo(Home);
          }
        } else {
          Creep.say('LessWorkers');
        }
      }
    }
  }
};

module.exports = build;

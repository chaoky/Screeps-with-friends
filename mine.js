var mine = {
  run: function(Creep){
    ///chage state
    if (Creep.memory.mining == false && Creep.carry.energy == 0){
        Creep.memory.mining = true;
    }
    else if (Creep.memory.mining == true && Creep.carry.energy == Creep.carryCapacity){
        Creep.memory.mining = false;
    }

    ///work
    if (Creep.memory.mining == false){
      if (Creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
        Creep.moveTo(Game.spawns.Spawn1);
        Creep.say('🚚 1');
      }
    } else if (Creep.memory.mine == 'mine1'){
      if (Creep.harvest(Creep.pos.findClosestByPath(FIND_SOURCES)) == ERR_NOT_IN_RANGE){
        Creep.moveTo(Game.flags.Mine1.pos);
        Creep.say('👷 1');
      }
    } else if (Creep.memory.mine == 'mine2') {
      if (Creep.harvest(Creep.pos.findClosestByPath(FIND_SOURCES)) == ERR_NOT_IN_RANGE){
        Creep.moveTo(Game.flags.Mine2.pos);
        Creep.say('👷 2');
      }
    }
  }
};
module.exports = mine;

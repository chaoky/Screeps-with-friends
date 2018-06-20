var store = {
  run: function(Creep){
    if (Creep.room.energyAvailable < Creep.room.energyCapacityAvailable ){
      var structure = Creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        filter: (s) => (s.structureType == STRUCTURE_SPAWN
          || s.structureType == STRUCTURE_EXTENSION)
          && s.energy < s.energyCapacity
        });
    } else {
      var structure = Creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        filter: (s) =>
          s.structureType == STRUCTURE_CONTAINER
          && s.store[RESOURCE_ENERGY] < s.carryCapacity
        });
    }

    if (Creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
      Creep.moveTo(structure);
    }
  }
};
module.exports = store;

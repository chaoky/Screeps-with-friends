var withdraw = {
  run: function(Creep){
    var structure = Creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
      filter: (s) => (s.structureType == STRUCTURE_SPAWN
        || s.structureType == STRUCTURE_EXTENSION
        || s.structureType == STRUCTURE_CONTAINER)
        && s.energy <= s.energyCapacity
      });

    let Total = Creep.carryCapacity -_.sum(Creep.carry);
    while (Total > 50){
      Total = Total-50;
    }
    if (!(Creep.withdraw(structure, RESOURCE_ENERGY, Total) > 0)) {
      Creep.moveTo(structure);
    }
    // var result = (Creep.withdraw(structure, RESOURCE_ENERGY, Total));
    // if(result != OK) {
    //   console.log(Creep + ' failed to withdraw with the code: '+ result);
    // }

  }
};
module.exports = withdraw;

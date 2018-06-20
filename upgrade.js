var upgrade = {
  run: function(Creep){
    if (Creep.upgradeController(Creep.room.controller) == ERR_NOT_IN_RANGE){
      Creep.moveTo(Creep.room.controller);
    }
  }
};
module.exports = upgrade;

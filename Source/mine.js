var mine = {
  run: function(Creep){
    if (Creep.memory.mine == 'mine2') {
      if (Creep.harvest(Creep.pos.findClosestByPath(FIND_SOURCES)) == ERR_NOT_IN_RANGE){
        Creep.moveTo(Game.flags.Mine2.pos);
        Creep.say('👷 2');
      }
    } else {
      // var result = Creep.harvest(Creep.pos.findClosestByPath(FIND_SOURCES));
      // if(result != OK) {
      //   console.log(Creep + ' failed to mine with the code: '+ result);
      // }
      if (!(Creep.harvest(Creep.pos.findClosestByPath(FIND_SOURCES)) > 0)){
        Creep.moveTo(Game.flags.Mine1.pos);
      }
    }
  }
};
module.exports = mine;

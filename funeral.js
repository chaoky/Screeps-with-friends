var funeral = {
  run: function(Creep){
    if (!(Creep.pickup(Creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES)) < 0) && Creep.pickup(Creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES)) != ERR_NOT_IN_RANGE){
      Creep.say('god bless');
    }
  }
}
module.exports = funeral;

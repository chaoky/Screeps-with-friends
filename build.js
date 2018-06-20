var build = {
  run: function(Creep){
    var Site = Creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
    if (Site == undefined){
      Creep.memory.idle = 'yes';
    }
    else if(Creep.build(Site) == ERR_NOT_IN_RANGE){
      Creep.moveTo(Site);
    }
  }
};

module.exports = build;

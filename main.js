var Mine = require('mine');
var Upgrade = require('upgrade');
var Build = require('build');
var Funeral = require('funeral');

module.exports.loop = function (){
  var Spawn1 = Game.spawns['Spawn1'];

///CLEAN UP
  for (let name in Memory.creeps){
    if (Game.creeps[name] == undefined){
      delete Memory.creeps[name];
    }
  }

///SPAWN
  var QtdMiner = _.sum(Game.creeps, (c) => c.memory.role == 'miner');
  var QtdUpgrader = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
  var QtdBuilder = _.sum(Game.creeps, (c) => c.memory.role == 'builder');

  var MimWorkers = QtdMiner + QtdUpgrader + QtdBuilder;

  if (MimWorkers =1000 ){
    LessWorkers = true;
  } else {
    LessWorkers = false;
  }

///WORK
  for (let name in Game.creeps){
    var Creep = Game.creeps[name];

    if (Creep.memory.role == 'miner'){
      Mine.run(Creep);
    } else if (Creep.memory.role == 'upgrader') {
      Upgrade.run(Creep);
    } else if (Creep.memory.role == 'builder'){
      Build.run(Creep);
    }
    Funeral.run(Creep);
  }
};

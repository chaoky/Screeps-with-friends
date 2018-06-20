var Build = require('build');
var Funeral = require('funeral');
var Mine = require('mine');
var Spawner = require('spawner');
var Store = require('store');
var Upgrade = require('upgrade');
var Withdraw = require('withdraw');

module.exports.loop = function (){
///CLEAN MEMORY
  for (let name in Memory.creeps){
    if (Game.creeps[name] == undefined){
      delete Memory.creeps[name];
    }
  }

///SPAWN LOOP
  var CreepQtd = _.sum(Game.creeps, (c) => c.memory.mine == 'mine2') + _.sum(Game.creeps, (c) => c.memory.mine == 'mine1');;

  if(CreepQtd < 9){
    Spawner.run('null');
  }

  for (let name in Game.creeps){
    var Creep = Game.creeps[name];

    // var EnergyStorageAvailable = _.sum(Creep.room.storage.store[RESOURCE_ENERGY])
    // var EnergyStorageCapacityAvailable = _.sum(Creep.room.storeCapacity)
    //
    // var TotalEnergy = Creep.room.energyAvailable + Creep.carry.energy + EnergyStorageAvailable;
    // var EnergyCapacity = Creep.room.energyCapacityAvailable + EnergyStorageCapacityAvailable;
    // var totalinpercent = 100*TotalEnergy/EnergyCapacity

    var result = _.sum(Creep.room.storeCapacity);
    console.log(Creep + ' storeCapacity: '+ result);


    ///TOTAL
    var TotalEnergy = Creep.room.energyAvailable + Creep.carry.energy;
    var EnergyCapacity = Creep.room.energyCapacityAvailable;
    var totalinpercent = 100*TotalEnergy/EnergyCapacity

    if (totalinpercent < 80){
      var full = false;
    } else {
      var full = true;
    }
    console.log(full);

    ///WORK
    Funeral.run(Creep);

    if (Creep.memory.idle == 'yes'){
      if (full == false && Creep.carry.energy != Creep.carryCapacity &&  _.sum(Game.creeps, (c) => c.memory.state == 'mining') < 4){
        Creep.memory.state = 'mining';
        Creep.memory.idle = 'no';
      }
      else if (full == false && Creep.carry.energy == Creep.carryCapacity){
        Creep.memory.state = 'storing';
        Creep.memory.idle = 'no';
      } else {
        if(Creep.carry.energy == 0){
          Creep.memory.state = 'withdrawing';
          Creep.memory.idle = 'no';
        } else {
          var Site = Creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
          if (Site == undefined || _.sum(Game.creeps, (c) => c.memory.state == 'upgrading') < 1){
            Creep.memory.state = 'upgrading';
            Creep.memory.idle = 'no';
          } else {
            Creep.memory.state = 'building';
            Creep.memory.idle = 'no';
          }
        }
      }
    }
    else {
      switch(Creep.memory.state) {
        case 'mining':
          if (Creep.carry.energy == Creep.carryCapacity){
            Creep.memory.idle = 'yes';
          } else {
            Mine.run(Creep);
            Creep.say('👷');
          }
          break;
        case 'storing':
          if (Creep.carry.energy == 0){
            Creep.memory.idle = 'yes';
          } else {
            Store.run(Creep);
            Creep.say('🚚');
          }
          break;
        case 'withdrawing':
          if (Creep.carry.energy == Creep.carryCapacity){
            Creep.memory.idle = 'yes';
          } else {
            Withdraw.run(Creep);
            Creep.say('⛽');
          }
          break;
        case 'upgrading':
          if (Creep.carry.energy == 0){
            Creep.memory.idle = 'yes';
          } else {
            Upgrade.run(Creep);
            Creep.say('⬆️');
          }
          break;
        case 'building':
          if (Creep.carry.energy == 0){
            Creep.memory.idle = 'yes';
          } else{
            Build.run(Creep);
            Creep.say('🏗️');
          }
          break;
      }
    }
  }
};

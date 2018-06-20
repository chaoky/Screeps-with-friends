var spawner = {
  run: function(){
    var QtdMine2 = _.sum(Game.creeps, (c) => c.memory.mine == 'mine2');
    if (QtdMine2 < -1){
      Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], undefined, {
        mine: 'mine2',
        idle: 'yes',
        state: 'baby'
      });
    }else{
      Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, CARRY, MOVE], undefined, {
        mine: 'mine1',
        idle: 'yes',
        state: 'baby'
      });
    }
  }
};
module.exports = spawner;
//350

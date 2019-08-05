var AkropolisTimeLock = artifacts.require("./AkropolisTimeLock.sol");


module.exports = function(deployer, network, accounts) {
  let owner = accounts[0];
  
  let token = "0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7"; //AKRO
  let releaseDate = 1589587260;
  
  //console.log('owner of storage contracts: ' + owner)

  deployer.deploy(AkropolisTimeLock, token, releaseDate, {from: owner});
  
};


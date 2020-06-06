var Store = artifacts.require("Store.sol");

module.exports = function(callback) {
  Store.deployed().then(function(instance){
    return instance.set(2020);
  });



};

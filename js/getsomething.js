var Store = artifacts.require("Store.sol");

module.exports = async function(callback) {
  let instance = await Store.deployed();
  //const result = await instance.set(2468);
  
  //console.log('just set to:',result);
  let value = await instance.get();
  console.log('test',value);
  console.log('test',value.toNumber());


};

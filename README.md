# store_smartcontract
a little example to show how smart contract working on the ganache wtih set/get function.


make sure that you have installed 'truffle' and 'ganache'

1. run ganache

'sudo ./ganache-2.4.0-linux-x86_64.AppImage '




2. new workspace of ganache

A.workspace-add project(import truffle-config.js of text_example_store)

![image](https://github.com/hardgold/store_smart_contract/blob/master/image_for_readme/image1.png)

B.server

here the ganache port number is 7545,wo don't need to change it.
ganache-cli port number(default) is 8545.
with 'truffle develop' command,the port number(default) is 9545.

we can change network id(blockchain id) to what we want.

![image](https://github.com/hardgold/store_smart_contract/blob/master/image_for_readme/image2.png)

then you can save workspace.

![image](https://github.com/hardgold/store_smart_contract/blob/master/image_for_readme/image3.png)

3.truffle 

'cd test_example_store'
'truffle console' 

![image](https://github.com/hardgold/store_smart_contract/blob/master/image_for_readme/image4.png)

'migrate --reset'  to reset(compile and migrate) all of contracts
![image](https://github.com/hardgold/store_smart_contract/blob/master/image_for_readme/image5.png)

4.invoke storesomething.js to interact with contracts[function set()]

'truffle exec js/storesomething.js'

![image](https://github.com/hardgold/store_smart_contract/blob/master/image_for_readme/image6.png)

we can see the ganache also responsed

![image](https://github.com/hardgold/store_smart_contract/blob/master/image_for_readme/image7.png)
![image](https://github.com/hardgold/store_smart_contract/blob/master/image_for_readme/image8.png)


5.invoke getsomething.js to interact with contracts[function get()]

'truffle exec js/getsomething.js'

![image](https://github.com/hardgold/store_smart_contract/blob/master/image_for_readme/image9.png)





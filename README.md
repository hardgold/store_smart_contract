# store_smartcontract
a little example to show how smart contract working on the ganache wtih set/get function.


make sure that you have installed 'truffle' and 'ganache'

1. run ganache
'sudo ./ganache-2.4.0-linux-x86_64.AppImage '




2. new workspace of ganache
A.workspace-add project(import truffle-config.js of text_example_store)
image1

B.server
here the ganache port number is 7545,wo don't need to change it.
ganache-cli port number(default) is 8545.
with 'truffle develop' command,the port number(default) is 9545.

we can change network id(blockchain id) to what we want.
image2

then you can save workspace .
image3

3.truffle 
'cd test_example_store'
'truffle console' 
image4

'migrate --reset'  to reset(compile and migrate) all of contracts
image5

4.invoke storesomething.js to interact with contracts[function set()]
'truffle exec js/storesomething.js'
image6

we can see the ganache also responsed
image7
image8


5.invoke getsomething.js to interact with contracts[function get()]
'truffle exec js/getsomething.js'
image9





# Concept
PChains is a side-chains manager for [Burstcoin](https://www.burst-coin.org/) network. This module is a NodeJS parser for PChains transactions...

# Usage
### Require
```
const parser = require('pchains-tx-parser').getInfo;
```

### Normal Transactions
```
parser('TEST@tx@01030000002d81a7a233c4d70501070000001027000000000000011000000000000000000000000105000000f779587bc54dc43901140000001027000000000000');
```

###### Returns
{ ticker: 'TEST',
  type: 'tx',
  amount: 0,
  data:{
     sender: '421020816233693485',
     receiver: '4162537466170472951',
     amount: 10000,
     fee: 0,
     merge: 10000
   }
}

### Genesis Transactions
```
parser('TEST@genesis@500000');
```

###### Returns
{ ticker: 'TEST', type: 'genesis', amount: '500000' }

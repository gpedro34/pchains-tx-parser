# Concept
[PChains](http://burst-marketplace.binary-dev.com/pchains/documentations/doc.php) is a side-chains Proof-of-Concept for [Burstcoin](https://www.burst-coin.org/) network. It's purpose is to show the power of the Burst messaging system and how it can be used to signal immutable data with structured data...
This module is a simple NodeJS parser for PChains transactions.

# NPM install
```
npm install pchains-tx-parser
```

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

# Dependencies
- [x] [hex2dec](https://www.npmjs.com/package/hex2dec)

# Links
- [x] [Github](https://github.com/gpedro34/pchains-tx-parser/)
- [x] [NPM](https://www.npmjs.com/package/pchains-tx-parser)

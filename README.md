[![NPM Version](https://badgen.net/npm/v/pchains-tx-parser)]()
[![NPM Downloads](https://badgen.net/npm/dt/pchains-tx-parser)]()
[![NPM Dependents](https://badgen.net/npm/dependents/pchains-tx-parser)]()
[![Tech Debt](https://img.shields.io/sonar/4.2/http/sonar.petalslink.com/org.ow2.petals%3Apetals-se-ase/tech_debt.svg)]()
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgpedro34%2Fpchains-tx-parser.svg?type=shield)]()

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

# Tests
Run:
```
npm test
```

# Coverage
Run:
```
npm run cover
```

# Dependencies  [![Dependencies Status](https://img.shields.io/david/gpedro34/pchains-tx-parser.svg)]()
- [x] [hex2dec](https://www.npmjs.com/package/hex2dec)

# Dev-Dependencies
- [x] [Mocha](https://www.npmjs.com/package/mocha)
- [x] [nyc](https://www.npmjs.com/package/nyc)

# Links
- [x] [Github](https://github.com/gpedro34/pchains-tx-parser/)
- [x] [NPM](https://www.npmjs.com/package/pchains-tx-parser)


# License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgpedro34%2Fpchains-tx-parser.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgpedro34%2Fpchains-tx-parser?ref=badge_large)

'use strict';

const parser = require('./pchains-tx-parser').getInfo;
const assert = require('assert').strict;

describe('PChains Transaction Parser', function () {
 it('Normal Transactions', function () {
      let a = parser('TEST@tx@01030000002d81a7a233c4d70501070000001027000000000000011000000000000000000000000105000000f779587bc54dc43901140000001027000000000000');
      let b = { ticker: 'TEST', type: 'tx', amount: 0, data:{ sender: '421020816233693485', receiver: '4162537466170472951', amount: 10000, fee: 0, merge: 10000 } };
      assert.equal(a.ticker, b.ticker);
      assert.equal(a.type, b.type);
      assert.equal(a.amount, b.amount);
      assert.equal(a.data.sender, b.data.sender);
      assert.equal(a.data.receiver, b.data.receiver);
      assert.equal(a.data.amount, b.data.amount);
      assert.equal(a.data.fee, b.data.fee);
      assert.equal(a.data.merge, b.data.merge);
    });

 it('Genesis Transactions', function () {
     let a = parser('TEST@genesis@500000');
     let b = { ticker: 'TEST', type: 'genesis', amount: '500000' };
     assert.equal(a.ticker, b.ticker);
     assert.equal(a.type, b.type);
     assert.equal(a.amount, b.amount);
    });

});

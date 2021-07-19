require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn purchase install close broken sentence'; 
let testAccounts = [
"0x81689fffe3469616a6e6c30840d0630cee2210df96eafab05fbeeb8b23c78b6c",
"0xfc8fb8bf039e0ee497cc8e5f709c26ff4d0b8c9c704515722b7e28555800b6a4",
"0xf32e4a693d45fcb5781314117c0788c4d06b88b1368c84860b1a0ab1a74c3381",
"0xb44709fa31a1f36e3e6a897ee78610c57ed8dbea1fe6b30a7c845b12e7e53812",
"0xb75e984ee29046777975b763853189d96b17e6e9428c2e63631014363b472f22",
"0x71782237dabbcdc9997a097b3c8b93d209e7e1c407b367c61515bcdd8e4069c4",
"0x42b84a990251c0e078d822b09a028c7bde42d95aad3f201116937f8190d0d581",
"0xb902ae5e0587d9fc40d2790158983103659e24e426962ca1eb64f2fac6366fe3",
"0x81f267c57b0fc1b0922c642c5ed1da371509634be146cf2bb809c804b5f5d12a",
"0xb098feba55dadf2a245e31b637f4c2304212f79af9d725fd0a0b8894b2884cde"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe street riot payment upgrade inner arm army gasp'; 
let testAccounts = [
"0x942e1225323a0d0f224c4bac4d3b60d08b3352a3a268e328273d392300eb350e",
"0x4a1fc12e221897eedbb731349d9d50f2bb2e3d0534d9b0664e44a7af2ae60807",
"0x2bd31e66e43b86ed68aaf3bf754f4010aa6181caec8922d88b70b7e996c5c4a1",
"0x45896456a2973101f6c4db703480ed2234beee39954079f2c6402629086d474d",
"0xe84e18242737d98c44aadc1dc234147dbd4a27f852a6df97cc7babaf067165c5",
"0xb53c3244ae97952065b83845afb4c9535f9236d05b9cb762a309138788f584e0",
"0x9136cf054194d1e28c252aa87021855e5ee710af46f202983d544c1d3026349d",
"0xf1c600923bdfe17e6839a73ae76f03598a1886cc0ed1db07677cd159ce370c08",
"0xa78fa0d268cb646785690421b646ea63850021774e43bc802d5c44fd63fe5bb0",
"0xa4e4f64192546597bf44c3ddbe5fe686f9e3730559b46f6324d9c5bf9048abdc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



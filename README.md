# zkSyncEra-Test
Project to test zkSync Era test network

You need to have some ETH in zkSync Era Goerli, use [official bridge](https://goerli.portal.zksync.io/bridge) to bridge some

Usage:

Change "\<PUT YOUR PRIVATE KEY HERE\>" to your wallet private key in deployment files: 
- deployment\deployGreeter.ts 
- deployment\deployERC20.ts

You might want to change your ERC20 token name and symbol in contracts\Erc20.sol


Install all dependencies:
>npm install -f

Compile:
>npx hardhat compile

Deploy all contracts:
>npx hardhat deploy-zksync

Or you can deploy it one by one:
>npx hardhat deploy-zksync --script deployGreeter.ts
>
>npx hardhat deploy-zksync --script deployERC20.ts

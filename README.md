# zkSyncEra-Test
Project to test zkSync Era test network

Usage:

Change "<PUT YOUR PRIVATE KEY HERE>" to your wallet private key in deployment files: deployment\deployGreeter.ts and deployERC20.ts

Run:
npm install -f

Compile:
npx hardhat compile

Deploy all contracts:
npx hardhat deploy-zksync

Or you can deploy it one by one:
npx hardhat deploy-zksync --script deployGreeter.ts
npx hardhat deploy-zksync --script deployERC20.ts
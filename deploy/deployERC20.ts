import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the erc20Contract contract`);

  // Initialize the wallet.
  const wallet = new Wallet("<PUT YOUR PRIVATE KEY HERE>");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("MySuperToken");

  
  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  
  const erc20Contract = await deployer.deploy(artifact);

  // Show the contract info.
  const contractAddress = erc20Contract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);

}

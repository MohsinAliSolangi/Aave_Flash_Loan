# Aave_Flash_Loan

This project demonstrates how to execute a flash loan using Aave's protocol. It provides a smart contract to request a flash loan, repay it, and manage any additional logic. The project is built using Hardhat, a popular development framework for Ethereum.

## Project Structure

- **Contracts**: Contains the main flash loan contract.
- **Scripts**: Contains the deployment script for deploying the flash loan contract.
- **Tests**: Contains test scripts for simulating and verifying the flash loan execution.

## Requirements

To run this project, you need to have the following tools installed:

- [Node.js](https://nodejs.org/en/)
- [Hardhat](https://hardhat.org/getting-started/)
- A wallet like [MetaMask](https://metamask.io/), connected to a supported network.
- [Aave V2 Testnet Faucet](https://staging.aave.com/faucet/) for obtaining test tokens.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/MohsinAliSolangi/Aave_Flash_Loan.git
   cd flash-loan-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your environment variables for the desired network, wallet keys, and API keys by creating a `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Replace the placeholder values with your wallet private key, Aave pool addresses, and any relevant RPC URLs.

## Running the Flash Loan

1. Compile the contracts:
   ```bash
   npx hardhat compile
   ```

2. Deploy the contract to a testnet (e.g., Goerli):
   ```bash
   npx hardhat run scripts/deploy.js --network goerli
   ```

3. Request a flash loan by calling the contract from the Hardhat console or by writing a script to interact with the deployed contract:
   ```bash
   npx hardhat console --network goerli
   ```

4. Execute tests to verify the flash loan process:
   ```bash
   npx hardhat test
   ```

5. (Optional) Run a local Hardhat node to simulate network activity:
   ```bash
   npx hardhat node
   ```

## Flash Loan Use Cases

Flash loans are typically used for:
- Arbitrage trading
- Collateral swapping
- Debt refinancing

All of these operations happen within a single transaction, ensuring the borrowed assets are repaid in full, or the transaction is reverted.

## Key Commands

- Compile contracts:
  ```bash
  npx hardhat compile
  ```

- Deploy to a network:
  ```bash
  npx hardhat run scripts/deploy.js --network <network>
  ```

- Run tests:
  ```bash
  npx hardhat test
  ```

- Start a local node:
  ```bash
  npx hardhat node
  ```

- Interact with your contracts via the console:
  ```bash
  npx hardhat console --network <network>
  ```

## 🚀 Contact

For any questions, feedback, or inquiries, feel free to reach out to **Mohsin Ali Solangi**. You can connect via the following platforms:

🌐 **Linktree**: [Mohsin Ali Solangi](https://linktr.ee/mohsinalisolangi)

🔗 **LinkedIn**: [Mohsin Ali Solangi](https://www.linkedin.com/in/mohsinalisolangi/)

Looking forward to hearing from you! 😄

## License

This project is licensed under the MIT License.

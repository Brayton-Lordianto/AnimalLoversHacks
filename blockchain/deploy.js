// console.clear();
require("dotenv").config();
const path = require("path");
const {
    AccountId,
    PrivateKey,
    Client,
    FileCreateTransaction,
    ContractCreateTransaction,
    ContractFunctionParameters,
    ContractExecuteTransaction,
    ContractCallQuery,
    Hbar,
    ContractCreateFlow
} = require("@hashgraph/sdk");
const fs = require("fs");
// Configure accounts and client
const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PVKEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey);

async function main() {
    // Import the compiled contract bytecode
    const contractBytecode = fs.readFileSync("PetMe_sol_PetMe.bin");
    // Create a file on Hedera and store the bytecode


    // ADDED__________________________
    const contractCreate = new ContractCreateFlow()
        .setGas(100000)
        .setBytecode(contractBytecode);

    //Sign the transaction with the client operator key and submit to a Hedera network
    const txResponse = contractCreate.execute(client);

    //Get the receipt of the transaction
    const receipt = (await txResponse).getReceipt(client);

    //Get the new contract ID
    const newContractId = (await receipt).contractId;

    console.log("The new contract ID is " + newContractId);
    console.log("The new contract ID is " + JSON.stringify(newContractId));

    //SDK Version: v2.11.0-beta.1
    // const fs = require("fs");
    const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        path.join(contractsDir, "contract-id.json"),
        JSON.stringify({
            PetMe: newContractId,
            PetMeString: newContractId.toSolidityAddress(),

        }, undefined, 2)
    );

    // ADDED__________________________





    // const fileCreateTx = new FileCreateTransaction()
    //     .setContents(contractBytecode)
    //     .setKeys([operatorKey])
    //     .freezeWith(client);
    // const fileCreateSign = await fileCreateTx.sign(operatorKey);
    // const fileCreateSubmit = await fileCreateSign.execute(client);
    // const fileCreateRx = await fileCreateSubmit.getReceipt(client);
    // const bytecodeFileId = fileCreateRx.fileId;
    // console.log(`- The bytecode file ID is: ${bytecodeFileId} \n`);

    // // Instantiate the smart contract
    // const contractInstantiateTx = new ContractCreateTransaction()
    //     .setBytecodeFileId(bytecodeFileId)
    //     .setGas(100000)
    //     .setConstructorParameters(
    //         new ContractFunctionParameters()
    //     );
    // const contractInstantiateSubmit = await contractInstantiateTx.execute(client);
    // const contractInstantiateRx = await contractInstantiateSubmit.getReceipt(
    //     client
    // );
    // const contractId = contractInstantiateRx.contractId;
    // const contractAddress = contractId.toSolidityAddress();
    // console.log(`- The smart contract ID is: ${contractId} \n`);
    // console.log(`- Smart contract ID in Solidity format: ${contractAddress} \n`);



    // UPIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU

    // // Query the contract to check changes in state variable
    // const contractQueryTx = new ContractCallQuery()
    //     .setContractId(contractId)
    //     .setGas(100000)
    //     .setFunction(
    //         "owner",
    //         new ContractFunctionParameters().addString("Alice")
    //     );
    // const contractQuerySubmit = await contractQueryTx.execute(client);
    // const contractQueryResult = contractQuerySubmit.getAddress(0);
    // console.log(
    //     `- Here's the owner you asked for: ${contractQueryResult} \n`
    // );

    // // Call contract function to update the state variable
    // const contractExecuteTx = new ContractExecuteTransaction()
    //     .setContractId(contractId)
    //     .setGas(100000)
    //     .setFunction(
    //         "setMobileNumber",
    //         new ContractFunctionParameters().addString("Bob").addUint256(222222)
    //     );
    // const contractExecuteSubmit = await contractExecuteTx.execute(client);
    // const contractExecuteRx = await contractExecuteSubmit.getReceipt(client);
    // console.log(
    //     `- Contract function call status: ${contractExecuteRx.status} \n`
    // );

    // // Query the contract to check changes in state variable
    // const contractQueryTx1 = new ContractCallQuery()
    //     .setContractId(contractId)
    //     .setGas(100000)
    //     .setFunction(
    //         "owner",
    //         new ContractFunctionParameters()
    //     );
    // const contractQuerySubmit1 = await contractQueryTx1.execute(client);
    // const contractQueryResult1 = contractQuerySubmit1.getUint256(0);
    // console.log(
    //     `- Here's the phone number you asked for: ${contractQueryResult1} \n`
    // );
}
main();

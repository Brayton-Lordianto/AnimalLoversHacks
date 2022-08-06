import React, { useEffect } from 'react'
import contractId from "./contracts/contract-id.json";
// const path = require("path");

import {
    AccountId,
    PrivateKey,
    Client,
    FileCreateTransaction,
    ContractCreateTransaction,
    ContractFunctionParameters,
    ContractExecuteTransaction,
    AccountBalanceQuery,
    ContractCallQuery,
    Hbar,
    ContractCreateFlow
} from "@hashgraph/sdk";
// const fs = require("fs");
// require("dotenv").config();
// Configure accounts and client
const operatorId = AccountId.fromString(process.env.REACT_APP_OPERATOR_ID);
const operatorKey = PrivateKey.fromString(process.env.REACT_APP_OPERATOR_PVKEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey).setDefaultMaxTransactionFee(new Hbar(3)).setMaxQueryPayment(new Hbar(3))

const AdoptionRecords = () => {
    const addAdoptionRecords = async () => {
        console.log(client)
        const contractQueryTx = new ContractCallQuery().setQueryPayment(new Hbar(1))
            .setContractId('0.0.47852900')
            .setGas(1000000)
            // .setGas(new Hbar(0.00001))
            .setFunction(
                "addAdoptionRecord",
                new ContractFunctionParameters().addString('1').addString('Asim Nepal').addString('2').addString('Loki').addString('Dog').addString('Husky').addString('Male').addString('He is very naughty').addString('Broken Limbs').addAddress(client.operatorAccountId.toSolidityAddress())

                // string memory _adoptorId,
                // string memory _adoptorName,
                // string memory _petId,
                // string memory _petName,
                // string memory _petType,
                // string memory _breed,
                // string memory _sex,
                // string memory _description,
                // string memory _medicalDescription,
                // address _validator
            );

        const contractQuerySubmit = await contractQueryTx.execute(client);
        // const contractQueryResult = contractQuerySubmit.getString(0);
        // console.log(
        //     `- Here's the owner you asked for: ${JSON.stringify(contractQueryResult)} \n`
        // );
        console.log('Finally ended')
    }
    const fetchAdoptionRecords = async () => {
        const contractQueryTx = new ContractCallQuery().setQueryPayment(new Hbar(1))
            .setContractId('0.0.47852900')
            .setGas(1000000)
            // .setGas(new Hbar(0.00001))
            .setFunction(
                "getAllAdoptionRecords", null
                // new ContractFunctionParameters()
            );

        const contractQuerySubmit = await contractQueryTx.execute(client);
        const contractQueryResult = contractQuerySubmit.getString()
        console.log(
            contractQueryResult
        );
        console.log(
            `- Here's the owner you asked for: ${contractQueryResult} \n`
        );
        console.log('Finally ended')
    }

    useEffect(() => {
        addAdoptionRecords();
        fetchAdoptionRecords()
    }, [])
    return (
        <div>AdoptionRecords</div>
    )
}

export default AdoptionRecords
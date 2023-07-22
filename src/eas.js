import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';

export const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26

// Initialize the sdk with the address of the EAS Schema contract address
const eas = new EAS(EASContractAddress);

// Gets a default provider (in production use something else like infura/alchemy)
const provider = ethers.providers.getDefaultProvider("sepolia");

// Connects an ethers style provider/signingProvider to perform read/write functions.
// MUST be a signer to do write operations!
eas.connect(provider);

export async function createAttestation(attestationData) {
  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder("string claim");
  const encodedData = schemaEncoder.encodeData([{ name: "claim", value: attestationData, type: "string" }]);

  const schemaUID = "0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995"; // replace with your schema UID

  const tx = await eas.attest({
    schema: schemaUID,
    data: {
      recipient: "0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165", // replace with the user's Ethereum address
      expirationTime: 0,
      revocable: true,
      data: encodedData,
    },
  });

  const newAttestationUID = await tx.wait();

  return newAttestationUID;
}

export default eas;

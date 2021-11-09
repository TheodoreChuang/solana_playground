const anchor = require("@project-serum/anchor");

const main = async () => {
  console.log("🚀 Starting test...");

  // gets this data from solana config get (local, devnet)
  anchor.setProvider(anchor.Provider.env());

  // automatically compile our code in lib.rs and get it deployed locally on a local validator.
  const program = anchor.workspace.Myepicproject;

  // call our function and wait for our validator to "mine" the instruction
  const tx = await program.rpc.startStuffOff();
  console.log("Your transaction signature", tx);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();

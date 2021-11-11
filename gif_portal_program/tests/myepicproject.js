const anchor = require("@project-serum/anchor");

const { SystemProgram } = anchor.web3;

const main = async () => {
  console.log("🚀 Starting test...");

  // gets this data from solana config get (local, devnet)
  const provider = anchor.Provider.env();
  anchor.setProvider(provider);

  // automatically compile our code in lib.rs and get it deployed locally on a local validator.
  const program = anchor.workspace.Myepicproject;

  const baseAccount = anchor.web3.Keypair.generate();

  // call our function and wait for our validator to "mine" the instruction
  // note: startStuffOff - Anchor converts JS camelcase to Rust snakecase
  const tx = await program.rpc.startStuffOff({
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    },
    signers: [baseAccount],
  });
  console.log("Transaction signature -> startStuffOff: ", tx);

  let account = await program.account.baseAccount.fetch(baseAccount.publicKey);
  console.log("👀 GIF Count Before", account.totalGifs.toString());

  await program.rpc.addGif("some-link-here", {
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
    },
  });

  account = await program.account.baseAccount.fetch(baseAccount.publicKey);
  console.log("👀 GIF Count After", account.totalGifs.toString());
  console.log("👀 GIF List", account.gifList);
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

# Solana

### Overview

https://docs.solana.com/developing/programming-model/overview

### Tools

https://explorer.solana.com/

#### Storage

Storage rent can be paid via one of two methods:

Method 1: Set it and forget it when accounts maintain the minimum-balance
Method 2: Pay per byte

https://docs.solana.com/storage_rent_economics

## New Project Set Up

```shell
$ anchor init myepicproject --javascript
$ cd myepicproject
```

```shell
$ anchor test
```

### Local

```shell
$ solana config set --url localhost
$ solana-test-validator
```

```shell
$ solana-keygen new
$ solana address
```

### Devnet

```shell
$ solana config set --url devnet
$ solana airdrop 5 # optionally args INSERT_YOUR_PHANTOM_PUBLIC_ADDRESS_HERE  --url https://api.devnet.solana.com
$ solana balance
```

In Anchor.toml, change [programs.localnet] to [programs.devnet].
Then, change cluster = "localnet" to cluster = "devnet"

```shell
$ anchor build
# get new program id (ex. BiwATQbjXu7R4HR83fHoa2Zvuvvw1tktwG3VaKi92jLd)
$ solana address -k target/deploy/myepicproject-keypair.json
```

In src/lib.rs, update declare_id!("new-program-id");
In Anchor.toml, change myepicproject = "previous-program-id" to "new-program-id"

```shell
$ anchor build

$ anchor deploy
```

## Initial Local Set Up (MacOS)

- Rust: programming language of Solana
- Solana: local infra
- Anchor: dev tools (compile, run local infra, deploy, test, etc.)
- Browser wallet (ex. Phantom extension)

#### Install Rust

https://doc.rust-lang.org/book/ch01-01-installation.html

VS Code has some language support by default (syntax highlighting)

#### Install Solana CLI

https://docs.solana.com/cli/install-solana-cli-tools#use-solanas-install-tool

```shell
$ solana --version
```

#### Install Anchor

https://project-serum.github.io/anchor/getting-started/installation.html#install-anchor

cargo install --git https://github.com/project-serum/anchor anchor-cli --locked

```shell
$ anchor --version
```

Ran into a lot problems getting the sample test to run with `anchor test`

1. First time it would try to install `bpf-tools` but would timeout

- subsequent attempts would error: not a directory `.local/share/solana/install/releases/1.8.2/solana-release/bin/sdk/bpf/dependencies/bpf-tools/rust/lib`
- https://github.com/solana-labs/solana/issues/21053

2. Workaround was to manually download from `https://github.com/solana-labs/bpf-tools/releases` into `<above-path...>/bpf-tools`
3. Run `anchor test` again and ran into permissions issues
   - Enable multiple permissions from Mac settings

#### Some design differences from Ethereum

EOA <-> account
Ethereum Smart Contracts <-> Solana programs (also an account)

Accounts are basically files that programs can read and write to. Programs can create accounts to write data to. Basically everything is an account.

State is not stored in programs but accounts https://docs.solana.com/developing/programming-model/accounts
Data is not immutable but requires rent https://docs.solana.com/storage_rent_economics
Solana programs are upgradeble and redeployed to the same program id https://docs.solana.com/cli/deploy-a-program#redeploy-a-program

#### Credits

Lots of the set up was from buildspace Solana course

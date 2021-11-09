# Solana

### Overview

https://docs.solana.com/developing/programming-model/overview

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

## Initial Local Set Up (MacOS)

- Rust: programming language of Solana
- Solana: local infra
- Anchor: dev tools (compile, test, deploy, etc.)

#### Install Rust

https://doc.rust-lang.org/book/ch01-01-installation.html

#### Install Solana CLI

https://docs.solana.com/cli/install-solana-cli-tools#use-solanas-install-tool

```shell
$ solana config set --url localhost
$ solana config get
$ solana-test-validator
```

```shell
$ solana-keygen new
$ solana address
```

```shell
# set to localhost
$ solana config set --url localhost

# set to devnet
$ solana config set --url devnet
```

#### Install Anchor

https://project-serum.github.io/anchor/getting-started/installation.html#install-anchor

cargo install --git https://github.com/project-serum/anchor anchor-cli --locked

Ran into a lot problems getting the sample test to run with `anchor test`

1. First time it would try to install `bpf-tools` but would timeout

- subsequent attempts would error: not a directory `.local/share/solana/install/releases/1.8.2/solana-release/bin/sdk/bpf/dependencies/bpf-tools/rust/lib`
- https://github.com/solana-labs/solana/issues/21053

2. Workaround was to manually download from `https://github.com/solana-labs/bpf-tools/releases` into `<above-path...>/bpf-tools`
3. Run `anchor test` again and ran into permissions issues
   - Enable multiple permissions from Mac settings

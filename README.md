# 🔐 Solana Wallet Generator

A minimal, secure, and developer-friendly **Solana wallet generator** built using React, TypeScript, and cryptographic libraries like `bip39`, `ed25519-hd-key`, and `tweetnacl`. This tool allows users to generate a BIP-44 HD wallet with deterministic keypairs derived from a mnemonic phrase.

---

## ⚙️ Features

- ✅ Generate a **mnemonic phrase** (BIP39 standard)
- 🔐 Derive **Solana-compatible keypairs** (Ed25519, SLIP-0010)
- 🔁 **Multiple account generation** from a single seed
- 🧠 Blur-hidden **private keys** revealed on hover
- 💡 Built using modern frontend stack: React + TypeScript + TailwindCSS

---

## 🧱 Tech Stack

- **React** (UI)
- **TypeScript** (type safety)
- **TailwindCSS** (styling)
- **bip39** (mnemonic generation)
- **ed25519-hd-key** (key derivation)
- **tweetnacl** (keypair creation)
- **bs58** (Solana-style base58 encoding)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/code-pankaj/Lyra.git
cd solana-wallet-generator
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

---

## 🛡 Security Notes

* **This tool is for educational/demo use only.**
* Always handle private keys securely.
* Never expose private keys or mnemonics in production environments.


## ✨ Future Improvements

* Copy-to-clipboard functionality
* Toggle reveal for private keys
* Encrypted backup/export option
* Support for Solana JSON keystore format
* Check Balance
* Send Sol to other address

---

## 👤 Author

Developed by [Pankaj](https://github.com/code-pankaj) — built with ❤️ for Web3 innovation.


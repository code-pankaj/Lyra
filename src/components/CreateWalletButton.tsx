import * as bip39 from "bip39";
import { useState } from "react";
import { derivePath } from "ed25519-hd-key";
import bs58 from "bs58";
import nacl from "tweetnacl";

type wallet = {
  publicKey: string;
  privateKey: string;
};

const CreateWalletButton = () => {
  const [walletCount, setWalletCount] = useState(0);
  const [publicKeys, setPublicKeys] = useState<wallet[]>([]);
  const [mnemonic, setMnemonic] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleClick = async () => {
    let seedMnemonic = mnemonic;

    if (!hasGenerated) {
      setMnemonic("");
      seedMnemonic = bip39.generateMnemonic(128);
      setMnemonic(seedMnemonic);
      setHasGenerated(true);
    }

    const seed = await bip39.mnemonicToSeed(seedMnemonic);
    const path = `m/44'/501'/${walletCount}'/0'`;
    const { key: privateSeedKey } = derivePath(path, seed.toString("hex"));

    const keypair = nacl.sign.keyPair.fromSeed(privateSeedKey);

    const publicKey = bs58.encode(keypair.publicKey);
    const privateKey = bs58.encode(keypair.secretKey);

    const newWallet = { publicKey, privateKey };
    setPublicKeys((prev) => [...prev, newWallet]);

    setWalletCount((prev) => prev + 1);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-6 p-6 ">
        <div>
          <textarea
            value={mnemonic}
            className="w-[700px] h-[70px] border-2 bg-white text-black focus:outline-none focus:ring-2 placeholder-gray-400 rounded-2xl p-5 text-base hadow-md resize-none break-words "
            readOnly
            rows={3}
            placeholder="Click to Create Seed Phrase"
          />
        </div>
        <div>
          <button
            className="p-4 px-8 shadow hover:bg-gray-900 transition bg-black text-white font-bold cursor-pointer rounded-2xl"
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
      </div>
      <div className="px-6 space-y-4">
  {publicKeys.map((wallet, index) => (
    <div
      key={index}
      className="group bg-white text-black border border-gray-300 rounded-2xl p-5 shadow-md transition hover:shadow-lg"
    >
      <p className="text-lg font-semibold mb-2">Wallet #{index + 1}</p>
      <div className="text-sm break-all space-y-1">
        <p>
          <span className="font-medium">Public Key:</span> {wallet.publicKey}
        </p>
        <p>
          <span className="font-medium">Private Key:</span>{" "}
          <span className="inline-block blur-sm transition duration-300 group-hover:blur-none">
            {wallet.privateKey}
          </span>
        </p>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default CreateWalletButton;

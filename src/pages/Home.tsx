import { ConnectButton, useAccount } from "@web3modal/react";
import { truncateAddress } from "../utils";

function Home() {
  const { account, isReady } = useAccount();

  return (
    <>
      <h1>Pls connect with your wallet first!</h1>
      {account.isConnected === true ? (
        <p>{truncateAddress(account.address)}</p>
      ) : (
        <ConnectButton />
      )}
    </>
  );
}

export default Home;

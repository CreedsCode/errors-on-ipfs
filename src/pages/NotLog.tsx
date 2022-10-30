import { XCircleIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { useAccount, Web3Modal } from "@web3modal/react";
import { Fragment, useEffect, useState } from "react";

function NotLog() {
  const navigate = useNavigate();
  const { account, isReady } = useAccount();
  console.log(account);

  if (account.isConnected) {
    navigate("/Playgound");
  }

  return (
    <>
    </>
  );
}

export default NotLog;

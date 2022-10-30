import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useAccount, Web3Modal, ConnectButton } from "@web3modal/react";
import { redirect, Route, Routes, useNavigate } from "react-router-dom";
import { truncateAddress } from "../utils";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function Playground() {
  const { account, isReady } = useAccount();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  console.log(account.isConnected);

  if (!account.isConnected) {
    navigate("/notlog");
  }

  return <></>;
}

export default Playground;

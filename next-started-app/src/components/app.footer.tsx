import Link from "next/link";

const AppFooter = () => {
  return (
    <div className="relative">
      <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
        Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
        <a href="https://web3templates.com/" target="_blank" rel="noopener">
          Web3Templates.
        </a>{" "}
        Illustrations from{" "}
        <a href="https://www.glazestock.com/" target="_blank" rel="noopener ">
          Glazestock
        </a>
      </div>
    </div>
  );
};

export default AppFooter;

import Link from "next/link";

const AppHeader = () => {
  const navigation = ["Admin", "Blog"];
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {navigation.map((item, index) => (
          <Link
            key={index}
            href="/admin/dashboard"
            className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
          >
            {item}
          </Link>
        ))}
        <Link
          href="/admin/dashboard"
          className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
        >
          Get Started
        </Link>
      </nav>
    </div>
  );
};

export default AppHeader;

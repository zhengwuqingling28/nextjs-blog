"use client";

import AppTable from "@/components/app.table";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const AdminDashboard = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const router = useRouter();

  const HandleBtn = () => {
    router.push("/");
  };

  if (error) {
    return <>Failed to load...</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <button
        className="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => HandleBtn()}
      >
        Back to Home
      </button>
      <AppTable blogs={data} />
    </>
  );
};

export default AdminDashboard;

"use client";

import useSWR, { Fetcher } from "swr";

const BlogDetailPage = ({ params }: { params: { id: number } }) => {
  const fetcher: Fetcher<IBlog> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-600">
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2">{data?.title}</div>
        <p className="text-white text-sm">{data?.content}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block text-white rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 bg-sky-500">
          #{data?.author}
        </span>
      </div>
    </div>
  );
};

export default BlogDetailPage;

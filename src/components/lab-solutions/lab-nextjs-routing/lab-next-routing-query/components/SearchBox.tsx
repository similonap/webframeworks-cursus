"use client";

import { useSearchParams, useRouter } from "next/navigation";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  
  const q = searchParams.get("q") || "";

  const onChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newQ = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (newQ) {
      params.set("q", newQ);
    } else {
      params.delete("q");
    }
    replace(`?${params.toString()}`);
  };

  return (
    <input
      type="text"
      value={q}
      onChange={onChange}
      defaultValue={searchParams.get('query')?.toString()}
      placeholder="Search..."
    />
  );
};

export default SearchBox;
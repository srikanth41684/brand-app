"use client";
import { useRouter } from "next/navigation";

const LimitButton = ({ pageNumber }) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams) {
      searchParams.set("skip", `${newLimit}`);
    } else {
      searchParams.delete("skip");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
  };

  const phandleNavigation = () => {
    const newLimit = (pageNumber - 1) * 10;
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams) {
      searchParams.set("skip", `${newLimit}`);
    } else {
      searchParams.delete("skip");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
  };
  return (
    <div className="flex justify-between py-5">
      <div>
        {pageNumber > 1 && (
          <button
            onClick={phandleNavigation}
            className="bg-sky-300 py-3 px-10 rounded text-white"
          >
            Previous
          </button>
        )}
      </div>
      <div>
        <button
          onClick={handleNavigation}
          className="bg-sky-300 py-3 px-10 rounded text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LimitButton;

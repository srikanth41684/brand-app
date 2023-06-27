const Subscribe = () => {
  return (
    <div className="bg-indigo-50">
      <div className="py-20 px-5 max-w-[1400px] m-auto flex flex-col items-center justify-center">
        <div className="text-2xl font-semibold">
          Subscribe on our newsletter
        </div>
        <div className="text-gray-500 mt-2">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </div>
        <div className="mt-4">
          <input placeholder="Your Email" className="w-[250px] pl-3 h-8 rounded" />
          <button className="bg-blue-600 text-white text-base px-4 py-1 rounded ml-2">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

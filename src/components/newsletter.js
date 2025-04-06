const Newsletter = () => {
    return (
      <footer className="text-black mt-1  p-5">
        <div className="container p-4 text-center">
          <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
          <p className="text-gray-600 text-sm">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>
          <div className="mt-4 flex justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Newsletter;
  
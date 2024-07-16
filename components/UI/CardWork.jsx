
const GetStarted = () => {

    return (

          <div className="bg-white flex items-center justify-center py-10">
              <div className="container mx-auto">
                  <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="bg-pink-500 text-white p-10 md:w-1/2 flex flex-col justify-center">
                          <h2 className="text-3xl font-bold">Get started!</h2>
                          <p className="text-gray-200  mt-4 text-lg">
                              Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.
                          </p>
                          <button className="mt-6 bg-white text-pink-500 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out">
                              Contact us
                          </button>
                      </div>
                    <div className="bg-gray-100 p-10 md:w-1/2 flex items-center justify-center">
                        <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center">
                            <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;

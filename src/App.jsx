import doodle from "./assets/doodle.png";
import faso from "./assets/Faaso_bees.png";
import IosToggle from "./components/Toggle";


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-normal items-stretch">
        <img src={doodle} alt="logo" className="h-screen w-3/5 bg-yellow-200" />
        <div className="bg-white h-screen w-2/5 flex items-center justify-center">
          <form className="w-full max-w-sm px-0">
            <div className="flex items-center pr-70 ">
              <img src={faso} alt="logo" className="h-30 w-30 bg-yellow-200" />
              <div className="font-bold text-gray-700 text-5xl">
                <h2>
                  Bee<span className="text-yellow-500">Vend</span>
                </h2>
              </div>
            </div>
            <h3 className="font-bold text-xl mb-6">Nice to see you again</h3>
            <div className="mb-4">
              <label className="text-sm font- font-light mb-2 pl-5">Login</label>
              <input
                type="text"
                placeholder="Email or phone number"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-light mb-2 pl-5">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center space-x-2">
                <IosToggle />
                <span className="text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Sign in
            </button>

            <div className="mt-32 text-center text-sm text-gray-600">
              © faasobees 2025
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

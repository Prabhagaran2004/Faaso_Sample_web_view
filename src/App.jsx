import doodle from "./assets/doodle.png";
import faso from "./assets/Faaso_bees.png";
import IosToggle from "./components/Toggle";
import ImageSlider from "./components/ImageSlider";

function App() {
  // Images for the slider
  const sliderImages = [doodle, doodle, doodle]; // Add more images here as needed

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Image Slider Section - Visible on all screens */}
        <div className="w-full lg:w-3/5 h-64 lg:h-screen bg-yellow-200">
          <ImageSlider images={sliderImages} />
        </div>

        {/* Form Section - Full width on mobile, 2/5 on large screens */}
        <div className="bg-white w-full lg:w-2/5 min-h-screen flex items-center justify-center p-6 lg:p-8">
          <form className="w-full max-w-sm">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3 mb-8">
              <img
                src={faso}
                alt="logo"
                className="h-12 w-12 sm:h-14 sm:w-14 bg-yellow-200 object-contain"
              />
              <div className="font-bold text-gray-700 text-3xl sm:text-4xl">
                <h2>
                  Bee<span className="text-yellow-500">Vend</span>
                </h2>
              </div>
            </div>

            <h3 className="font-bold text-xl sm:text-2xl mb-6">
              Nice to see you again
            </h3>
            {/* Login Input */}
            <div className="mb-5">
              <label className="block text-sm font-light mb-2">Login</label>
              <input
                type="text"
                placeholder="Email or phone number"
                className="w-full px-4 py-3 sm:py-3.5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
              />
            </div>

            {/* Password Input */}
            <div className="mb-5">
              <label className="block text-sm font-light mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-3 sm:py-3.5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
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

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-3 sm:space-y-0">
              <label className="flex items-center space-x-2">
                <IosToggle />
                <span className="text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 sm:py-3.5 rounded-lg transition duration-200 text-sm sm:text-base"
            >
              Sign in
            </button>

            {/* Footer */}
            <div className="mt-16 sm:mt-24 lg:mt-32 text-center text-sm text-gray-600">
              © faasobees 2025
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

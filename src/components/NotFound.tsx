import { Link } from "react-router";

export default function NotFoundPage() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
      <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-200">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2 mb-6">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}

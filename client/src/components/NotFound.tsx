function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-teal-900">404</h1>
        <p className="mt-4 mb-8 text-2xl font-medium">Page not found</p>
        <a
          href="/"
          className="rounded-md bg-teal-500 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-teal-600"
        >
          Go back to the homepage
        </a>
      </div>
    </div>
  );
}

export default NotFound;

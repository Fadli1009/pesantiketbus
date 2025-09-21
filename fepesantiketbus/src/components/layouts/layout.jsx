import Navbar from "./navbar";

const Layouts = ({ children }) => {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-gradient-to-b from-blue-50 to-gray-50 text-gray-800">
      {/* Navbar fixed */}
      <Navbar className="fixed top-0 left-0 w-full z-50 shadow-md bg-white/90 backdrop-blur-sm" />

      {/* Konten */}
      <main className="flex-1 w-full pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layouts;

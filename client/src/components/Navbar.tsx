function Navbar() {
  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-teal-500">Expy</h1>
      <ul className="p-4">Dashboard</ul>
      <ul className="p-4">Records</ul>
      <ul className="p-4">Logout</ul>
    </div>
  );
}

export default Navbar;

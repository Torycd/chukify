function Navbar() {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">Chunkify</h1>
      <ul className="flex justify-between text-xl gap-10 font-semibold">
        <li>Home</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;

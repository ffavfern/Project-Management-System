

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="text-xl font-bold">Welcome Admin!</div>
      <div className="flex items-center">
        <input type="text" placeholder="Search here..." className="border rounded p-2 mr-4" />
        <div className="flex items-center">
          <div className="mr-4">Lucas Pacheco</div>
          <img src="/path/to/avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;

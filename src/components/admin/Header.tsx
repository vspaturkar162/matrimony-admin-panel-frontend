interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
      <h1 className="text-xl font-bold text-gray-800 font-display">{title}</h1>
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search profiles, users..."
            className="pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 focus:bg-white transition-all w-56"
          />
        </div>

        {/* Notification bell */}
        <button className="relative p-2 rounded-xl hover:bg-gray-50 text-gray-500 hover:text-rose-500 transition-colors">
          <span className="text-lg">🔔</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-pink-400 flex items-center justify-center text-white font-bold text-sm shadow cursor-pointer">
          A
        </div>
      </div>
    </header>
  );
}
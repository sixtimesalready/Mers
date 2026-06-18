export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <header className="h-16 border-b flex items-center px-6 justify-between">
        <h2 className="font-bold">MERS User Portal</h2>
        <div className="w-8 h-8 rounded-full bg-zinc-200"></div>
      </header>
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}

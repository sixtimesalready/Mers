export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
      <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 p-6">
        <h2 className="text-xl font-bold mb-8">MERS Admin</h2>
        <nav className="space-y-4">
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3"></div>
        </nav>
      </aside>
      <main className="pl-64 p-8">
        {children}
      </main>
    </div>
  );
}

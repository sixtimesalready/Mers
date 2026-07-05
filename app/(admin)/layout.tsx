export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
			<aside className="fixed top-0 left-0 h-full w-64 border-r border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800">
				<h2 className="mb-8 text-xl font-bold">MERS Admin</h2>
				<nav className="space-y-4">
					<div className="h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-700"></div>
					<div className="h-4 w-1/2 rounded bg-zinc-200 dark:bg-zinc-700"></div>
					<div className="h-4 w-2/3 rounded bg-zinc-200 dark:bg-zinc-700"></div>
				</nav>
			</aside>
			<main className="p-8 pl-64">{children}</main>
		</div>
	)
}

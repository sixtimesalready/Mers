export default function UserLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-white">
			<header className="flex h-16 items-center justify-between border-b px-6">
				<h2 className="font-bold">MERS User Portal</h2>
				<div className="h-8 w-8 rounded-full bg-zinc-200"></div>
			</header>
			<main className="p-6">{children}</main>
		</div>
	)
}

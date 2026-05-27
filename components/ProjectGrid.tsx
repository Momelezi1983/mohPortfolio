export default function ProjectGrid({ projects }: { projects: any[] }) {
  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="p-6 border rounded-xl hover:shadow-xl transition shadow-md">
            <div className="w-16 h-16 bg-slate-200 rounded-lg mb-4"></div> {/* Logo Placeholder */}
            <h3 className="font-bold text-xl">{p.title}</h3>
            <p className="text-slate-600 text-sm mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProjectGrid({ projects }: { projects: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <a 
          key={project.id} 
          href={`/projects/${project.id}`} 
          className="block border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-5">
            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
            <p className="text-gray-600 line-clamp-3">{project.description}</p>
            <span className="text-blue-500 mt-4 block font-medium">View Details →</span>
          </div>
        </a>
      ))}
    </div>
  );
}

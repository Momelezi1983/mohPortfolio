import { supabase } from '../../lib/supabase';

export default async function ProjectsPage() {
  const { data: projects } = await supabase.from('projects').select('*');

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-10">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project) => (
          <div key={project.id} className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a 
              href={`/projects/${project.id}`} 
              className="text-blue-600 font-semibold hover:underline"
            >
              View Project Details →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


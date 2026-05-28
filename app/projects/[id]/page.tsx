import { supabase } from '../../../lib/supabase';

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (!project) return <div>Project not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
    </div>
  );
}

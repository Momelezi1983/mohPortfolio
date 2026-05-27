import { supabase } from '../lib/supabase';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';

export default async function Home() {
  const { data: projects } = await supabase.from('projects').select('*');

  return (
    <main>
      <Hero />
      <ProjectGrid projects={projects || []} />
    </main>
  );
}

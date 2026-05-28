export default function Goals() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">My Goals</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Short-Term</h2>
          <p className="text-gray-700">Mastering Next.js features and improving UI/UX design skills.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Long-Term</h2>
          <p className="text-gray-700">Building scalable applications and contributing to open-source software.</p>
        </section>
      </div>
    </div>
  );
}

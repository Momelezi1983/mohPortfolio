export default function Hobbies() {
  const hobbies = [
    { title: "Coding", description: "Building full-stack applications and learning new frameworks." },
    { title: "Reading", description: "Exploring technical documentation and sci-fi novels." },
    { title: "Gaming", description: "Analyzing game mechanics and competitive play." }
  ];

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">My Hobbies</h1>
      <div className="grid gap-6">
        {hobbies.map((hobby, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{hobby.title}</h2>
            <p className="text-gray-700">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

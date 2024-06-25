export function AccueilProjet({ image, name, technologies, summary }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white transform transition transform duration-300 hover:scale-105 m-8">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{summary}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

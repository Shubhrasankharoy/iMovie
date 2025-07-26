



const ShineCard = ({ heading, points }) => {
  return (
    <div className="relative group w-80 p-6 bg-white dark:bg-black/40 text-black dark:text-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02]">
      {/* Shine effect */}
      <div className="absolute inset-0 w-[640] z-0 before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-white/30 before:to-transparent dark:before:via-white/5 before:rotate-45 before:-translate-x-full before:transition-transform before:duration-700 group-hover:before:opacity-100 before:opacity-0 group-hover:before:translate-x-full" />

      {/* Card content */}
      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-4">{heading}</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShineCard;

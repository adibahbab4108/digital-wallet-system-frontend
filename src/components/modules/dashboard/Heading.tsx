export default function Heading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="w-full text-center mb-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-base md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
    </div>
  );
}

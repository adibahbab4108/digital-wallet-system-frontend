export default function SectionHeader({header}:{header:string}) {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
        {header}
      </h1>
    </div>
  );
}

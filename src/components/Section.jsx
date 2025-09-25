export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">{title}</h2>}
        {children}
      </div>
    </section>
  );
}


export default function Hero() {
  return (
    <section id="home" className="min-h-[60vh] grid place-items-center text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Po Tsun (Tom) Yu
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-blue-600">
          Student
        </p>
        <a href="#contact" className="inline-block mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:opacity-90">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
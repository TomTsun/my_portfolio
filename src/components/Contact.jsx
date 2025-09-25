import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-gray-700">
          I’m open to collaborations and 2026 summer internship opportunities. Feel free to reach out!
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a className="px-4 py-2 rounded-xl border hover:bg-gray-50" href="mailto:juichom0924@gmail.com">Email</a>
          <a className="px-4 py-2 rounded-xl border hover:bg-gray-50" href="https://github.com/TomTsun" target="_blank">GitHub</a>
          <a className="px-4 py-2 rounded-xl border hover:bg-gray-50" href="https://www.linkedin.com/in/yupotsun/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </Section>
  );
}

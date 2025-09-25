import Section from "./Section";

const posts = [
  {
    title: "Welcome to Your New Blog",
    date: "June 30, 2024",
    excerpt: "Here’s to many more stories, insights, and adventures."
  }
];

export default function BlogPreview() {
  return (
    <Section id="blog" title="From The Blog">
      <div className="max-w-3xl mx-auto">
        {posts.map((p, i) => (
          <article key={i} className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <div className="text-sm text-gray-500">{p.date}</div>
            <p className="mt-2 text-gray-700">{p.excerpt}</p>
            <a href="#" className="inline-block mt-4 text-blue-600">Read more →</a>
          </article>
        ))}
        <div className="text-center mt-6">
          <a href="#" className="text-blue-600">View all posts</a>
        </div>
      </div>
    </Section>
  );
}

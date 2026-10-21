const services = [
  {
    title: "SEO",
    description:
      "Technical SEO, Local SEO, Enterprise SEO, AI SEO, AEO, GEO and LLMO.",
  },
  {
    title: "AI Search",
    description:
      "AI Visibility, AI Search Audits, AI Agent Optimization and Prompt Engineering.",
  },
  {
    title: "Data Science",
    description:
      "Data Analytics, BI, Predictive Analytics, Customer Analytics and Marketing Analytics.",
  },
  {
    title: "AI Engineering",
    description:
      "RAG, AI Chatbots, AI Agents, Knowledge Bases and AI solutions.",
  },
  {
    title: "Automation",
    description:
      "SEO, Marketing and Workflow Automation designed for scalable growth.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold">
            Aankiya
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Let's Talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-500">
            AI • SEO • Data • Automation
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Build Visibility.
            <br />
            Build Intelligence.
            <br />
            Build Growth.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            Aankiya combines SEO, AI Search, Data Science, AI Engineering
            and Automation to build scalable digital growth systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            What We Do
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Five growth divisions.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-block font-medium underline"
                >
                  Explore →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            About Aankiya
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            From search visibility to intelligent growth.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Aankiya brings together search intelligence, artificial
            intelligence, data and automation into one connected growth
            ecosystem.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold">
            Ready to build something smarter?
          </h2>

          <p className="mt-4 max-w-2xl text-gray-300">
            Let's discuss your SEO, AI Search, Data or Automation
            requirements.
          </p>

          <a
            href="mailto:hello@aankiya.com"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-medium text-black"
          >
            Contact Aankiya
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black px-6 py-8 text-gray-400">
        <div className="mx-auto max-w-7xl">
          © {new Date().getFullYear()} Aankiya. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
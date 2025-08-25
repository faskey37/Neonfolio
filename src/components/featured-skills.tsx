const skills = [
  {
    name: "JavaScript",
    description: "Building interactive web applications and dynamic user experiences.",
    icon: "fab fa-js",
    progress: 85,
  },
  {
    name: "React",
    description: "Creating modern, fast, and scalable user interfaces.",
    icon: "fab fa-react",
    progress: 80,
  },
  {
    name: "Firebase",
    description: "Implementing real-time databases and authentication systems.",
    icon: "fas fa-database",
    progress: 75,
  },
  {
    name: "Java",
    description: "Building robust and scalable backend applications.",
    icon: "fab fa-java",
    progress: 70,
  },
];

export function FeaturedSkills() {
  return (
    <section id="featured-skills" className="py-24 sm:py-32 bg-card/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Featured <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Technologies I work with daily to build modern applications.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-card p-6 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
              <div className="text-4xl mb-4 text-gradient">
                <i className={skill.icon}></i>
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">{skill.name}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{skill.description}</p>
              <div className="w-full bg-primary/10 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full" style={{width: `${skill.progress}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

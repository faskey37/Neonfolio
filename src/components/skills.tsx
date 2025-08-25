
const skillCategories = [
  {
    title: "Frontend Development",
    icon: "fas fa-laptop-code",
    skills: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Bootstrap", level: 88 },
      { name: "Tailwind", level: 80 },
      { name: "Responsive Design", level: 92 },
    ],
  },
  {
    title: "Backend Development",
    icon: "fas fa-server",
    skills: [
        { name: "Java", level: 70 },
        { name: "Firebase", level: 85 },
        { name: "MySQL", level: 78 },
        { name: "PostgreSQL", level: 75 },
        { name: "Basic APIs", level: 85 },
    ],
  },
  {
    title: "Other Skills",
    icon: "fas fa-tools",
    skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Wix", level: 65 },
        { name: "SQL Server", level: 75 },
        { name: "UI/UX Design", level: 80 },
    ],
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute text-primary/10 text-7xl font-mono font-bold top-10 left-10 animate-[float_10s_ease-in-out_infinite]">&#123;...&#125;</div>
          <div className="absolute text-secondary/10 text-6xl font-mono font-bold bottom-10 right-10 animate-[float-alt_8s_ease-in-out_infinite]">[Array]</div>
          <div className="absolute text-accent/10 text-5xl font-mono font-bold top-1/2 right-1/4 animate-[float_7s_ease-in-out_infinite]">=></div>
           <div className="absolute text-primary/5 text-8xl font-mono font-bold bottom-1/4 left-1/5 animate-[float-alt_11s_ease-in-out_infinite]">&lt;div&gt;</div>
          <div className="absolute text-secondary/5 text-4xl font-mono font-bold top-1/3 right-1/5 animate-[float_9s_ease-in-out_infinite]">.map()</div>
      </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                    My Technical <span className="text-gradient">Toolbelt</span>
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                    A snapshot of the primary technologies and tools I use to bring ideas to life, from frontend design to backend implementation.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
                <div key={category.title} className="bg-card p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
                    <h3 className="text-xl font-bold font-headline mb-6 flex items-center gap-3">
                        <i className={`${category.icon} text-2xl text-gradient`}></i>
                        {category.title}
                    </h3>
                    <ul className="space-y-4">
                        {category.skills.map(skill => (
                            <li key={skill.name}>
                                <span className="font-medium text-muted-foreground">{skill.name}</span>
                                <div className="w-full bg-primary/10 rounded-full h-2.5 mt-1">
                                    <div className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full" style={{width: `${skill.level}%`}}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

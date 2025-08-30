
const timelineData = [
  {
    date: "2025 - Present",
    title: "Founder & Developer",
    company: "SphereX Technologies",
    icon: "fas fa-building",
    description: "As the founder of SphereX, I lead the development of modern web solutions for a diverse range of clients. My role involves full-stack project management from initial concept to final deployment, utilizing a tech stack that includes Firebase, MySQL, and Tailwind CSS. I am passionate about crafting applications that deliver real-world impact and continuously seek to enhance our services through ongoing learning and experimentation.",
    tags: ["Firebase", "JavaScript", "Tailwind CSS", "MySQL", "Git"],
  },
  {
    date: "2021 - 2023",
    title: "Freelance Web Developer",
    company: "Self-Learning & Personal Projects",
    icon: "fas fa-briefcase",
    description: "During this time, I immersed myself in the world of web development, building and deploying a variety of personal projects. I honed my skills in HTML, CSS, and JavaScript, creating responsive and interactive web pages with Bootstrap and Tailwind CSS. I also explored backend technologies like Firebase and SQL, integrating basic APIs and experimenting with form handling and database storage.",
    tags: ["HTML/CSS", "JavaScript", "Bootstrap", "Firebase", "APIs"],
  },
  {
    date: "2020 - 2021",
    title: "Frontend Developer (Learner)",
    company: "Personal Projects & Practice",
    icon: "fas fa-laptop-code",
    description: "This period was dedicated to mastering the fundamentals of frontend development. I created responsive user interfaces using HTML5, CSS3, and JavaScript, with a strong focus on accessibility and clean, user-centric layouts. Through self-initiated projects, I built a solid understanding of frontend architecture and modern web standards.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    date: "2019 - 2020",
    title: "Junior Web Developer (Learner)",
    company: "Freelance Projects & Practice",
    icon: "fas fa-code",
    description: "My journey began by contributing to small-scale personal and academic projects where I built static websites. This hands-on experience gave me a practical understanding of HTML, CSS, and basic JavaScript, and ignited my passion for exploring the world of modern web development through tutorials and self-paced learning.",
    tags: ["HTML", "CSS", "JavaScript"],
  }
]

export function Timeline() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-card/40">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            My Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 -ml-px w-0.5 h-full bg-border/40"></div>
          {timelineData.map((item, index) => (
            <div key={item.title} className="relative pl-8 md:pl-0 mb-12 group">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className={index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}>
                    <div className="bg-card p-6 rounded-lg shadow-lg border border-border/20 transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1 group-hover:scale-105">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-full mb-2">{item.date}</span>
                      <h3 className="text-xl font-bold font-headline mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex items-center gap-2 justify-start md:justify-end md:text-right">
                         {item.company} <i className={`${item.icon}`}></i>
                      </p>
                      <p className="text-muted-foreground">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4 justify-start md:justify-end">
                        {item.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">{tag}</span>
                        ))}
                      </div>
                    </div>
                </div>
              </div>
              <div className="absolute top-1 left-[7px] md:left-1/2 -ml-2.5 w-5 h-5 bg-background border-2 border-primary rounded-full transition-transform duration-300 group-hover:scale-125"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

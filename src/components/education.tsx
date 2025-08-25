const educationData = [
  {
    date: '2025 - Present',
    title: "Bachelor's in Computer Science",
    institution: 'Anjuman College of Engineering and Technology, Nagpur',
    description: 'Pursuing my degree with a focus on core computer science concepts, including software development, data structures, algorithms, and web technologies. This program is providing me with the foundational knowledge to build complex and scalable applications.',
  },
  {
    date: '2022 - 2024',
    title: 'Higher Secondary Education',
    institution: 'St. Paul School, Nagpur',
    description: 'Completed my higher secondary education in the Science stream, which gave me a strong analytical and problem-solving foundation. This experience was crucial in preparing me for the technical challenges of my engineering degree.',
  },
  {
    date: '2012 - 2022',
    title: 'Secondary Education',
    institution: 'St. Vincent Pallotti School, Nagpur',
    description: 'Built a strong academic foundation with a focus on Mathematics and Science, which ignited my passion for logical thinking and technology. It was here that I first discovered my interest in how things work, setting me on my path toward a career in tech.',
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            My Academic <span className="text-gradient">Journey</span>
          </h2>
        </div>
        <div className="space-y-12">
          {educationData.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-8 items-start group">
              <div className="w-full sm:w-1/4 text-left sm:text-right">
                <p className="text-primary font-semibold transition-transform duration-300 group-hover:scale-105">{item.date}</p>
              </div>
              <div className="relative w-full sm:w-3/4 pl-8 sm:pl-10">
                <div className="absolute left-0 top-1 h-full w-0.5 bg-border transition-all duration-300 group-hover:bg-primary"></div>
                <div className="absolute left-[-9px] top-1 w-5 h-5 bg-background border-2 border-primary rounded-full transition-transform duration-300 group-hover:scale-125"></div>
                <div className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-105">
                  <h3 className="text-xl font-bold font-headline mb-1">{item.title}</h3>
                  <p className="text-muted-foreground font-medium mb-2">{item.institution}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

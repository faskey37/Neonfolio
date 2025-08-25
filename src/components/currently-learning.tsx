const learningItems = [
  { icon: 'fab fa-react', title: 'React Native', description: 'Building cross-platform mobile apps' },
  { icon: 'fab fa-node-js', title: 'Node.js', description: 'Developing server-side applications' },
  { icon: 'fas fa-robot', title: 'Machine Learning', description: 'Exploring AI fundamentals with Python' },
  { icon: 'fas fa-chart-line', title: 'Data Science', description: 'Exploring data analysis and visualization' },
];

export function CurrentlyLearning() {
  return (
    <section id="learning" className="py-24 sm:py-32 bg-card/40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Currently <span className="text-gradient">Learning</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Technologies and skills I'm actively expanding my knowledge in.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {learningItems.map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4 text-gradient">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

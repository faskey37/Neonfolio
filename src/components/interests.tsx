const interestItems = [
  { icon: 'fas fa-robot', title: 'Tech & Iron Man', description: "Fascinated by cutting-edge technology and Tony Stark's innovations in the Marvel universe" },
  { icon: 'fas fa-microchip', title: 'Electronics', description: 'Tinkering with circuits, Arduino projects, and understanding how devices work' },
  { icon: 'fas fa-car', title: 'Automobiles', description: 'Passionate about car technology, especially electric vehicles and futuristic designs' },
  { icon: 'fas fa-plane', title: 'Travel', description: 'Exploring new places, cultures, and capturing memories through photography' },
  { icon: 'fas fa-film', title: 'Sci-Fi Movies', description: 'Love watching tech-focused films especially Marvel, Interstellar, and cyberpunk genres' },
  { icon: 'fas fa-paint-brush', title: 'Tech Arts', description: 'Creating digital art and designs that blend technology with aesthetics' },
];

export function Interests() {
  return (
    <section id="interests" className="py-24 sm:py-32 bg-card/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            My <span className="text-gradient">Interests</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Beyond coding - things that inspire and motivate me.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {interestItems.map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:-translate-y-2 group">
              <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
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

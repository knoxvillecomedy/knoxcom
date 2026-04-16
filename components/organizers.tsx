import Image from "next/image"

export function Organizers() {
  const organizers = [
    {
      name: "Tiny Stage Comedy",
      description: "A Knoxville-based collective that produces inclusive, community-driven comedy shows to bring people together through laughter.",
      logo: "/logos/tiny-stage-comedy.png",
      url: "https://instagram.com/tinystagecomedy",
      badge: "Est. 2020",
    },
    {
      name: "Yellow Door Media",
      description: "YDM produces and promotes local standup and variety shows. Their mission is to create a locally-centered performing arts culture in Knoxville, TN.",
      logo: "/logos/yellow-door-media.png",
      url: "https://instagram.com/yellowdoormediatn",
    },
    {
      name: "Ivan Harper Photo",
      description: "Live event photography and show production since 2021. Creator of Comedy Deception: Knoxville's Degenerate Game Show.",
      logo: "/logos/knoxville-comedy.png",
      url: "https://www.instagram.com/ivanharperphoto/",
    },
  ]

  return (
    <section id="organizers" className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who&apos;s Behind This?
          </h2>
          <p className="text-lg text-muted-foreground">
            The Hoot is brought to you by three local crews who love comedy and community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {organizers.map((org) => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all group relative"
              title={`Visit ${org.name} (opens in new tab)`}
            >
              <div className="h-24 flex items-center justify-center mb-4">
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={140}
                  height={96}
                  className="object-contain max-h-24 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2 flex items-center justify-center gap-2 flex-wrap">
                {org.name}
                {org.badge && (
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded-full">
                    {org.badge}
                  </span>
                )}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {org.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

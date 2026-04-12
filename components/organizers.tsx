import Image from "next/image"

export function Organizers() {
  const organizers = [
    {
      name: "Tiny Stage Comedy",
      description: "Bringing stand-up to unexpected places across East Tennessee.",
      logo: "/logos/tiny-stage-comedy.png",
      url: "https://tinystagecomedy.com",
    },
    {
      name: "Yellow Door Media",
      description: "Creative production and event marketing for local culture.",
      logo: "/logos/yellow-door-media.png",
      url: "https://yellowdoormedia.com",
    },
  ]

  return (
    <section id="organizers" className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who&apos;s Behind This?
          </h2>
          <p className="text-lg text-muted-foreground">
            The Hoot is brought to you by two local crews who love comedy and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {organizers.map((org) => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all group"
              title={`Visit ${org.name} (opens in new tab)`}
            >
              <div className="h-28 flex items-center justify-center mb-5">
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={160}
                  height={112}
                  className="object-contain max-h-28 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {org.name}
              </h3>
              <p className="text-muted-foreground">
                {org.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

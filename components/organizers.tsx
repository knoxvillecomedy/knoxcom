export function Organizers() {
  const organizers = [
    {
      name: "Tiny Stage Comedy",
      description: "Bringing stand-up to unexpected places across East Tennessee."
    },
    {
      name: "Yellow Door Media",
      description: "Creative production and event marketing for local culture."
    }
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
            <div 
              key={org.name}
              className="bg-card rounded-xl p-8 border border-border text-center"
            >
              {/* Logo placeholder */}
              <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-5 flex items-center justify-center border border-border">
                <span className="text-xs text-muted-foreground">Logo</span>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {org.name}
              </h3>
              <p className="text-muted-foreground">
                {org.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { CalendarDays, Clock, Sparkles, MapPin } from "lucide-react"

type Event = {
  title: string
  doors: string
}

type Day = {
  label: string
  date: string
  events: Event[]
}

const schedule: Day[] = [
  {
    label: "Friday",
    date: "July 17",
    events: [
      { title: "Tiny Stage Showcase", doors: "Doors @ 6:30" },
      { title: "Yellow Door Media Presents: New Faces of Knox Comedy", doors: "Doors @ 8:30" },
    ],
  },
  {
    label: "Saturday",
    date: "July 18",
    events: [
      { title: "Brunch Show!", doors: "Doors @ 11" },
      { title: "Comedy Debate League", doors: "Doors @ 1" },
      { title: "Improv vs. Standup", doors: "Doors @ 4" },
      { title: "Deception Show", doors: "Doors @ 6" },
      { title: "The Final Hoot!", doors: "Doors @ 8" },
    ],
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="py-12 md:py-20 px-4 bg-primary relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] w-32 h-32 rounded-full bg-accent/20 blur-2xl animate-pulse-soft" />
        <div
          className="absolute bottom-10 right-[15%] w-40 h-40 rounded-full bg-chart-2/15 blur-2xl animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        />

        <Clock className="absolute top-16 right-[12%] w-8 h-8 text-primary-foreground/20 animate-float" />
        <Sparkles className="absolute bottom-20 left-[10%] w-7 h-7 text-accent/40 animate-wiggle" />
        <CalendarDays className="absolute top-1/3 left-[8%] w-6 h-6 text-primary-foreground/15 animate-float-delay" />
        <div className="absolute bottom-[30%] right-[8%] w-12 h-12 rounded-full border-2 border-primary-foreground/10 animate-float-slow" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 animate-float">
            <CalendarDays className="w-7 h-7 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Schedule</h2>

          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Two days of stand-up, specialty shows, and surprise guests at The Hoot in the Holler.
          </p>

          <p className="text-sm text-primary-foreground/70 mt-3">
            Presented by Tiny Stage Comedy and Yellow Door Media
          </p>
        </div>

        {/* Day cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {schedule.map((day) => (
            <div
              key={day.date}
              className="bg-primary-foreground/10 rounded-2xl p-6 md:p-8 border border-primary-foreground/20 shadow-inner"
            >
              <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-primary-foreground/20">
                <h3 className="text-2xl font-bold text-primary-foreground">{day.label}</h3>
                <span className="text-sm font-medium uppercase tracking-wider text-accent">{day.date}</span>
              </div>

              <ul className="space-y-4">
                {day.events.map((event) => (
                  <li
                    key={event.title}
                    className="flex items-start justify-between gap-4 group"
                  >
                    <span className="text-primary-foreground font-medium leading-snug group-hover:translate-x-1 transition-transform duration-200">
                      {event.title}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-primary-foreground/70 whitespace-nowrap flex-shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      {event.doors}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Venue footer */}
        <p className="text-center text-primary-foreground/80 mt-8 flex items-center justify-center gap-2 font-medium">
          <MapPin className="w-4 h-4" />
          All events held at Central Cinema
        </p>
      </div>
    </section>
  )
}

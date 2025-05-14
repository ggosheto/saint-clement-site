import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-stone-200"></div>

      <div className="space-y-16">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } md:flex-row-reverse md:even:flex-row`}
          >
            {/* Year circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 border-4 border-amber-200 flex items-center justify-center z-10">
                <span className={`${playfair.variable} font-serif font-bold text-stone-800`}>{event.year}</span>
              </div>
            </div>

            {/* Content */}
            <div
              className={`w-5/12 md:w-5/12 ${
                index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
              } md:pl-0 md:pr-8 md:text-right md:even:pr-0 md:even:pl-8 md:even:text-left`}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className={`${playfair.variable} font-serif text-xl font-semibold text-stone-800 mb-2`}>
                  {event.title}
                </h3>
                <p className="text-stone-600">{event.description}</p>
              </div>
            </div>

            {/* Empty space for the other side */}
            <div className="w-5/12 md:w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import { ChevronDown } from "lucide-react"
// import { Timeline } from "@/components/timeline"
import { Timeline } from "../components/timeline"
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="sticky top-0 z-10 bg-stone-50/80 backdrop-blur-sm border-b border-stone-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className={`${playfair.variable} font-serif text-2xl font-bold text-stone-800`}>
            Saint Clement of Ohrid
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#biography" className="text-stone-600 hover:text-stone-900">
                  Biography
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-stone-600 hover:text-stone-900">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-stone-600 hover:text-stone-900">
                  Timeline
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Historical illustration related to Saint Clement of Ohrid"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto px-4 z-10 text-center">
            <h2
              className={`${playfair.variable} font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 mb-6`}
            >
              Свети Климент Охридски
            </h2>
            <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto">
              Scholar, Writer, and First Bishop of the Bulgarian Orthodox Church
              <span className="block mt-2 text-lg">840 – 916 CE</span>
            </p>
            <a
              href="#biography"
              className="inline-flex items-center mt-8 text-stone-600 hover:text-stone-900"
              aria-label="Scroll to biography section"
            >
              <span className="mr-2">Discover His Legacy</span>
              <ChevronDown className="animate-bounce" />
            </a>
          </div>
        </section>

        {/* Biography Section */}
        <section id="biography" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.variable} font-serif text-4xl font-bold text-stone-800 mb-12 text-center`}>
              Biography
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Portrait or icon of Saint Clement of Ohrid"
                  width={600}
                  height={800}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-stone-700">
                  Saint Clement of Ohrid was a medieval Bulgarian saint, scholar, writer, and enlightener. He was the
                  most prominent disciple of Saints Cyril and Methodius and is often associated with the creation of the
                  Cyrillic script. He was also the founder of the Ohrid Literary School.
                </p>
                <p className="text-lg text-stone-700">
                  Born around 840 CE, Clement was of Bulgarian origin and became one of the leading figures in the
                  Christianization of Bulgaria during the First Bulgarian Empire under Tsar Boris I and his son Tsar
                  Simeon the Great.
                </p>
                <p className="text-lg text-stone-700">
                  After the death of Methodius, Clement headed the struggle against the German clergy in Great Moravia.
                  After being expelled from Great Moravia, Clement was sent by Boris I to the southwestern region of the
                  Bulgarian Empire, where he taught and served as a bishop.
                </p>
                <p className="text-lg text-stone-700">
                  He died on July 27, 916, in Ohrid, in what is now North Macedonia. Today, Saint Clement is venerated
                  as a patron saint in both Bulgaria and North Macedonia, and his feast day is celebrated on July 27 in
                  the Orthodox Church.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 bg-stone-100">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.variable} font-serif text-4xl font-bold text-stone-800 mb-12 text-center`}>
              Key Achievements & Contributions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
                <h3 className={`${playfair.variable} font-serif text-2xl font-semibold text-stone-800 mb-4`}>
                  Literary Work
                </h3>
                <p className="text-stone-700">
                  Saint Clement is credited with writing original works and translating important religious texts. He
                  composed numerous sermons, hymns, and hagiographies, significantly contributing to early Slavic
                  literature.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
                <h3 className={`${playfair.variable} font-serif text-2xl font-semibold text-stone-800 mb-4`}>
                  Educational Legacy
                </h3>
                <p className="text-stone-700">
                  He established the Ohrid Literary School, one of the first medieval Slavic universities. Under his
                  guidance, the school educated over 3,500 students, spreading literacy and Christian education
                  throughout the Bulgarian Empire.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
                <h3 className={`${playfair.variable} font-serif text-2xl font-semibold text-stone-800 mb-4`}>
                  Alphabet Development
                </h3>
                <p className="text-stone-700">
                  While his exact role is debated, Saint Clement is often associated with the development and spread of
                  the Cyrillic alphabet, which revolutionized written communication in Slavic lands and remains in use
                  today.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
                <h3 className={`${playfair.variable} font-serif text-2xl font-semibold text-stone-800 mb-4`}>
                  Religious Leadership
                </h3>
                <p className="text-stone-700">
                  As the first bishop of the Bulgarian Orthodox Church who used the Slavonic language, he played a
                  crucial role in establishing Christianity in Bulgaria and making religious texts accessible to
                  ordinary people.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
                <h3 className={`${playfair.variable} font-serif text-2xl font-semibold text-stone-800 mb-4`}>
                  Architectural Influence
                </h3>
                <p className="text-stone-700">
                  Saint Clement is credited with designing the Ohrid Church and monastery complex, which became an
                  important center of Slavic culture, education, and spirituality in the Balkans.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
                <h3 className={`${playfair.variable} font-serif text-2xl font-semibold text-stone-800 mb-4`}>
                  Cultural Preservation
                </h3>
                <p className="text-stone-700">
                  Through his work and teachings, he helped preserve and develop Slavic culture during a time when it
                  was under threat from Byzantine and Germanic influences, ensuring its survival and flourishing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={`${playfair.variable} font-serif text-4xl font-bold text-stone-800 mb-12 text-center`}>
              Life Timeline
            </h2>
            <Timeline
              events={[
                {
                  year: "840",
                  title: "Birth",
                  description:
                    "Born in the southwestern part of the Bulgarian Empire (likely in the region of Macedonia).",
                },
                {
                  year: "860",
                  title: "Meeting Cyril and Methodius",
                  description:
                    "Became a disciple of Saints Cyril and Methodius and joined their mission to spread Christianity among the Slavs.",
                },
                {
                  year: "885",
                  title: "Arrival in Bulgaria",
                  description:
                    "After Methodius's death, Clement and other disciples were expelled from Great Moravia and welcomed in Bulgaria by Prince Boris I.",
                },
                {
                  year: "893",
                  title: "Appointed as Bishop",
                  description:
                    "Became the first bishop who used the Slavonic language in the Bulgarian Orthodox Church, appointed by Tsar Simeon the Great.",
                },
                {
                  year: "916",
                  title: "Death",
                  description:
                    "Died on July 27 in Ohrid, leaving behind a significant educational and literary legacy.",
                },
              ]}
            />
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 bg-stone-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <blockquote className="max-w-4xl mx-auto">
              <p className={`${playfair.variable} font-serif text-3xl italic mb-6`}>
                &quot;Literacy is a path to spiritual enlightenment and the foundation of cultural identity.&quot;
              </p>
              <cite className="text-stone-300">— Attributed to Saint Clement of Ohrid</cite>
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`${playfair.variable} font-serif text-xl font-semibold text-white mb-4`}>
                About This Project
              </h3>
              <p>
                This educational website aims to share the legacy of Saint Clement of Ohrid, one of the most important
                figures in Slavic cultural and religious history.
              </p>
            </div>
            <div>
              <h3 className={`${playfair.variable} font-serif text-xl font-semibold text-white mb-4`}>
                Further Reading
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    The Ohrid Literary School
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Development of the Cyrillic Script
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Early Bulgarian Orthodox Church
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Medieval Slavic Education
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Saint Clement of Ohrid Educational Project</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

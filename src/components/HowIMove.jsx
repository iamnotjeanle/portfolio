import { Search, Flame, Users, Waves } from 'lucide-react'
import GlowSection from './GlowSection'

const PRINCIPLES = [
  {
    icon: Search,
    title: 'Applied Obsession',
    body: 'Curiosity is passive, so I lead my research with obsession. I dissect a product or service from every angle until that deep dive turns into practical clarity that finds buyers and makes believers.',
  },
  {
    icon: Flame,
    title: 'Stamina Takes Us Far',
    body: 'Rather than short-term attention, I believe in creating enduring message that stays in the room long enough to shift minds and earn trust.',
  },
  {
    icon: Users,
    title: 'Results or Process? I Choose People',
    body: 'Taking care of the community I speak to and the team beside me is what drives me forward',
  },
  {
    icon: Waves,
    title: '"It\'s Fine, We\'ll Make It Work"',
    body: 'Curveballs and unexpected turnarounds are part of the craft. I treat pressure like an old friend and consistently find a way through.',
  },
]

function HowIMove() {
  return (
    <GlowSection id="how-i-move" className="scroll-mt-20">
      <h2 className="px-6 pt-16 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:px-12 md:pt-20 md:text-6xl lg:px-16">
        How I Move
      </h2>

      <div className="px-6 pb-16 pt-10 sm:pb-20 sm:pt-12 md:px-12 md:pb-24 md:pt-14 lg:px-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm sm:p-10"
            >
              <principle.icon className="mb-5 h-6 w-6 text-white/70" strokeWidth={1.75} />
              <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl">
                {principle.title}
              </h3>
              <p className="text-lg leading-relaxed font-light text-white sm:text-xl">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </GlowSection>
  )
}

export default HowIMove

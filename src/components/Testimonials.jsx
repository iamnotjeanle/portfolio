import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import GlowSection from './GlowSection'

const TESTIMONIALS = [
  {
    quote:
      'Jean’s dedication and work ethic were evident in every aspect of the project—from managing the content calendar to capturing high‑quality, on‑site content.',
    name: 'Stephanie Duong',
    role: 'PR Lead · 25th Newport Beach Film Festival (Chinese Spotlight)',
  },
  {
    quote:
      'Jean’s social media savvy and attention to detail helped an event I was hosting gain exposure and create clear messaging. In the 2 week campaign she did for me, we received 5x the traffic, making the event a massive hit!',
    name: 'Holly Schwartz',
    role: 'Event Organizer · 2024 Aloha Summer Event',
  },
  {
    quote:
      'Jean consistently demonstrated exceptional leadership, taking on challenging tasks without hesitation and always delivering high‑quality work.',
    name: 'Brian Tran',
    role: 'Student · 2025 Influencer & Brand Loyalty Research Project',
  },
]

const SWIPE_THRESHOLD = 50

function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const dragState = useRef(null)

  const goTo = (i) => setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length)
  const goPrev = () => goTo(index - 1)
  const goNext = () => goTo(index + 1)

  const handlePointerDown = (e) => {
    dragState.current = { startX: e.clientX, dragging: true }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (!dragState.current?.dragging) return
    setDragOffset(e.clientX - dragState.current.startX)
  }

  const endDrag = () => {
    if (!dragState.current?.dragging) return
    if (dragOffset > SWIPE_THRESHOLD) goPrev()
    else if (dragOffset < -SWIPE_THRESHOLD) goNext()
    dragState.current = null
    setDragOffset(0)
  }

  return (
    <GlowSection id="testimonials" className="scroll-mt-20">
      <h2 className="px-6 pt-16 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:px-12 md:pt-20 md:text-6xl lg:px-16">
        What Others Say
      </h2>

      <div className="mx-auto max-w-4xl px-2 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <div
          className="relative select-none overflow-hidden"
          style={{ touchAction: 'pan-y' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(calc(-${index * 100}% + ${dragOffset}px))`,
              transition: dragState.current?.dragging ? 'none' : 'transform 0.4s ease',
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="w-full shrink-0 px-0.5">
                <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/40 px-3 py-6 text-center backdrop-blur-sm sm:p-8">
                  <p className="text-pretty text-base font-medium leading-relaxed text-white sm:text-2xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="mt-6 text-lg font-semibold text-white sm:text-xl">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-base text-white/60 sm:text-lg">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white transition-colors hover:border-white hover:bg-black/60"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((testimonial, i) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white transition-colors hover:border-white hover:bg-black/60"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </GlowSection>
  )
}

export default Testimonials

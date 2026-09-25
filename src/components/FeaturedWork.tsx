import ProjectCarousel from '@/components/ui/project-carousel'
import GlowSection from '@/components/GlowSection'

function FeaturedWork() {
  return (
    <GlowSection id="featured-work" className="scroll-mt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[20vh] bg-gradient-to-b from-black via-black/70 to-transparent" />
      <h2 className="relative pt-16 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:pt-20 md:text-6xl mb-0">
        Featured Work
      </h2>
      <ProjectCarousel />
    </GlowSection>
  )
}

export default FeaturedWork

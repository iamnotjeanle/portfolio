import { ArrowRight } from 'lucide-react'
import FeaturedWork from './components/FeaturedWork'
import Playground from './components/Playground'
import HowIMove from './components/HowIMove'
import Toolkit from './components/Toolkit'
import Testimonials from './components/Testimonials'
import LetsConnect from './components/LetsConnect'
import { ShaderBackground } from './components/ui/shader-background'
import ShinyButton from './components/ui/shiny-button'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4'

function App() {
  return (
    <div className="font-outfit font-light">
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute h-full w-full object-cover"
        style={{ objectPosition: '70% center' }}
        src={VIDEO_URL}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[32vh] bg-gradient-to-t from-black via-black/70 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-8 pt-8 sm:pb-10 sm:pt-12 md:px-12 md:pb-12 md:pt-14 lg:justify-center lg:gap-12 lg:px-16">
        <div>
          <h1
            className="whitespace-nowrap font-bold leading-[1.15] tracking-tight text-white"
            style={{
              fontSize: 'clamp(1.25rem, 3.25vw, 4.25rem)',
              animation: 'fadeSlideUp 0.8s ease 0.2s both',
            }}
          >
            <span className="block">Nothing is new under the sun</span>
            <span className="block">until you change the angle</span>
          </h1>
        </div>

        <div>
          <div
            className="mb-5 space-y-3 text-sm leading-relaxed text-white sm:mb-6 sm:text-base md:text-lg"
            style={{
              maxWidth: 'clamp(20rem, 42vw, 34rem)',
              animation: 'fadeSlideUp 0.8s ease 0.5s both',
            }}
          >
            <p>
              You’re probably here because I sent this link via an application or a
              message. When I see a team doing great work, I don't hold back.{' '}
              <strong className="font-semibold">
                I admire what the team is building, and I want in.
              </strong>
            </p>
            <p>
              I'm <strong className="font-semibold">Jean Le</strong>, a marketer
              with three years of shaping{' '}
              <strong className="font-semibold">
                brand strategy, lifecycle campaigns, and community ecosystems
              </strong>{' '}
              across B2B and B2C. My playbook spans{' '}
              <strong className="font-semibold">
                health-tech, automotive, entertainment, and professional services.
              </strong>{' '}
              I'm currently based in{' '}
              <strong className="font-semibold">Nashville, TN,</strong> and open to
              relocating.
            </p>
            <p>Let's make something people actually want to talk about.</p>
          </div>
          <ShinyButton
            href="#lets-connect"
            style={{ animation: 'fadeSlideUp 0.8s ease 0.7s both' }}
          >
            Connect
            <ArrowRight size={16} />
          </ShinyButton>
        </div>
      </div>
    </div>

      <div className="relative bg-[#03070f]">
        <ShaderBackground className="pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-black/50" />
        <FeaturedWork />
        <Playground />
        <HowIMove />
        <Toolkit />
        <Testimonials />
        <LetsConnect />
      </div>
    </div>
  )
}

export default App

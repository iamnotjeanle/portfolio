import { useEffect, useRef, useState } from 'react'
import { Check, Linkedin, Mail } from 'lucide-react'
import GlowSection from './GlowSection'

const EMAIL = 'jeanleforwork@gmail.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/jean-l-8519871b8/'

const BUTTON_CLASSES =
  'flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-[1.6rem] py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-black/60 hover:shadow-[0_0_45px_10px_rgba(245,158,11,0.35)] sm:px-8 sm:py-[1.2rem] sm:text-lg'

function LetsConnect() {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => () => window.clearTimeout(timeoutRef.current), [])

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2500)
    } catch {
      // Clipboard access unavailable (e.g. permission denied) — nothing to recover to.
    }
  }

  return (
    <GlowSection id="lets-connect" className="scroll-mt-20">
      <h2 className="px-6 pt-16 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:px-12 md:pt-20 md:text-6xl lg:px-16">
        Let's Connect
      </h2>

      <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 sm:flex-row sm:gap-6 sm:py-20 md:py-24">
        <button type="button" onClick={handleEmailClick} className={BUTTON_CLASSES}>
          <Mail className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
          Email
        </button>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={BUTTON_CLASSES}
        >
          <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
          LinkedIn
        </a>
      </div>

      <div
        className={`pointer-events-none fixed inset-x-0 bottom-8 z-50 flex justify-center transition-all duration-300 ${
          copied ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/90 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm">
          <Check className="h-4 w-4 text-amber-500" strokeWidth={2} />
          Email address is copied to clipboard
        </div>
      </div>
    </GlowSection>
  )
}

export default LetsConnect

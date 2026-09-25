import BrandIcon from '@/components/ui/brand-icon'
import GlowSection from '@/components/GlowSection'

const TOOLS = [
  { name: 'Salesforce', icon: 'salesforce' },
  { name: 'HubSpot', icon: 'hubspot' },
  { name: 'Emplifi' },
  { name: 'Sprout Social' },
  { name: 'Google Analytics 4', icon: 'googleanalytics' },
  { name: 'Meta Business Suite' },
  { name: 'Adobe Photoshop', icon: 'adobephotoshop' },
  { name: 'Adobe Premiere Pro', icon: 'adobepremierepro' },
  { name: 'Adobe Workfront' },
  { name: 'Jira', icon: 'jira' },
  { name: 'Monday.com' },
  { name: 'Canva', icon: 'canva' },
  { name: 'CapCut' },
  { name: 'Figma', icon: 'figma' },
] as const

function ToolItem({ name, icon }: { name: string; icon?: (typeof TOOLS)[number]['icon'] }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-8 sm:px-10">
      {icon && <BrandIcon slug={icon} className="h-7 w-7 text-white/70 sm:h-8 sm:w-8" />}
      <span className="whitespace-nowrap text-xl font-semibold text-white/80 sm:text-2xl">
        {name}
      </span>
    </div>
  )
}

function Toolkit() {
  return (
    <GlowSection id="toolkit" className="scroll-mt-20">
      <h2 className="px-6 pt-16 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:px-12 md:pt-20 md:text-6xl lg:px-16">
        Toolkit
      </h2>

      <div
        className="relative mt-10 overflow-hidden py-10 sm:mt-12 sm:py-12"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex w-max animate-toolkit-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {TOOLS.map((tool) => (
                <ToolItem key={`${copy}-${tool.name}`} {...tool} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </GlowSection>
  )
}

export default Toolkit

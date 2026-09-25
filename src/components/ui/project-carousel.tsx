'use client'

import * as React from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export interface Project {
  image: string
  title: string
  company: string
  tags: string[]
}

export const projects: Project[] = [
  {
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    title:
      'Modernizing a Tech Startup by Bringing the 2016 Brand into the Modern Era',
    company: 'Abstract Techvisions',
    tags: ['DXaaS', 'Branding', 'Website', 'Content', 'Social Media', 'Paid Ads'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    title:
      'Inspiring the Next Mile: An Activation That Rallied Drivers to Buy Again',
    company: 'Mitsubishi Motors North America',
    tags: ['Lifecycle', 'Community Management', 'Loyalty'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=1200&auto=format&fit=crop',
    title: 'Revitalizing the Love For Vietnamese Street Food in Orange County',
    company: 'Grandpa District',
    tags: ['Community Management', 'Social Media', 'Strategy', 'Events'],
  },
]

interface CarouselConfig {
  distanceDivisor: number
  velocityDivisor: number
  sensitivity: number
  xMultiplier: number
  yMultiplier: number
  rotationMultiplier: number
  scaleReduction: number
}

const getCarouselConfig = (width: number): CarouselConfig => {
  if (width < 640) {
    return {
      distanceDivisor: 120,
      velocityDivisor: 500,
      sensitivity: 180,
      xMultiplier: 131,
      yMultiplier: 33,
      rotationMultiplier: 8,
      scaleReduction: 0.06,
    }
  }
  if (width < 1024) {
    return {
      distanceDivisor: 160,
      velocityDivisor: 650,
      sensitivity: 220,
      xMultiplier: 206,
      yMultiplier: 45,
      rotationMultiplier: 10,
      scaleReduction: 0.09,
    }
  }
  return {
    distanceDivisor: 200,
    velocityDivisor: 800,
    sensitivity: 250,
    xMultiplier: 269,
    yMultiplier: 59,
    rotationMultiplier: 12,
    scaleReduction: 0.12,
  }
}

const ProjectCarousel = () => {
  const scrollProgress = useMotionValue(0)
  const startProgress = React.useRef(0)
  const [windowWidth, setWindowWidth] = React.useState(0)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const total = projects.length

  React.useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  React.useEffect(() => {
    const unsubscribe = scrollProgress.on('change', (latest) => {
      const rounded = Math.round(latest)
      setActiveIndex(((rounded % total) + total) % total)
    })
    return unsubscribe
  }, [scrollProgress, total])

  const config = React.useMemo(() => getCarouselConfig(windowWidth), [windowWidth])

  const handleDragStart = () => {
    startProgress.current = scrollProgress.get()
  }

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const dragDistance = info.offset.x
    const velocity = info.velocity.x

    const distanceShift = -dragDistance / config.distanceDivisor
    const velocityShift = -velocity / config.velocityDivisor

    let totalShift = Math.round(distanceShift + velocityShift)
    totalShift = Math.max(-3, Math.min(3, totalShift))

    const target = Math.round(startProgress.current) + totalShift

    animate(scrollProgress, target, {
      type: 'spring',
      stiffness: 200,
      damping: 30,
      mass: 1,
    })
  }

  const goTo = (direction: 1 | -1) => {
    const target = Math.round(scrollProgress.get()) + direction
    animate(scrollProgress, target, {
      type: 'spring',
      stiffness: 200,
      damping: 30,
      mass: 1,
    })
  }

  const goToIndex = (targetIndex: number) => {
    const currentRounded = Math.round(scrollProgress.get())
    const currentMod = ((currentRounded % total) + total) % total
    let diff = targetIndex - currentMod
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    animate(scrollProgress, currentRounded + diff, {
      type: 'spring',
      stiffness: 200,
      damping: 30,
      mass: 1,
    })
  }

  return (
    <div className="flex flex-col items-center justify-center w-full py-2 md:py-4 overflow-hidden select-none">
      <div className="relative w-full max-w-[90rem] h-[30rem] sm:h-[35rem] lg:h-[42.5rem] flex items-center justify-center">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity
            scrollProgress.set(scrollProgress.get() + delta)
          }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
        />

        {projects.map((project, i) => (
          <Card
            key={i}
            project={project}
            index={i}
            total={total}
            progress={scrollProgress}
            config={config}
          />
        ))}

        <button
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Previous project"
          className="absolute left-1 sm:left-2 md:left-4 lg:left-8 top-1/2 z-[60] flex h-[2.8125rem] w-[2.8125rem] sm:h-[3.125rem] sm:w-[3.125rem] lg:h-[3.75rem] lg:w-[3.75rem] -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-colors hover:border-white/70 hover:bg-white/10"
        >
          <ChevronLeft size={25} className="sm:hidden" />
          <ChevronLeft size={30} className="hidden sm:block" />
        </button>

        <button
          type="button"
          onClick={() => goTo(1)}
          aria-label="Next project"
          className="absolute right-1 sm:right-2 md:right-4 lg:right-8 top-1/2 z-[60] flex h-[2.8125rem] w-[2.8125rem] sm:h-[3.125rem] sm:w-[3.125rem] lg:h-[3.75rem] lg:w-[3.75rem] -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-colors hover:border-white/70 hover:bg-white/10"
        >
          <ChevronRight size={25} className="sm:hidden" />
          <ChevronRight size={30} className="hidden sm:block" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {projects.map((project, i) => (
          <button
            key={project.title}
            type="button"
            onClick={() => goToIndex(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === activeIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

interface CardProps {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
  config: CarouselConfig
}

const Card = ({ project, index, total, progress, config }: CardProps) => {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  })

  const x = useTransform(offset, (o) => o * config.xMultiplier)
  const rotate = useTransform(offset, (o) => {
    const absO = Math.abs(o)
    if (absO < 0.05) return 0
    return o * config.rotationMultiplier
  })
  const y = useTransform(offset, (o) => {
    const absO = Math.abs(o)
    if (absO < 0.05) return 0
    return absO * config.yMultiplier
  })
  const scale = useTransform(offset, (o) => 1 - Math.abs(o) * config.scaleReduction)
  const opacity = useTransform(
    offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0],
  )
  const zIndex = useTransform(offset, (o) => Math.round(100 - Math.abs(o) * 10))
  const contentOpacity = useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0])
  const scrimOpacity = useTransform(offset, [-2, -0.5, 0, 0.5, 2], [0.5, 0.2, 0, 0.2, 0.5])

  return (
    <motion.div
      style={{ x, rotate, y, scale, opacity, zIndex }}
      className={cn(
        'absolute rounded-2xl overflow-hidden bg-muted group pointer-events-none',
        'w-[16.25rem] h-[22.5rem] sm:w-[22.5rem] sm:h-[30rem] lg:w-[25rem] lg:h-[35rem]',
      )}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110"
      />

      <motion.div
        style={{ opacity: scrimOpacity }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <Badge className="absolute top-4 right-4 left-4 sm:top-6 sm:right-6 sm:left-6 lg:top-7 lg:right-7 lg:left-7 block w-fit max-w-full ml-auto whitespace-nowrap text-center px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[9px] sm:text-[12px] lg:text-[13px] font-semibold uppercase tracking-wide text-black">
        {project.company}
      </Badge>

      <div className="absolute bottom-6 left-4 right-4 sm:bottom-10 sm:left-6 sm:right-6 lg:bottom-12 lg:left-7 lg:right-7 text-white text-center sm:text-left">
        <motion.p
          style={{ opacity: contentOpacity }}
          className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight line-clamp-3 mb-2 sm:mb-3 drop-shadow-md"
        >
          {project.title}
        </motion.p>
        <motion.div
          style={{ opacity: contentOpacity }}
          className="hidden sm:flex flex-wrap gap-1.5 justify-start"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[13px] uppercase tracking-wide text-white/70 border border-white/20 rounded-full px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCarousel

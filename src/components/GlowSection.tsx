import * as React from 'react'

interface GlowSectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

function GlowSection({ id, className = '', children }: GlowSectionProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  )
}

export default GlowSection

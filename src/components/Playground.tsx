import OrbitFlipSlider from '@/components/ui/orbit-flip-slider'
import GlowSection from '@/components/GlowSection'

import vang from '@/assets/playground/01-vang.jpeg'
import helpThemHome from '@/assets/playground/02-help-them-home.webp'
import alohaSummer from '@/assets/playground/03-aloha-summer.jpg'
import eight760 from '@/assets/playground/04-8760.png'
import nbff from '@/assets/playground/05-nbff.jpg'
import cosm from '@/assets/playground/06-cosm.jpg'
import vibejanitor from '@/assets/playground/07-vibejanitor.jpg'
import uniqlo from '@/assets/playground/08-uniqlo.svg'
import deskMat from '@/assets/playground/09-desk-mat.jpg'
import patagonia from '@/assets/playground/10-patagonia.jpg'

const ITEMS = [
  { image: vang, alt: 'Vang' },
  { image: helpThemHome, alt: 'Help Them Home — A Giving Day for OC\'s Homeless' },
  { image: alohaSummer, alt: 'Aloha Summer' },
  { image: eight760, alt: '8760' },
  { image: nbff, alt: 'Newport Beach Film Fest' },
  { image: cosm, alt: 'COSM' },
  { image: vibejanitor, alt: 'Vibe Janitor' },
  { image: uniqlo, alt: 'Uniqlo' },
  { image: deskMat, alt: 'Desk Mat' },
  { image: patagonia, alt: 'Patagonia' },
]

const TILT_MOVE_Y = 0

function Playground() {
  return (
    <GlowSection id="playground" className="scroll-mt-20">
      <div className="relative h-[880px] w-full pb-10 pt-10 md:h-[990px] md:pb-14 md:pt-14">
        <h2
          className="pointer-events-none absolute inset-x-0 z-10 px-6 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:px-12 md:text-6xl lg:px-16"
          style={{ top: `calc(50% + ${TILT_MOVE_Y}px)`, transform: 'translateY(-50%)' }}
        >
          Playground
        </h2>

        <OrbitFlipSlider
          items={ITEMS}
          backgroundColor="transparent"
          heightClassName="h-full"
          imageWidth={110}
          imageHeight={110}
          imageGap={28}
          rounded="rounded-2xl"
          defaultMode="tilt"
          showControls={false}
          depthEffect={0}
          enableHoverMovement
          rotate
          rotateSpeed={3.2}
          stopRotationOnHover={false}
          flatRadiusX={2.4}
          flatRadiusY={1.8}
          flatScale={1}
          ringRotateX={31}
          ringRotateY={56}
          ringRotateZ={-25}
          ringRadiusX={2.0}
          ringRadiusY={1.6}
          ringScale={1}
          tiltRotateX={70}
          tiltRotateY={0}
          tiltRotateZ={0}
          tiltRadiusX={2.6}
          tiltRadiusY={2.0}
          tiltScale={1.1}
          tiltMoveY={TILT_MOVE_Y}
          galleryRotateX={0}
          galleryRotateY={0}
          galleryRotateZ={0}
          galleryRadiusX={1.8}
          galleryRadiusY={2.0}
          galleryScale={1.1}
        />
      </div>
    </GlowSection>
  )
}

export default Playground

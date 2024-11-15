import { CSSProperties } from 'react'
import { motion, Transition, UseInViewOptions, Variants } from 'framer-motion'

const cardTransition: Transition = {
  ease: 'easeOut',
  duration: 0.2
}

function getCardVariants(delay?: number): Variants {
  return {
    initial: {
      opacity: 0,
      y: 24,
      transition: cardTransition
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        ...cardTransition,
        delay: 0.2 + (delay || 0)
      }
    }
  }
}

interface AnimationWrapperProps {
  viewport?: UseInViewOptions
  children: React.ReactNode
  style?: CSSProperties
  className?: string
  delay?: number
}

export function AnimationWrapper({
  viewport,
  children,
  className,
  style,
  delay
}: AnimationWrapperProps) {
  // todo use enter
  const onViewportEnter = () => {
    //
  }

  return (
    <motion.div
      initial="initial"
      whileInView="onscreen"
      viewport={viewport}
      style={style}
      className={className}
      onViewportEnter={onViewportEnter}
    >
      <motion.div variants={getCardVariants(delay)}>{children}</motion.div>
    </motion.div>
  )
}

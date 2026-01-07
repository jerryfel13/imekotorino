'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in' | 'fade-in-up' | 'scale-in' | 'slide-in-left' | 'slide-in-right'
  delay?: number
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-in-up',
  delay = 0
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClass = isVisible 
    ? `animate-${animation.replace('-', '-')} opacity-100` 
    : 'opacity-0'

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}





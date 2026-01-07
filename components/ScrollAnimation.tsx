'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animationIn?: string
  animationOut?: string
  threshold?: number
  delay?: number
  rootMargin?: string
}

export default function ScrollAnimation({
  children,
  className = '',
  animationIn = 'fade-in-up',
  animationOut = 'fade-out',
  threshold = 0.15,
  delay = 0,
  rootMargin = '0px 0px -80px 0px'
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let wasIntersecting = false
    let lastScrollY = window.scrollY

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY
        const isScrollingDown = currentScrollY > lastScrollY
        const elementTop = entry.boundingClientRect.top
        const viewportHeight = window.innerHeight

        // Check if element is entering from below (scroll down scenario)
        const isEnteringFromBelow = elementTop > viewportHeight * 0.1 && elementTop < viewportHeight

        if (entry.isIntersecting) {
          // Only animate in when:
          // 1. Element is entering from below (scroll down)
          // 2. We're actually scrolling down
          // 3. It hasn't animated yet
          // 4. It wasn't intersecting before (new entry)
          if (!hasAnimated && isScrollingDown && isEnteringFromBelow && !wasIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
              setHasAnimated(true)
            }, delay)
          } else if (hasAnimated) {
            // Keep visible if already animated and still in view
            setIsVisible(true)
          }
          wasIntersecting = true
        } else {
          wasIntersecting = false
          // Animate out when scrolling past (element is above viewport)
          if (hasAnimated && entry.boundingClientRect.top < -50) {
            setIsVisible(false)
          }
        }
        
        lastScrollY = currentScrollY
      },
      { 
        threshold, 
        rootMargin // Trigger when element is closer to viewport
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, delay, hasAnimated, rootMargin])

  const getAnimationClass = () => {
    if (isVisible) {
      // Animate in
      const inClass = animationIn === 'fade-in-up' ? 'animate-fade-in-up' :
                     animationIn === 'fade-in' ? 'animate-fade-in' :
                     animationIn === 'scale-in' ? 'animate-scale-in' :
                     animationIn === 'slide-in-left' ? 'animate-slide-in-left' :
                     animationIn === 'slide-in-right' ? 'animate-slide-in-right' :
                     'animate-fade-in-up'
      return `${inClass} opacity-100`
    } else if (hasAnimated) {
      // Animate out
      const outClass = animationOut === 'fade-out' ? 'animate-fade-out' :
                      animationOut === 'fade-out-down' ? 'animate-fade-out-down' :
                      animationOut === 'scale-out' ? 'animate-scale-out' :
                      'animate-fade-out'
      return `${outClass} opacity-0`
    }
    return 'opacity-0'
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}


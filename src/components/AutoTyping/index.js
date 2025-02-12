import {useState, useEffect} from 'react'
import './index.css'

const texts = ['Full Stack Developer', 'Programmer', 'Web Developer']

const AutoTyping = () => {
  const typingSpeed = 100 
  const pauseTime = 2000

  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex]

      if (!isDeleting) {
        setDisplayedText(prev => fullText.substring(0, prev.length + 1))

        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setDisplayedText(prev => fullText.substring(0, prev.length - 1))

        if (displayedText === '') {
          setIsDeleting(false)
          setCurrentTextIndex(prev => (prev + 1) % texts.length)
        }
      }
    }

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? typingSpeed / 2 : typingSpeed,
    )

    return () => clearTimeout(typingTimeout)
  }, [displayedText, isDeleting, currentTextIndex])

  return (
    <div className="auto-typing d-inline-flex" aria-live="polite">
      <span>{displayedText}</span>
      <span className="caret" />
    </div>
  )
}

export default AutoTyping

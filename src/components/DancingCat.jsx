import { useState, useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  const handleKeyPress = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      toggleAnimation()
    }
  }

  useEffect(() => {
    const handleGlobalKeyPress = (event) => {
      if (event.key === ' ') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleGlobalKeyPress)
    return () => window.removeEventListener('keydown', handleGlobalKeyPress)
  }, [])

  return (
    <div className="dancing-cat-container">
      <img
        src={catSvg}
        alt="댄싱 고양이"
        className={`dancing-cat ${isAnimating ? 'dancing' : ''}`}
        onClick={toggleAnimation}
        role="button"
        tabIndex="0"
        onKeyDown={handleKeyPress}
        style={{ cursor: 'pointer' }}
      />
      <div className="controls">
        <button
          onClick={toggleAnimation}
          className="control-button"
          aria-label={isAnimating ? '애니메이션 멈추기' : '애니메이션 시작하기'}
        >
          {isAnimating ? '⏸️ 멈추기' : '▶️ 춤추기'}
        </button>
        <p className="instructions">
          💡 스페이스바를 눌러도 조작할 수 있어요!
        </p>
      </div>
    </div>
  )
}

export default DancingCat
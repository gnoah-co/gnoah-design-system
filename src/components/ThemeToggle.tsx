import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Verificar preferência salva no localStorage
    const savedTheme = localStorage.getItem('noah-theme') as Theme
    if (savedTheme) {
      return savedTheme
    }
    // Verificar preferência do sistema
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const [isRotating, setIsRotating] = useState(false)

  useEffect(() => {
    // Aplicar tema ao documento
    document.documentElement.setAttribute('data-theme', theme)
    // Salvar preferência
    localStorage.setItem('noah-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setIsRotating(true)
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    setTimeout(() => setIsRotating(false), 500)
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      title={`Tema atual: ${theme === 'light' ? 'Claro' : 'Escuro'}`}
    >
      <span className={`theme-toggle__icon ${isRotating ? 'theme-toggle__icon--rotating' : ''}`}>
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
      <span className="theme-toggle__label">
        {theme === 'light' ? 'Escuro' : 'Claro'}
      </span>
    </button>
  )
}

export default ThemeToggle

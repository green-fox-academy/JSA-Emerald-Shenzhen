import { useState, useEffect } from 'react'

function useFonts(expoFont, fonts) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function loadExpoFonts() {
      try {
        await expoFont.loadAsync({
          ...fonts
        })
        setIsReady(true)
      } catch (error) {
        console.log('Wrong font lib')
      }
    }
    loadExpoFonts()
  })

  return isReady
}

export default useFonts

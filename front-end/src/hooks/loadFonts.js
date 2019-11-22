import { useState, useEffect } from 'react'
import * as Font from 'expo-font'

function useFonts(fonts) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function loadExpoFonts() {
      await Font.loadAsync({
        ...fonts
      })
      setIsReady(true)
    }
    loadExpoFonts()
  })

  return isReady
}

export default useFonts

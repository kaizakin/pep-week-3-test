import { useEffect, useState } from 'react'

export const useCharacterCounter = (limit: number) => {
  const [message, setMessage] = useState('')
  const [remaining, setRemaining] = useState(limit)
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    const nextRemaining = limit - message.length
    setRemaining(nextRemaining)
    setShowWarning(nextRemaining <= 10)
  }, [message, limit])

  const updateMessage = (value: string) => {
    setMessage(value.slice(0, limit))
  }

  return {
    message,
    updateMessage,
    totalCharacters: message.length,
    remaining,
    showWarning,
  }
}

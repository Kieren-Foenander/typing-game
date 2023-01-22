import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [originalWord, setOriginalWord] = useState('word')
  const [word, setWord] = useState('')
  const [wordIndex, setWordIndex] = useState(0)

  const typeWord = (
    e: React.KeyboardEvent,
    index: number,
    originalWord: string
  ) => {
    if (e.key !== originalWord[index]) {
      console.log('not changing word' + `: ${word} word index is ${index}`)
      return
    }

    console.log('changing word' + `: ${word} word index is ${index}`)

    setWord(`${word + e.key}`)
    setWordIndex(wordIndex + 1)
    console.log(word.length, originalWord.length)
    if (word.length === originalWord.length) setWordIndex(0)
    return word
  }

  return (
    <>
      <div
        onKeyDown={(e: any) => {
          typeWord(e, wordIndex, originalWord)
        }}
        tabIndex={0}
      >
        <p>{originalWord}</p>
        <p>{word}</p>
      </div>
    </>
  )
}

export default App

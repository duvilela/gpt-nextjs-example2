import { useState } from "react"

export default function MyPage() {
  const [prompt, setPrompt] = useState("")
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const response = await fetch("/api/get-answer", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: prompt })
    })
    const data = await response.json()
    setAnswer(data.text.trim())
    setIsLoading(false)
  }

  function handleChange(e) {
    setPrompt(e.target.value)
  }

  return (
    <div className="container">
      <h1>Pergunte alguma coisa !!!</h1>
      <h5>Estou muito ansioso para te ajudar ....</h5>

      <form className="our-form" onSubmit={handleSubmit}>
        <input className="prompt-field" type="text" onChange={handleChange}  placeholder="Pergunte-me alguma coisa..."  />
        <button className="prompt-button">Vá!</button>
      </form>
      
      {isLoading && <div className="loading-spinner"></div>}
      
      <div className="answer-area">{answer}</div>
    </div>
  )
}

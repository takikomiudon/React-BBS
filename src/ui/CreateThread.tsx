import { useState } from "react"
import Headers from "../components/Header"

const CreateThread = () => {
  const [title, setTitle] = useState('')

  const handleSubmit = () => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
    })
  }

  return (
    <div>
      <Headers />
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="スレッドのタイトル" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">スレッドをたてる</button>
      </form>
    </div>
  )
}

export default CreateThread

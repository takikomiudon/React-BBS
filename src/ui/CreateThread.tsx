import { useState } from "react"

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
      <input type="text" name="title" placeholder="スレッドのタイトル" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>スレッドをたてる</button>
    </div>
  )
}

export default CreateThread

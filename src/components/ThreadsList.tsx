import { useEffect, useState } from 'react'
import Thread from './Thread'
import { ThreadProps } from './Thread'

const ThreadsList = () => {
  const [threads, setThreads] = useState<ThreadProps[]>([])

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads')
      .then((res) => res.json())
      .then((data) => {
        setThreads(data)
      })
  }, [threads])

  return (
    <div>
      <h2>スレッド一覧</h2>
      {threads.map((thread) => (
        <Thread thread={thread} key={thread.id} />
      ))}
    </div>
  )
}

export default ThreadsList

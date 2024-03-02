export type ThreadProps = {
  id: string
  title: string
}

const Thread = ( { thread }: { thread: ThreadProps } ) => {
  return (
    <div>
      {thread.title} ({thread.id})
    </div>
  )
}

export default Thread;

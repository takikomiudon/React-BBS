import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <div>
      <h1>掲示板</h1>
      <Link to="/thread/new">スレッドをたてる</Link>
    </div>
  )
}

export default Headers

import Header from 'components/Header/Header'
import Queue from 'components/Queue/Queue'
import { useQueues } from 'hooks/useQueues'

const App = () => {
  const [queues, setQueues] = useQueues()

  return (
    <div>
      <Header />
      <div className="mx-auto mt-[60px] grid w-[720px] grid-cols-5 gap-3">
        {queues.map(({ id }) => (
          <div key={id} className="text-center">
            <Queue />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

import Header from 'components/Header/Header'
import Queue from 'components/Queue/Queue'
import { useQueues } from 'hooks/useQueues'

const App = () => {
  const [queues, addToQueues] = useQueues()

  const handleSubmit = (value: number) => {
    addToQueues(value)
  }

  return (
    <div>
      <Header handleSubmit={handleSubmit} />
      <div className="mx-auto mt-[60px] grid w-[720px] grid-cols-5 gap-3">
        {queues.map(({ id, items }) => (
          <div key={id} className="text-center">
            <Queue items={items} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

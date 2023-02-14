import { IQueue } from 'common/interfaces/Que'
import { useState } from 'react'

export const useQueues = (): [
  IQueue[],
  React.Dispatch<React.SetStateAction<IQueue[]>>
] => {
  const [queues, setQueues] = useState<IQueue[]>([
    { id: 1, itemsAmount: 0, items: [] },
    { id: 2, itemsAmount: 0, items: [] },
    { id: 3, itemsAmount: 0, items: [] },
    { id: 4, itemsAmount: 0, items: [] },
    { id: 5, itemsAmount: 0, items: [] }
  ])

  return [queues, setQueues]
}

import { IQueue } from 'common/interfaces/Que'
import { useState } from 'react'

export const useQueues = (): [IQueue[], (value: number) => void] => {
  const [queues, setQueues] = useState<IQueue[]>([
    { id: 1, itemsAmount: 0, items: [] },
    { id: 2, itemsAmount: 1, items: [{ id: 7, value: 5 }] },
    {
      id: 3,
      itemsAmount: 2,
      items: [
        { id: 8, value: 3 },
        { id: 9, value: 10 }
      ]
    },
    { id: 4, itemsAmount: 0, items: [] },
    { id: 5, itemsAmount: 1, items: [{ id: 6, value: 10 }] }
  ])

  const addToQueues = (value: number) => {
    let isAdded = false

    const newQueues = queues.map((queue) => {
      if (queue.itemsAmount < 1 && !isAdded) {
        queue.items.push({ id: Math.random(), value })
        queue.itemsAmount = queue.itemsAmount + 1
        isAdded = true
      }

      return queue
    })

    setQueues(newQueues)
  }

  return [queues, addToQueues]
}

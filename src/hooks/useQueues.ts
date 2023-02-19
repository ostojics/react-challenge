import { IQueue } from 'common/interfaces/Que'
import { useEffect, useState } from 'react'

export const useQueues = (): [IQueue[], (value: number) => void] => {
  const [queues, setQueues] = useState<IQueue[]>([
    { id: 1, itemsAmount: 0, items: [] },
    { id: 2, itemsAmount: 5, items: [{ id: 7, value: 5 }] },
    {
      id: 3,
      itemsAmount: 13,
      items: [
        { id: 8, value: 3 },
        { id: 9, value: 10 }
      ]
    },
    { id: 4, itemsAmount: 0, items: [] },
    { id: 5, itemsAmount: 10, items: [{ id: 6, value: 10 }] }
  ])

  const addToQueues = (value: number) => {
    const zeroItemsQueue = queues.find((q) => q.itemsAmount < 1)

    if (zeroItemsQueue) {
      const newQueues = queues.map((queue) => {
        if (queue.id === zeroItemsQueue.id) {
          return {
            ...queue,
            itemsAmount: queue.itemsAmount + value,
            items: [...queue.items, { id: Math.random(), value }]
          }
        }
        return queue
      })

      setQueues(newQueues)
      return
    }

    let lowestItemsAmount: number
    let lowestItemsId: number

    queues.forEach((queue) => {
      if (!lowestItemsAmount || queue.itemsAmount < lowestItemsAmount) {
        lowestItemsAmount = queue.itemsAmount
        lowestItemsId = queue.id
      }
    })

    const newQueues = queues.map((queue) => {
      if (queue.id === lowestItemsId) {
        return {
          ...queue,
          itemsAmount: queue.itemsAmount + value,
          items: [...queue.items, { id: Math.random(), value }]
        }
      }
      return queue
    })

    setQueues(newQueues)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newQueues = queues.map((queue) => {
        const changedQueItem = structuredClone(queue.items[0])

        if (changedQueItem) {
          changedQueItem.value = changedQueItem.value - 1

          if (changedQueItem.value === 0) {
            queue.items.shift()
          } else {
            queue.items[0] = changedQueItem
          }

          queue.itemsAmount = queue.itemsAmount - 1
        }

        return queue
      })

      setQueues(newQueues)
    }, 500)

    return () => clearInterval(interval)
  }, [queues])

  return [queues, addToQueues]
}

export interface IQueueItem {
  id: number
  value: number
}

export interface IQueue {
  id: number
  itemsAmount: number
  items: IQueueItem[]
}

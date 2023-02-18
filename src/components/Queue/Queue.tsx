import { IQueueItem } from 'common/interfaces/Que'

interface IQueueProps {
  items: IQueueItem[]
}

const Queue = ({ items }: IQueueProps) => {
  return (
    <div>
      <div className="h-[100px] rounded-md border-2 border-black" />
      {items.map((item) => (
        <div
          key={item.id}
          className="mx-auto my-3 flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-black text-center "
        >
          {item.value}
        </div>
      ))}
    </div>
  )
}

export default Queue

import { formatTime } from '@/utils/formatTime'
import { FC, ChangeEvent } from 'react'

interface TrackProgressProps {
  current: number
  max: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  isTime?: boolean
}

const TrackProgress: FC<TrackProgressProps> = ({ current, max, onChange, isTime }) => {
  // const hours = Math.floor(max / 3600)
  const maxTimeFormat = formatTime(max)
  const currentTimeFormat = formatTime(current)

  return (
    <div style={{ display: 'flex' }}>
      <input type='range' min={0} max={max} value={current} onChange={onChange} />
      <div>
        {isTime ? (
          <>
            {currentTimeFormat}/ {maxTimeFormat}
          </>
        ) : (
          <>
            {current} / {max}
          </>
        )}
      </div>
    </div>
  )
}

export default TrackProgress

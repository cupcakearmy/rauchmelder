import React, { useEffect, useState } from 'react'
import dj from 'dayjs'

type Props = {
  glory: number
}

const ShowTime: React.FC<Props> = ({ glory }) => {
  const [refresh, setRefresh] = useState(0)

  const now = (Date.now() / 1000) | 0
  const delta = dj.duration(now - glory, 'seconds')

  useEffect(() => {
    setTimeout(() => setRefresh(refresh + 1), 1000)
  }, [refresh])

  return (
    <div id={'text'}>
      {delta.humanize()}
      <br />
      {delta.asSeconds()}
    </div>
  )
}

export default ShowTime

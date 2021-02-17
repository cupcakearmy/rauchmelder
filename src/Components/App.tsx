import React, { useState, useCallback } from 'react'
import Duration from 'dayjs/plugin/duration'
import RelativeTime from 'dayjs/plugin/relativeTime'
import dj from 'dayjs'

dj.extend(Duration)
dj.extend(RelativeTime)

import ShowTime from './ShowTime'
import Switcher from './Switcher'

export const Glories = {
  Cosi: dj('2019-02-12').unix(),
  Georg: dj('2019-11-08').unix(),
}

export type Person = keyof typeof Glories

const init: Person = (window.localStorage.getItem('selected') as Person) || 'Cosi'

const App: React.FC = () => {
  const [person, setPerson] = useState(init)

  const _set = useCallback((p: Person) => {
    window.localStorage.setItem('selected', p)
    setPerson(p)
  }, [])

  return (
    <div id="app">
      <Switcher onChange={_set} />
      <div>
        <div id={'title'}>💨 Rauchmelder 💨</div>
        <br />
        <ShowTime glory={Glories[person]} />
      </div>
    </div>
  )
}

export default App

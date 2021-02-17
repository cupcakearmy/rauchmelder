import React from 'react'
import { Glories, Person } from './App'

type Props = {
  onChange: (p: Person) => void
}

const Switcher: React.FC<Props> = ({ onChange }) => {
  return (
    <div id="switcher">
      {Object.keys(Glories).map((glory, i) => (
        <span key={i} onClick={() => onChange(glory as Person)}>
          {glory}
        </span>
      ))}
    </div>
  )
}

export default Switcher

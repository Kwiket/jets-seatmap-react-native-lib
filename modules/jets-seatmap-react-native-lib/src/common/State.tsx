import {useState} from 'react'

export const $State = (initialState: any) => {
  const [state, setState] = useState(initialState)

  return {
    state,
    setState,
  }
}

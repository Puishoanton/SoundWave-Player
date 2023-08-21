import { useState } from 'react'

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  //   const resetInput = () => {
  //     setValue('')
  //   }

  return {
    value,
    onChange,
    // resetInput,
  }
}

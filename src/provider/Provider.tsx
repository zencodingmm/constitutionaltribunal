import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode
}

const Provider = ({children} : Props) => {
  return (
    <Provider>{children}</Provider>
  )
}

export default Provider
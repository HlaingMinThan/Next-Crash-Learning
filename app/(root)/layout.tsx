import React from 'react'

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <>
    <h1 className='text-3xl'>Navbar</h1>
    <div>{children}</div>
    </>
  )
}

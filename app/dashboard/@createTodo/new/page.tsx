import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <div>Parallel Route</div>
    <Link  href="/dashboard">go back to default</Link>
    </>
  )
}

export default page
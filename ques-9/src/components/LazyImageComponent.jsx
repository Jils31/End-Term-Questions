import React from 'react'
import { Suspense } from 'react'
import { lazy } from 'react'


function LazyImageComponent({imagePath}) {
    const ImageComponent = lazy(() => import(`./${imagePath}`))
  return (
    <div>
      <Suspense fallback = {<div>Loading image...</div>}>
      <ImageComponent />
      </Suspense>
    </div>
  )
}

export default LazyImageComponent

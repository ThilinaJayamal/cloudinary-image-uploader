import React from 'react'
import ImageUploader from './components/ImageUploader'

function App() {
  return (
    <div className='flex gap-2 p-4'>
      <ImageUploader />
      <ImageUploader />
      <ImageUploader />
      <ImageUploader />
    </div>

  )
}

export default App
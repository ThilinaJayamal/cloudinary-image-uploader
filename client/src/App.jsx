import React, { useEffect, useState } from 'react'
import ImageUploader from './components/ImageUploader'

function App() {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  useEffect(() => {
    console.log("IMG-1 :" + image1);
    console.log("IMG-2 :" + image2);
  }, [image1, image2])

  return (
    <div className='flex gap-2 p-4'>
      <ImageUploader setImage={setImage1} />
      <ImageUploader setImage={setImage2} />
    </div>

  )
}

export default App
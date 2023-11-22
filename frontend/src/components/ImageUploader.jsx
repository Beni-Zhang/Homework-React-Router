import React, { useState, useEffect, useRef } from 'react';

export default function ImageUploader({ bookData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (bookData?.image) {
      const file = new File([], bookData.image, { type: 'image/*' });
      setSelectedImage(URL.createObjectURL(file));
      fileInputRef.current.value = '';
    }
  }, [bookData]);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  }

  return (
    <div>
      <label>
        Upload Image
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
      </label>
      {selectedImage && <img src={selectedImage} alt="Selected Image" style={{ marginTop: '10px', maxWidth: '100%' }} />}
    </div>
  );
}
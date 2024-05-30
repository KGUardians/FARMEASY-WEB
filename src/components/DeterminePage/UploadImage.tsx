import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectedImage from './SelectedImage';
import UploadArea from './UploadArea';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleImageUpload = (file: File) => {
    setSelectedImage(file);
  };

  const handleImageCancel = () => {
    setSelectedImage(null);
  };

  const handleModifyImageClick = () => {
    const input = document.getElementById('upload-input');
    if (input) {
      input.click();
    }
  };

  const handleDetermineClick = () => {
    navigate('/determine/result');
  };

  return (
    <>
      {selectedImage ? (
        <SelectedImage
          selected={selectedImage}
          onCancel={handleImageCancel}
          onModifyClick={handleModifyImageClick}
          onDetermineClick={handleDetermineClick}
          onImageUpload={handleImageUpload}
        />
      ) : (
        <UploadArea onImageUpload={handleImageUpload} />
      )}
    </>
  );
};

export default UploadImage;

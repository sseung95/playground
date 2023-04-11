import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { color } from '@/styles/color';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

const ImageUploader = () => {
  const imgInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleChangeImage = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    const selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImages((prev) => [...prev, ...selectedFiles]);
  };

  return (
    <ImageUploaderContainer>
      <UploadContainer
        onClick={() => {
          if (!imgInputRef.current) return;
          imgInputRef.current.click();
        }}
      >
        <UploadIcon />
        <input
          ref={imgInputRef}
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          multiple
          onChange={handleChangeImage}
        />
      </UploadContainer>
      <ImagePreviewContainer>
        {images &&
          images.map((image, i) => (
            <ImagePreview key={`image-uploader-${i}`}>
              <Image src={image} alt={`이미지 ${i}`} width={120} height={80} />
              <ImageRemoveIcon
                onClick={() => {
                  setImages((prevImages) =>
                    prevImages.filter(
                      (prevImage, prevImageIndex) => prevImageIndex !== i
                    )
                  );
                }}
              />
            </ImagePreview>
          ))}
      </ImagePreviewContainer>
    </ImageUploaderContainer>
  );
};

export default ImageUploader;

const ImageUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
  border: 2px dashed ${color.border.default};
  border-radius: 0.8rem;
  cursor: pointer;

  input {
    display: none;
  }
`;

const UploadIcon = styled(CloudUploadIcon)`
  width: 4rem;
  height: 4rem;
  fill: ${color.border.default};
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;

  min-height: 4rem;
`;

const ImagePreview = styled.div`
  position: relative;
  border-radius: 0.8rem;
  overflow: hidden;
  border: 1px solid ${color.border.default};

  img {
    object-fit: cover;
  }
`;

const ImageRemoveIcon = styled(CloseIcon)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  fill: ${color.text.gray};

  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
`;

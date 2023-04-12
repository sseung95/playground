import styled from '@emotion/styled';
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { color } from '@/styles/color';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { typography } from '@/styles/typography';

interface ImageTypes {
  name: string;
  url: string;
}

const ImageUploader = () => {
  const imgInputRef = useRef<HTMLInputElement | null>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const [images, setImages] = useState<ImageTypes[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleChangeImage = (e: ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    handleSetImageList(targetFiles);
  };

  const handleSetImageList = (fileList: FileList) => {
    const targetFilesArray = Array.from(fileList);
    const selectedFiles: ImageTypes[] = targetFilesArray.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...selectedFiles]);
  };

  const handleDragIn = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!e.dataTransfer) return;

    const targetFiles = e.dataTransfer?.files;
    handleSetImageList(targetFiles);
    setIsDragging(false);
  }, []);

  const initDragEvents = useCallback(() => {
    if (!dragRef.current) return;
    dragRef.current.addEventListener('dragenter', handleDragIn); // dragenter: 마우스가 대상 객체의 위로 처음 진입할 때 발생
    dragRef.current.addEventListener('dragleave', handleDragOut); // dragleave: 드래그가 끝나서 마우스가 대상 객체의 위에서 벗어날 때 발생
    dragRef.current.addEventListener('dragover', handleDragOver); // dragover: 드래그하면서 마우스가 대상 객체의 위에 자리 잡고 있을 때 발생
    dragRef.current.addEventListener('drop', handleDragDrop); // drop: 드래그가 끝나서 드래그하던 객체를 놓는 장소에 위치한 객체에서 발생
  }, [handleDragDrop, handleDragIn, handleDragOut, handleDragOver]);

  const removeDragEvents = useCallback(() => {
    if (!dragRef.current) return;
    dragRef.current.removeEventListener('dragenter', handleDragIn);
    dragRef.current.removeEventListener('dragleave', handleDragOut);
    dragRef.current.removeEventListener('dragover', handleDragOver);
    dragRef.current.removeEventListener('drop', handleDragDrop);
  }, [handleDragIn, handleDragOut, handleDragOver, handleDragDrop]);

  useEffect(() => {
    initDragEvents();

    return () => removeDragEvents();
  }, [initDragEvents, removeDragEvents]);

  return (
    <ImageUploaderContainer>
      <UploadContainer
        ref={dragRef}
        isDragging={isDragging}
        onClick={() => {
          if (!imgInputRef.current) return;
          imgInputRef.current.click();
        }}
      >
        <div>
          <UploadIcon />
          <p>jpg, jpeg, png</p>
        </div>

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
            <figure key={`image-uploader-${i}`}>
              <ImagePreview>
                <Image
                  src={image.url}
                  alt={`이미지 ${i}`}
                  width={120}
                  height={80}
                />
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
              <ImageName>{image.name}</ImageName>
            </figure>
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

const UploadContainer = styled.div<{ isDragging: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
  border: 2px dashed
    ${({ isDragging }) => (isDragging ? color.primary : color.border.default)};
  border-radius: 0.8rem;
  cursor: pointer;
  background-color: ${({ isDragging }) =>
    isDragging ? color.secondary : '#fff'};

  transition: all 0.2s;

  > div {
    text-align: center;

    p {
      ${typography.caption}
      color: ${color.text.gray}
    }
  }

  input {
    display: none;
  }

  svg {
    fill: ${({ isDragging }) =>
      isDragging ? color.primary : color.border.default};
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
  padding: 4px;
  box-sizing: content-box;
  cursor: pointer;
  fill: ${color.text.gray};
  border-radius: 100px;

  position: absolute;
  top: 0.4rem;
  right: 0.4rem;

  transition: background-color 0.2s;

  :hover {
    background-color: rgba(173, 181, 189, 0.2);
  }
`;

const ImageName = styled.figcaption`
  max-width: 12rem;
  padding: 0 0.4rem;
  margin-top: 0.4rem;
  ${typography.caption}
`;

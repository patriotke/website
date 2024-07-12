/**
 * Get image preview from file
 * @param file
 */
// eslint-disable-next-line import/prefer-default-export
export const getImagePreview = (file: File): HTMLImageElement => {
  const image = document.createElement('img');
  image.src = URL.createObjectURL(file);
  image.alt = file.name;
  image.title = file.name;
  image.className = 'aspect-square object-cover';
  return image;
};

/**
 * Create preview
 * @param parent
 * @param image
 */
export const createPreview = (
  parent: HTMLDivElement,
  image: HTMLImageElement,
) => parent.replaceChildren(image);

/**
 * Get file base64
 * @param file
 */
export const getFileBase64 = (file: File): Promise<string> =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });

/**
 * Get blob from data url
 * @param dataUrl
 */
export const getBlobFromDataUrl = (dataUrl: string): Blob => {
  const [mimeContainer, b64] = dataUrl.split(',');
  const [mime] = mimeContainer.split(':')[1].split(';');
  const u8arr = new Uint8Array(
    atob(b64)
      .split('')
      .map((c) => c.charCodeAt(0)),
  );
  return new Blob([u8arr], { type: mime });
};

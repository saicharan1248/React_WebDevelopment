import React, { useState } from "react";

export default function ImageUpload() {
  const [imageSrcs, setImageSrcs] = useState<string[]>([]); // State to hold image sources

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files) return; // Check if files are available

    const fileArray = Array.from(files);
    const imagePromises = fileArray.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result as string); // Ensure the result is a string
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises)
      .then((images) => {
        setImageSrcs(images); // Set the state with the loaded images
      })
      .catch((error) => {
        console.error("Error reading files:", error);
      });
  }

  return (
    <div>
      <input type="file" multiple onChange={handleImageUpload} />
      <div>
        {imageSrcs.map((src, index) => (
          <img key={index} src={src} alt={`Uploaded ${index}`} />
        ))}
      </div>
    </div>
  );
}

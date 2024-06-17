import { useState } from "react";

export default function ImageUpload() {
  const [imageSrcs, setImageSrcs] = useState([]);

  function handleImageUpload(event) {
    const files = event.target.files;
    const fileArray = Array.from(files);
    const imagePromises = fileArray.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises)
      .then((images) => {
        setImageSrcs(images);
      })
      .catch((error) => {
        console.error("Error reading files:", error);
      });
  }

  function handleCancel() {
    setImageSrcs([]);
  }

  return (
    <div>
      <h1>Image Upload</h1>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
      />
      <div>
        {imageSrcs.map((src, index) => (
          <img key={index} src={src} alt={`Uploaded ${index}`} />
        ))}
      </div>
      <button className="bg-red-800" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

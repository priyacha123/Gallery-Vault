"use client";

import { SearchResults } from "./page";
import UploadButton from "./upload-button";
import UploadGallery from "./upload-gallery";
import ImageGrid from "@/components/custom/image-grid";

export default function GalleryGrid({ images }: { images: SearchResults[] }) {
  return (
      <ImageGrid
        images={images}
        getImage={(imagedata: SearchResults) => {
          return (
            <UploadGallery
              key={imagedata.public_id}
              imagedata={imagedata}
              width="300"
              height="200"
              alt="Uploaded image"
            />
          );
        }}
      />
  );
}

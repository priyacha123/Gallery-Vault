"use client";

import UploadGallery from "@/components/custom/upload-gallery";
import ImageGrid from "@/components/custom/image-grid";
import { SearchResults } from "@/app/gallery/page";

export default function AlbumGrid({ images }: { images: SearchResults[] }) {
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

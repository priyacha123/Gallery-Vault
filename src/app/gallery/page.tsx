import UploadButton from "./upload-button";
import { v2 as cloudinary } from "cloudinary";
import UploadGallery from "./upload-gallery";

export type SearchResults = {
  resources: [{
    public_id: string;
    tags: string[];
  }]
}

export default async function GalleryPage() {
  const result = await cloudinary.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(1)
    .execute() as SearchResults;

  console.log(result);

  return (
    <section>
      <div className="flex justify-between pl-1 pr-4">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <UploadButton />
        </div>
        <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {result.resources.map((image) => (
            <UploadGallery
            key={image.public_id}
            imagedata={image}
            width="300"
            height="200"
            alt="Uploaded image"
            />
          ))}
      </div>
    </section>
  );
}

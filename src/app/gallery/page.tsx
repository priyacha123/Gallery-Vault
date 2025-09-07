import UploadButton from "./upload-button";
import { v2 as cloudinary } from "cloudinary";
import GalleryGrid from "./gallery-grid";

export type SearchResults = {
    public_id: string;
    tags: string[];
}

export default async function GalleryPage() {
  const result = await cloudinary.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute() as {resources: SearchResults[]};
    
  return (
    <section>
      <div className="flex justify-between pl-1 pr-4">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <UploadButton />
        </div>

        <GalleryGrid images={result.resources} />
    </section>
  );
}

import { v2 as cloudinary } from "cloudinary";
import UploadButton from "./upload-button";
import GalleryGrid from "./gallery-grid";
import { SearchForm } from "./search-form";

export type SearchResults = {
    public_id: string;
    tags: string[];
}

export default async function GalleryPage({
  searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) {
  const result = await cloudinary.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
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

        <SearchForm initialSearch={search} />

        <GalleryGrid images={result.resources} />
    </section>
  );
}

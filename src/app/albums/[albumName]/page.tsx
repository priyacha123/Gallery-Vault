import { v2 as cloudinary } from "cloudinary";
import AlbumGrid from "./album-grid";
import ForceRefresh from "@/components/force-refresh";

export type SearchResults = {
    public_id: string;
    tags: string[];
}

export default async function AlbumName({ params: { albumName } }:
    { params: { albumName: string } }
) {
  const result = await cloudinary.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute() as {resources: SearchResults[]};
    
  return (
    <section>
        <ForceRefresh />
      <div className="flex justify-between pl-1 pr-4">
        <h1 className="text-3xl font-bold">Album {albumName} </h1>
        </div>

        <AlbumGrid images={result.resources} />
    </section>
  );
}

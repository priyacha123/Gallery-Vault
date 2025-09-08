import { v2 as cloudinary } from "cloudinary";
import AlbumGrid from "./album-grid";
import ForceRefresh from "@/components/force-refresh";
import { SearchResults } from "@/app/gallery/page";

export default async function AlbumName({ params }:
    { params: { albumName: string } }
) {
  const { albumName } = await params;

  const result = await cloudinary.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute() as {resources: SearchResults[]};
    
  return (
    <section>
        <ForceRefresh />
      <div className="flex flex-col gap-8 pl-1 pr-4">
        <div className="flex justify-between">
        <h1 className=" text-3xl font-bold">Album {albumName} </h1>
        </div>
        <AlbumGrid images={result.resources} />
        </div>
    </section>
  );
}

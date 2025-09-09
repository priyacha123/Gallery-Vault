import { v2 } from "cloudinary";
import AlbumGrid from "./album-grid";
import ForceRefresh from "@/components/force-refresh";
import { SearchResults } from "@/app/gallery/page";

export default async function GalleryPage(props: { params: Promise<{ albumName: string }> }) {
  const { albumName } = await props.params;

  const result = (await v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResults[] };

  return (
    <section>
      <ForceRefresh />
      
      <div className="flex flex-col gap-8 pl-1 pr-4">
        <div className="flex justify-between">
          <h1 className=" text-3xl font-bold">Album {albumName} </h1>
        </div>
        {result.resources.length ? (
          <AlbumGrid images={result.resources} />
        ) : (
          <p>No images in this album yet.</p>
        )}
      </div>
    </section>
  );
}

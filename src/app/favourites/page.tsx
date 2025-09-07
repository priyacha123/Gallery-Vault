import { v2 as cloudinary } from "cloudinary";
import ForceRefresh from "@/components/force-refresh";
import { SearchResults } from "../gallery/page";
import FavouritePageList from "./favourite-list";

export default async function FavouritePage() {
  const result = await cloudinary.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute() as {resources: SearchResults[] };

  return (
    <section>
      <ForceRefresh />

      <div className="flex justify-between pl-1 pr-4">
        <h1 className="text-3xl font-bold">Favourites</h1>
        </div>
       
          <FavouritePageList initialResources={result.resources} />
    </section>
  );
}

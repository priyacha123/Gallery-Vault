import { v2 } from "cloudinary";
import { AlbumCard } from "./album-card";

export type Folders = {
    name: string;
      path: string;
}

export default async function AlbumPage() {
  const {folders} = (await v2.api.root_folders()) as {
    folders: Folders[];
  };

  return (
    <section>
      <div className="flex justify-between pl-1 pr-4">
        <h1 className="text-3xl font-bold">Albums</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {folders.map((folder) => (
          <AlbumCard key={folder.path} folder={folder} />
        ))}
        </div>


 
    </section>
  );
}

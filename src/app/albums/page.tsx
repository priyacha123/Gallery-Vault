import { v2 as cloudinary, v2 } from "cloudinary";
import { AlbumCard } from "./album-card";

export type Folders = {
    name: string;
      path: string;
}

export default async function AlbumPage() {
  const {folders} = (await v2.api.root_folders()) as {
    folders: Folders[];
  };

  console.log(folders);
  
    
  return (
    <section>
      <div className="flex justify-between pl-1 pr-4">
        <h1 className="text-3xl font-bold">Albums</h1>
        </div>

        <div className="grid grid-cols-4 gap-4">
        {folders.map((folder) => {
          return <AlbumCard key={folder.path} folder={folder} />
        })}
        </div>


 
    </section>
  );
}

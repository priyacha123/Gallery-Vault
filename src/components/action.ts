"use server"

import { Folders } from "@/app/albums/page";
import { SearchResults } from "@/app/gallery/page";
import { v2 } from "cloudinary";

export type ImageResource = SearchResults["resources"][number]; 

export async function addImageToAlbum(image: ImageResource, album: string) {
    await v2.api.create_folder(album);

    let parts = image.public_id.split("/");
    if (parts.length > 1) {
        parts = parts.slice(1); 
    }

    const publicId = parts.join("/");

    await v2.uploader.rename(image.public_id, `${album}/${publicId}`, {overwrite: true}
    )

    //     await v2.uploader.upload(image.public_id, {
    //     folder: album,
    //     public_id: image.public_id,
    //     overwrite: true
    // });
}

export async function cloudinaryFolders() {
      const { folders } = (await v2.api.root_folders()) as {
        folders: Folders[];
      };

      return folders;
}
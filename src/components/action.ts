"use server"

import { SearchResults } from "@/app/gallery/page";
import { v2 } from "cloudinary";

export async function addImageToAlbum(image: SearchResults, album: string) {
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
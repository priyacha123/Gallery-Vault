"use server";

import { v2 } from "cloudinary";

export async function setAsFavouriteAction(
  publicId: string,
  isFavourite: boolean,
) {
    if (!isFavourite) {
        await v2.uploader.add_tag("favourite", [publicId]);
    }
    else {
        await v2.uploader.remove_tag("favourite", [publicId]);
    }
}

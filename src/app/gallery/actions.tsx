"use server";

import { v2 } from "cloudinary";
import { revalidatePath } from "next/cache";

export async function setAsFavouriteAction(
  publicId: string,
  isFavourite: boolean
) {
    if (!isFavourite) {
        await v2.uploader.add_tag("favourite", [publicId]);
    }
    else {
        await v2.uploader.remove_tag("favourite", [publicId]);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath("/gallery");
}

"use client";

import { Heart } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { setAsFavouriteAction } from "./actions";
import { useTransition } from "react";
import { SearchResults } from "./page";

export default function UploadGallery(props: any & { imagedata: SearchResults }) {
  const [transition, startTransition] = useTransition();

  const { imagedata } = props;

  const isFavourited = imagedata.tags.includes("favourite");


  return (
    <div className="relative">
      <CldImage {...props} src={imagedata.public_id} />
      {isFavourited ? (
        <Heart
          onClick={() => {
            startTransition(() => {
              setAsFavouriteAction(imagedata.public_id, false);
            });
          }}
          className="absolute right-2 top-2 hover:text-red-500 cursor-pointer "
        />
        
      ) : (
        <Heart
          onClick={() => {
            startTransition(() => {
              setAsFavouriteAction(imagedata.public_id, true);
            });
          }}
          className="absolute right-2 top-2 "
        />
      )}
    </div>
  );
}

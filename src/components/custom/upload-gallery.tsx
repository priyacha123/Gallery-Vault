"use client";

import { setAsFavouriteAction } from "@/app/gallery/actions";
import { SearchResults } from "@/app/gallery/page";
import { Heart, HeartHandshake } from "lucide-react";
import { CldImage, CldImageProps } from "next-cloudinary";
import { useEffect, useState, useTransition } from "react";
import { ImageMenu } from "./image-menu";
import { UploadResult } from "@/app/page";

// Error:
/*
React does not recognize the `imageData` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `imagedata` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
*/
export default function UploadGallery(
  props: {
    imagedata?: SearchResults;
    onUnheart?: (unheartdResource: SearchResults) => void;
    onUpload?: (result: UploadResult) => void;
    uploadPreset?: string;
  } & Partial<Omit<CldImageProps, "src">>
) {
  const [, startTransition] = useTransition();

  const { imagedata, onUnheart, alt, ...imageProps } = props;
  
  // const [isFavourited, setIsFavourited] = useState(
  //   imagedata.tags.includes("favourite")
  // );

    // ✅ SAFE default
  const [isFavourited, setIsFavourited] = useState(false);

  // ✅ Sync when image arrives
  useEffect(() => {
    if (imagedata) {
      setIsFavourited(imagedata.tags.includes("favourite"));
    }
  }, [imagedata]);

  if (!imagedata) return null;
  
  return (
    <>
      <div className="relative">
        <CldImage {...imageProps} src={imagedata.public_id}  alt={alt ?? "Gallery image"} />
        {isFavourited ? (
          <HeartHandshake
            onClick={() => {
              onUnheart?.(imagedata);
              setIsFavourited(false);
              startTransition(() => {
                setAsFavouriteAction(imagedata.public_id, false);
              });
            }}
            className="absolute left-2 top-2 text-red-500 cursor-pointer"
          />
        ) : (
          <Heart
            onClick={() => {
              setIsFavourited(true);
              startTransition(() => {
                setAsFavouriteAction(imagedata.public_id, true);
              });
            }}
            className="absolute left-2 top-2 cursor-pointer"
          />
        )}
        <ImageMenu image={imagedata} />
      </div>
    </>
  );
}

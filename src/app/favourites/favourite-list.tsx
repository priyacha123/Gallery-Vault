'use client'

import { useEffect, useState } from "react";
import { SearchResults } from "../gallery/page";
import UploadGallery from "../gallery/upload-gallery";
import ImageGrid from "@/components/custom/image-grid";

export default function FavouritePageList({
  initialResources,
}: {
  initialResources: SearchResults[];
}) {
  const [resources, setResources] = useState(initialResources);

  // useEffect(() => {
  //   setResources(initialResources)
  // }, [initialResources])

  return (
    <>
      <ImageGrid 
            images={resources}
            getImage={(imagedata: SearchResults) => {
              return( <UploadGallery
            key={imagedata.public_id}
            imagedata={imagedata}
            width="300"
            height="400"
            alt="Uploaded image"
            onUnheart={(unheartdResource) => {
               setResources((currentResources) => 
                currentResources.filter((resource) => resource.public_id !== unheartdResource.public_id
                )
               )
              }}
              />
              )
            }}
            />
          </>
  );
}

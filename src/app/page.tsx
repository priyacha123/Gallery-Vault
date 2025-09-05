"use client";

import { CldImage } from "next-cloudinary";


export default function Home({ imageid}: { imageid: string }) {
  return (
    <>
      {imageid && (
        <CldImage
          width="400"
          height="300"
          src={imageid}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </>
  );
}

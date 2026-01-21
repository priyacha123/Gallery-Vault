"use client";

import { WebcamPixelGridDemo } from "@/components/custom/home-webGrid";
// import UploadGallery from "@/components/custom/upload-gallery";
// import { CldImage } from "next-cloudinary";
// import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  }
  event: "success";
}

export default function Home() {
  // const [imageid, setImageId] = useState("");

  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
        <main>
      {/* <UploadGallery
        onUpload={(result: UploadResult) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="fe-gallery"
      />
      {imageid && (
        <CldImage
          width="400"
          height="300"
          src={imageid}
          sizes="100vw"
          alt="Description of my image"
        />
      )} */}
      <WebcamPixelGridDemo />
      </main>
    </>
  );
}

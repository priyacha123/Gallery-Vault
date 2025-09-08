"use client";

import UploadGallery from "@/components/custom/upload-gallery";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  }
  event: "success";
};


export default function Home() {
  const [imageid, setImageid] = useState("");

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadGallery
        onUpload={(result: UploadResult) => {
          setImageid(result.info.public_id);
        }}
        uploadPreset="giomsr4s"
      />
      {imageid && (
        <CldImage
          width="400"
          height="300"
          src={imageid}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
      </main>
    </>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";


type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function GalleryPage() {
  const [imageId, setImageId] = useState("");

  return (

    <section className="w-full pl-4 pr-4">
      <div className="flex justify-between w-full">
        <h1 className="text-lg font-bold">Gallery</h1>
        <Button asChild >
          <div className="cursor-pointer flex gap-2">
            <Upload />
        <CldUploadButton
          onSuccess={(results: UploadResult) => {
            setImageId(results.info.public_id);
          }}
          uploadPreset="fe-gallery"
          imageid={imageId}
          />
          </div>
            </Button>
      </div>
    </section>
  );
}

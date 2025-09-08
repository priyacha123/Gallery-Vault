"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

export default function UploadButton() {
  const router = useRouter();

  return (
    <Button asChild>
      <div className="flex items-center gap-2">

        <Upload />
        <CldUploadButton
          onUpload={() => {
            setTimeout(() => {
              router.refresh();
            }, 2000);
          }}
          uploadPreset="fe-gallery"
          />
          </div>
    </Button>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";

export default function UploadButton({
  onUpload,
}: {
  onUpload: (result: any) => void;
}) {
  return (
    <CldUploadButton
      uploadPreset="fe-gallery"
      onSuccess={(result) => {
        onUpload(result);
      }}
    >
      <Button
        type="button"
        className="flex items-center gap-2"
        variant="outline"
      >
        <Upload className="w-4 h-4" />
        Upload
      </Button>
    </CldUploadButton>
  );
}
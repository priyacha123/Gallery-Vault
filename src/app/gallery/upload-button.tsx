"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

// type UploadResult = {
//   info: {
//     public_id: string;
//   };
//   event: "success";
// };

export default function UploadButton() {
  const router = useRouter();

  return (
    <Button asChild>
      <div className="cursor-pointer flex gap-2">
        <Upload />
        <CldUploadButton
          onSuccess={() => {
            setTimeout(() => {
              console.log("refresh");
              router.refresh();
            }, 1000);
          }}
          uploadPreset="fe-gallery"
        />
      </div>
    </Button>
  );
}

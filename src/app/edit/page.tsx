"use client";

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) {
  console.log(publicId);

  const [transformation, setTransformation] = useState<
    undefined | "generative_fill"
  >();

  return (
    <>
      <section>
        <div className="flex justify-between pl-1 pr-4">
          <h1 className="text-3xl font-bold">Edit {publicId}</h1>
        </div>

        <Button
          onClick={() => {
            setTransformation("generative_fill");
          }}
        >
          generative Fill
        </Button>

        <div className="grid grid-cols-2 gap-12">
            <CldImage
            src={publicId}
            width="300"
            height="300"
            alt="Sample"
            crop="pad"
            fillBackground
          />

        {transformation === "generative_fill" && (
            <CldImage
            src={publicId}
            width="300"
            height="300"
            alt="Sample"
            crop="pad"
            fillBackground
            />
        )}
        </div>
      </section>
    </>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) {
  console.log(publicId);

  const [transformation, setTransformation] = useState<
    undefined | "generative_fill" | "removeBackground" | "enhance" | "gravity" | "replaceBackground" | "zoom" | "blur" | "grayscale"
    | "pixelate"
  >();

    const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");
  return (
    <>
      <section>
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold m-4">Edit {publicId}</h1>
          </div>

           <div className="flex gap-4 m-4 justify-center">
          <Button onClick={() => setTransformation(undefined)}>
            Clear All
          </Button>

        <Button
          onClick={() => {
            setTransformation("generative_fill");
            setPrompt(pendingPrompt);
          }}
        >
          {" "}
          Generative Fill
        </Button>
        
        <Button
          onClick={() => {
            setTransformation("replaceBackground");
            setPrompt(pendingPrompt);
          }}
        >
          {" "}
          ReplaceBackground
        </Button>

        <Label>Prompt</Label>
            <Input
            className="w-100"
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}
            />
          </div>

            <div className="grid grid-cols-4 gap-4 m-4 justify-center">
        <Button
          onClick={() => {
            setTransformation("removeBackground");
          }}
        >
          {" "}
          RemoveBackground
        </Button>

        <Button
          onClick={() => {
            setTransformation("enhance");
          }}
        >
          {" "}
          Enhance
        </Button>

        <Button
          onClick={() => {
            setTransformation("gravity");
          }}
        >
          {" "}
          Gravity
        </Button>

         <Button onClick={() => setTransformation("grayscale")}>
            Convert to Gray
          </Button>

            <Button onClick={() => setTransformation("pixelate")}>
            Pixelate
          </Button>

        <Button
          onClick={() => {
            setTransformation("zoom");
          }}
        >
          {" "}
          Zoom
        </Button>

        <Button
          onClick={() => {
            setTransformation("blur");
          }}
        >
          {" "}
          Blur
        </Button>
        </div>

        <div className="grid grid-cols-2 gap-12 m-4">
          <CldImage
            src={publicId}
            width="300"
            height="300"
            alt="Sample"
            crop="pad"
            fillBackground={{
                prompt,
              }}
          />

          {transformation === "removeBackground" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              removeBackground
              alt="Description of my image"
            />
          )}

            {transformation === "blur" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              blur="800"
              alt="some image"
            />
          )}

          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              grayscale
              alt="some image"
            />
          )}

          {transformation === "enhance" && (
            <CldImage
              src={publicId}
             width="1200"
              height="1400"
              enhance
              alt="Description of my image"
            />
          )}

          {transformation === "gravity" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              gravity="south"
              alt="Description of my image"
            />
          )}

          {transformation === "replaceBackground" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              replaceBackground
              alt="Description of my image"
            />
          )}

          {transformation === "zoom" && (
            <CldImage
              src={publicId}
             width="1200"
              height="1400"
              zoom="1.75"
              alt="Description of my image"
            />
          )}
        </div>
      </section>
    </>
  );
}

'use client'

import { SearchResults } from "@/app/gallery/page";
import { ReactNode } from "react";

const MAX_COLUMNS = 4;

export default function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResults[];
  getImage: (imagedata: SearchResults) => ReactNode;
}) {
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex);
  }

  return (
    <div className="m-5 grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map((getImage))}
          </div>
        )
      )}
    </div>
  );
}

"use client"

import { v2 as cloudinary } from "cloudinary";
// import UploadButton from "./upload-button";
// import GalleryGrid from "./gallery-grid";
// import { SearchForm } from "./search-form";
import ForceRefresh from "@/components/force-refresh";
import UploadButton from "../gallery/upload-button";
import { SearchForm } from "../gallery/search-form";
import { useRouter } from "next/navigation";

export type SearchResults = {
    public_id: string;
    tags: string[];
}

export default async function UploadPage({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/gallery');
    router.refresh(); 
  }
  //  const search = searchParams?.search ?? "";
   
  // const result = await cloudinary.search
  //   .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
  //   .sort_by("created_at", "desc")
  //   .with_field("tags")
  //   .max_results(30)
  //   .execute() as {resources: SearchResults[]};
    
  return (
    <section className="w-full">
      <ForceRefresh />
      <div className="flex justify-between pl-1 pr-4">
        <h1 className="text-3xl font-bold">Upload</h1>
        </div>
        <div className="flex items-center justify-center m-20 h-50 border-2 border-dashed border-gray-300 rounded-lg ">
        <UploadButton onUpload={handleRedirect}/>
        </div>

        {/* <SearchForm initialSearch={search} /> */}

        {/* <GalleryGrid images={result.resources} /> */}
    </section>
  );
}

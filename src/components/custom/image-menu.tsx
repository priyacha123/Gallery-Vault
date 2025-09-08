import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Pencil } from "lucide-react"
import { AddToAlbumDialog } from "./add-to-album"
import { SearchResults } from "@/app/gallery/page"
import Link from "next/link"
import { Button } from "../ui/button"
import { useState } from "react"

export function ImageMenu({ image }:  {image: SearchResults}) {

  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-2 right-2">
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" >
        <DropdownMenuItem asChild>
          <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
           <Button
              className="cursor-pointer flex justify-start pl-4"
              variant="ghost"
            >
        <Pencil className="ml-3 mr-2 w-8 h-8" />
        <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
        Edit
        </Link> 
            </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

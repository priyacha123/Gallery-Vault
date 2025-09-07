"use client"

import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { AddToAlbumDialog } from "./add-to-album"
import { SearchResults } from "@/app/gallery/page"

export function ImageMenu({ image }:  {image: SearchResults}) {

  const [open, setOpen] = React.useState(false);

  return (
    <div className="absolute top-2 right-2">
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild className="h-7">
            <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent asChild >
          <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

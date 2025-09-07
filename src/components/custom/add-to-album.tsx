import { SearchResults } from "@/app/gallery/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Folder } from "lucide-react";
import { useState } from "react";
import { addImageToAlbum } from "../action";

export function AddToAlbumDialog({ image, onClose }:  {image: SearchResults; onClose: () => void}) {
  const [albumName, setAlbumName] = useState(" ");
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(newOpenState) => {
      setOpen(newOpenState);
      if (!newOpenState) {
        onClose()
      }
    }}>
      <form>
        <DialogTrigger asChild>
          <Button variant="ghost">
            <Folder className="mr-1 h-4 w-4" />
            <span> Add to Album</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add to Album</DialogTitle>
            <DialogDescription>
              Type an album name to add this image.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Album
              </Label>
              <Input
                onChange={(e) => setAlbumName(e.target.value)}
                id="album-name"
                name={albumName}
                defaultValue="Family"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={async() => {
                console.log(image);
                setOpen(false)
                await addImageToAlbum(image, albumName)
            }} type="submit">
              Add to Album
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

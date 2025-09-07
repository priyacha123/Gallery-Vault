import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Folders } from "./page"
import Link from "next/link"

export function AlbumCard({ folder }: { folder: Folders }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>
          All your {folder.name} images
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button>
            <Link href={`/albums/${folder.name}`} />
            View Album
        </Button>
      </CardFooter>
    </Card>
  )
}

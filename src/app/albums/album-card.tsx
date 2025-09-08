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
  console.log(folder.name);
  
  return (
    <Card className="gap-4 m-4">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>
          All your {folder.name} images
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
            <Link href={`/albums/${folder.name}`}>
            View Album
            </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

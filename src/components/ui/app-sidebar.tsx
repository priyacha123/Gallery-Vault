import { Album, AlbumIcon, Archive, Heart, Home, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Header from "../custom/Header"
import Link from "next/link"
import { Folders } from "@/app/albums/page"
import { v2 } from "cloudinary"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Album",
    url: "/albums",
    icon: AlbumIcon,
  },
  {
    title: "Gallery",
    url: "/gallery",
    icon: Album,
  },
  {
    title: "Favorite",
    url: "/favourites",
    icon: Heart,
  },
  {
    title: "Archived",
    url: "/archive",
    icon: Archive,
  },
  {
    title: "manage",
    url: "/Manage",
    icon: Settings,
  },
]

export  function AppSidebar() {
  // const { folders } = (await v2.api.root_folders()) as {
  //   folders: Folders[];
  // };
  return (
    <>
    <Sidebar>
    <Header />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Discover</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                {/* {item.title === "Album" && folders.length > 0 && (
                    <div className="ml-6 mt-1 flex flex-col gap-1">
                      {folders.map((folder) => (
                        <Link
                          key={folder.path}
                          href={`/albums/${folder.path}`}
                          className="text-sm text-gray-600 hover:text-gray-900"
                        >
                          {folder.name}
                        </Link>
                      ))}
                    </div>
                  )} */}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </>

  )
}
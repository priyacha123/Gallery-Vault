'use client'

import { Album, AlbumIcon, Archive, Heart, Home, Settings, ChevronDown, ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Header from "../custom/Header";
import Link from "next/link";
import { Button } from "./button";
import { Folders } from "@/app/albums/page";
import { useState } from "react";

// Menu items except albums
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
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
    title: "Manage",
    url: "/manage",
    icon: Settings,
  },
];

export function AppSidebarClient( { folders }: { folders: Folders[] } ) {

  const [showAlbums, setShowAlbums] = useState(false);

  return (
    <Sidebar>
      <Header />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Discover</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Albums Toggle Button */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setShowAlbums((prev) => !prev)}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-2">
                    <AlbumIcon className="h-4 w-4" />
                    <span>Albums</span>
                  </div>
                  {showAlbums ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </SidebarMenuButton>
              </SidebarMenuItem>

              {showAlbums && folders.length > 0 && (
                <>
                  <SidebarGroupLabel className="mt-2">My Albums</SidebarGroupLabel>
                  {folders.map((folder) => (
                    <Button
                      variant="ghost"
                      asChild
                      key={folder.name}
                      className="w-full justify-start flex gap-2 pl-8"
                    >
                      <Link href={`/albums/${folder.path}`}>{folder.name}</Link>
                    </Button>
                  ))}
                </>
              )}

              {/* Other Menu Items */}
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

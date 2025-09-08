import { cloudinaryFolders } from "../action";
import { AppSidebarClient } from "./app-sidebar-client";



export async function AppSidebar() {
  const folders  = await cloudinaryFolders();

  <AppSidebarClient folders={folders} />


}

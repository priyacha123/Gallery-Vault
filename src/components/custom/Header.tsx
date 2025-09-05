import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function Header() {
  return (
    <>
      <div className="flex w-full items-center justify-between p-4 border-b border-gray-200">
        <div className="title">
          <h1 className="font-bold text-xl">Gallery Vault</h1>
        </div>
      </div>
    </>
  );
}

export function AvatarNav() {
return (
    <>
     <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
    </>
)
} 

export function HeaderAvatar() {
  return (
    <>
      <div className="flex w-full items-center justify-between p-4 border-b border-gray-200">
        <div className="title">
          <h1 className="font-bold text-xl">Gallery Vault</h1>
        </div>
        <div className="avatar">
            <AvatarNav />
        </div>
      </div>
    </>
  );
}
"use client";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Home() {
  const availableForProjects = true;
  const jobTitle =  "Backend Engineer";
  // const mainTitle = "Building end-to-end digital solutions with a focus on robust and scalable system architecture."
  const description = "Transforming complex problems into efficient code, one line at a time.";

  return (
    <main className="container mx-auto h-screen overflow-y-hidden flex flex-col justify-between">
      <div className="flex justify-between items-center p-4 text-2xl font-lora">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-2xl" href="/">Home</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="border-green border-2 text-dark-green px-2">
          <p>{availableForProjects ? "Available for projects" : ""}</p>
        </div>
      </div>
      <div className="flex gap-12 justify-between items-end h-fit text-material-black">
        <div className="relative md:w-1/3 h-fit">
          <Image
            src="/img/jas_right_crop_larger.png"
            alt="Profile Picture"
            width={822}
            height={1210}
          />
          <div className="absolute bottom-12 left-0 flex flex-col gap-4 font-poppins">
            <h1 className="bg-slate-gray text-2xl font-bold tracking-wider">Rafi Ikhwan Purnama</h1>
            <p className="bg-slate-gray text-xl">{jobTitle}</p>
          </div>
        </div>
        <div className="md:w-2/3 relative p-12">
          <div className=" flex flex-col gap-4 items-center">
            <p className="text-8xl md:w-3/4 text-justify">Building <b>end</b>-to-<b>end</b> digital solutions with a focus on robust and <b>scalable</b> system <b>architecture</b>.</p>
            <p className="text-2xl">{description}</p>
          </div>
          <div className="grid grid-cols-6 grid-rows-6 gap-12 absolute -z-10 top-0 right-0 opacity-70">
            {Array.from({ length: 36 }, (_, i) => (
              <div 
                key={i} 
                className="bg-lightest-gray w-28 h-28"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}


import MarqueeDemo from "./MarqueeDemo/page";
import { AnimatedBeamDemo } from "./components/AnimatedBeam";
import { AvatarDemo } from "./components/AvatarDemo";
import { CarouselDemo } from "./components/CarouselDemo";
import { DockDemo } from "./components/Dockdemo";
import HomePage from "./components/HomePage";
import { IconCloudDemo } from "./components/IconCloudDemo";

import { ResizableDemo } from "./components/Resizable";
import { NavMenu } from "./components/magicui/NavMenu";
import TypingAnimation from "./components/magicui/typing-animation";

export default function Home() {
  return (
   <>
 {/* <div className="border justify-around flex py-3">
  <div className="flex">
  <AvatarDemo/>
  <h6 className="p-2 font-bold ml-2">TheraFee</h6>
  </div>
  <NavMenu/>
 </div> */}
 <HomePage/>

{/* <IconCloudDemo/> */}
   </>
  );
}

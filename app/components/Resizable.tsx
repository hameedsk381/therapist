import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { AnimatedBeamDemo } from "./AnimatedBeam"
  
  export function ResizableDemo() {
    return (
      <ResizablePanelGroup
        direction="horizontal"
       
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex  items-center justify-center p-1">
          <AnimatedBeamDemo/>
          </div>
        </ResizablePanel>
        <ResizableHandle />
      
      </ResizablePanelGroup>
    )
  }
  
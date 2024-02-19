"use client"

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function Home() {

  return (
    <div className="gap-2 flex items-center mt-5">
      Hello World
      <Button onClick={() => {
        window.location.href = '/testpage'
      }}>Go to Page 2 <ChevronUp/> </Button>
    </div>
  )
}

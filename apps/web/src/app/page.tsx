import { AnimatedText } from "@/components/animated-text";
import { CopyText } from "@/components/copy-text";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@v1/ui/tooltip";

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#d0d0d0] to-[#3c3c3c]">Analyst Pro</h1>
      <p className="text-zinc-600">Professional Company Analysis</p>
    </div>
  );
}

import { AnimatedText } from "@/components/animated-text";
import { CopyText } from "@/components/copy-text";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import SectionOne from "@/components/section-1";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@v1/ui/tooltip";

export default function Page() {
  return (
    <div className=" w-screen flex flex-col gap-5 items-center justify-center">
      <Hero/>
      <Footer />
      <SectionOne/>
    </div>
  );
}

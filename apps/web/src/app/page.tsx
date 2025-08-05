import { AnimatedText } from "@/components/animated-text";
import { CopyText } from "@/components/copy-text";
import Details from "@/components/Details";
import { Footer } from "@/components/footer";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import SectionOne from "@/components/section-1";
import SectionTwo from "@/components/section-2";
import Pricing from "@/components/section-pricing";
import SectionWhite from "@/components/section-white";
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
      <SectionWhite/>
      <SectionTwo/>
      <Grid/>
      <Details/>
      <Pricing/>
    </div>
  );
}

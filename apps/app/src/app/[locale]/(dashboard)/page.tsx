import AreaChart from "@/components/AreaChart";
import ResultHeader from "@/components/Research/result-header.";
import Search from "@/components/Search";
import { SignOut } from "@/components/sign-out";
import { getI18n } from "@/locales/server";
import { getUser } from "@v1/supabase/queries";

export const metadata = {
  title: "Home",
};

export default async function Page() {
  const { data } = await getUser();
  const t = await getI18n();

  return (
    <div className="min-h-screen w-screen flex flex-col  items-center dark:bg-[#171717] bg-[#d6d6d6]">
      <div className="max-w-5xl w-full flex flex-col justify-center items-center">
      <div className="mt-40 mb-10  " >
        <h1 className="">Analyst Pro</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Search/>
        <ResultHeader/>
        <AreaChart/>  
      
      </div>
      </div>
    </div>
  );
}

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
    <div className="h-screen w-screen flex flex-col items-center ">
      <div className="mt-40 mb-10">
        <h1 className="">Analyst Pro</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Search/>
       

      
      </div>
    </div>
  );
}

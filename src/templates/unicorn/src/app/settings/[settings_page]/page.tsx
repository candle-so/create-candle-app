import { Navigation } from "@/components/navigation";
import { Settings } from "./_settings";
import { getMe } from "@/lib/get_user";

export default async function SettingsPage({ params }: { params: { settings_page: string } }) {
  const _me = await getMe();

  return (
    <main className="">
      <Navigation variant="authenticated" me={_me} />
      <Settings settingsPage={params.settings_page} />
    </main>
  );
}

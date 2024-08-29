import { Navigation } from "@/components/navigation";
import { Settings } from "./_settings";

export default async function SettingsPage({ params }: { params: { settings_page: string } }) {
  return (
    <main className="">
      <Navigation />
      <Settings settingsPage={params.settings_page} />
    </main>
  );
}

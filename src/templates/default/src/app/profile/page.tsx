// app/profile/page.tsx
import UserMenu from "@/components/user_menu";
import ProfileInfo from "@/components/profile_info";
import PlantListings from "@/components/plant_listings";
import PurchaseHistory from "@/components/purchase_history";
import Navigation from "@/components/navigation";

export default function ProfilePage() {
  return (
    <main>
      <Navigation />
      <UserMenu />
      <div className="container mx-auto p-6">
        <ProfileInfo />
        <PlantListings />
        <PurchaseHistory />
      </div>
    </main>
  );
}

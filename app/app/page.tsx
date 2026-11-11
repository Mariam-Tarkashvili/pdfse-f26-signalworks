// Copy to: app/app/page.tsx
// Sends people to the first journey step.

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/canteen");
}

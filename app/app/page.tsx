import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        background: "#0f1419",
        color: "#f4f1ea",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <Link href="/canteen" style={{ color: "#f4f1ea", fontSize: 18 }}>
        Open canteen wait →
      </Link>
    </main>
  );
}

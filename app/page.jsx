import Link from "next/link";

export default function VacationalReality() {
  return (
    <main style={{ padding: "3rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "600" }}>Vacational Reality</h1>

      <p style={{ marginTop: "1rem", fontSize: "0.95rem", lineHeight: "1.6" }}>
        Vacational Reality is your dream life made practical—where work is
        automated, income is stabilized, and your time is freed for what you
        actually want to experience.
      </p>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <Link
          href="/matrix"
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            background: "#2563EB",
            color: "#EFF6FF",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Enter Passive Income Matrix
        </Link>

        <Link
          href="/oasis"
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            background: "#10B981",
            color: "#022C22",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Enter Oasis
        </Link>
      </div>
    </main>
  );
}
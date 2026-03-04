import Link from "next/link";

const tiles = [
  {
    title: "Content Automation",
    description:
      "Turn ideas into automated content systems that generate traffic, leads, and income while you sleep.",
    path: "/matrix/content-automation",
  },
  {
    title: "Affiliate Empire",
    description:
      "Build a scalable affiliate ecosystem using AI-driven content, funnels, and automated recommendation engines.",
    path: "/matrix/affiliate-empire",
  },
  {
    title: "AI-Driven Investments",
    description:
      "Use AI tools to automate research, track opportunities, and build long-term passive income portfolios.",
    path: "/matrix/ai-driven-investments",
  },
  {
    title: "Digital Asset Creation",
    description:
      "Create ebooks, templates, guides, and digital products using AI—then automate the sales process.",
    path: "/matrix/digital-asset-creation",
  },
  {
    title: "Dropshipping Optimization",
    description:
      "Use AI to find winning products, automate store management, and streamline fulfillment.",
    path: "/matrix/dropshipping-optimization",
  },
];

export default function PassiveIncomeMatrix() {
  return (
    <main style={{ padding: "3rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "600" }}>
        Passive Income Matrix: The Operating System of Vacational Reality
      </h1>

      <p style={{ marginTop: "1rem", maxWidth: "700px", fontSize: "0.95rem", lineHeight: "1.6" }}>
        The Passive Income Matrix is the core engine that powers your Vacational
        Reality. It stabilizes your starting point, activates your income
        pathways, and gives you the tools, systems, and automation needed to
        build a life where freedom is the default—not the reward.
      </p>

      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>How the Matrix Works</h2>
        <p style={{ marginTop: "0.75rem", fontSize: "0.9rem", lineHeight: "1.6" }}>
          <strong>Stabilize</strong> — Identify your starting point and align
          you with the simplest income pathway.
          <br />
          <strong>Activate</strong> — Load the tools, templates, and
          automations needed to begin earning.
          <br />
          <strong>Expand</strong> — Unlock deeper modules, advanced systems, and
          future AI agents.
        </p>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Matrix Navigator</h2>

        <div
          style={{
            marginTop: "1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {tiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  background: "#111827",
                  color: "#F9FAFB",
                  padding: "1.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                  transition: "transform 0.15s ease, boxShadow 0.15s ease",
                }}
              >
                <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>{tile.title}</h3>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>{tile.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Enter Oasis</h2>
        <p style={{ marginTop: "0.75rem", fontSize: "0.9rem", lineHeight: "1.6" }}>
          Once your income foundation is active, you’ll enter Oasis—the core of
          Vacational Reality where you explore what you truly want to
          understand, learn, create, or enjoy.
        </p>

        <Link
          href="/oasis"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            background: "#10B981",
            color: "#022C22",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Enter Oasis
        </Link>
      </section>
    </main>
  );
}
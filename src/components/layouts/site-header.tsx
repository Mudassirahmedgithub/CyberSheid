import Link from "next/link";

export default function SiteHeader() {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 32px",
      borderBottom: "1px solid #ccc",
      backgroundColor: "#fff",
    },
    logo: {
      fontSize: "22px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    nav: {
      display: "flex",
      gap: "24px",
      fontSize: "16px",
    },
    link: {
      cursor: "pointer",
      textDecoration: "none",
      color: "black",
    },
  };

  return (
    <header style={styles.header}>
      {/* Left - Logo */}
      <Link href="/" style={styles.logo}>
        Cybershield
      </Link>

      {/* Right - Navigation */}
      <nav style={styles.nav}>
        <Link href="/predict" style={styles.link}>
          Predict
        </Link>
        <Link href="/about" style={styles.link}>
          About
        </Link>
        <Link href="/download" style={styles.link}>
          Download
        </Link>
        <Link href="/developers" style={styles.link}>
          Developers
        </Link>
      </nav>
    </header>
  );
}
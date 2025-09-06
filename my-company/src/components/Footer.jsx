function Footer() {
  return (
    <footer style={{
      background: "#f1f1f1",
      textAlign: "center",
      padding: "1rem",
      marginTop: "2rem"
    }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

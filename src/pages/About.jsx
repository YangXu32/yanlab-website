const About = () => {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        color: "#fff",
        padding: "4rem 0",
        fontFamily: "Inter, Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#ffd700",
          }}
        >
          About Yan Lab
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "#ddd",
            marginBottom: "2rem",
          }}
        >
          The Yan Lab at Arizona State University is dedicated to advancing
          nanoscience and nanotechnology through innovative design of
          DNA- and RNA-based nanostructures. Our interdisciplinary team
          integrates principles of chemistry, biology, and engineering to
          develop programmable biomolecular systems for applications in
          diagnostics, therapeutics, and bioengineering.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "#ddd",
          }}
        >
          Led by Professor Hao Yan, our research has pioneered the field of
          structural DNA nanotechnology and continues to push the boundaries of
          molecular design and nanoscale self-assembly. We collaborate widely
          across disciplines to explore new frontiers in molecular medicine and
          materials science.
        </p>

        <div
          style={{
            marginTop: "2rem",
            borderTop: "1px solid #333",
            paddingTop: "1rem",
            fontSize: "0.95rem",
            color: "#aaa",
          }}
        >
          <p>
            <strong>Location:</strong> Biodesign Center for Molecular Design and
            Biomimetics, Arizona State University, Tempe, AZ
          </p>
          <p>
            <strong>Contact:</strong> hao.yan@asu.edu
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

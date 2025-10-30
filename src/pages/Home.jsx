import React from "react";

/* ================================
   Header Section
================================= */
const HeaderSection = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "400px",
        marginBottom: 0,
        marginTop: "64px",
        overflow: "hidden",
      }}
    >
      {/* Left Text Section */}
      <div
        style={{
          flex: 1,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: "6vw",
          color: "#22223b",
          height: "100%",
        }}
      >
        {/* Top Line */}
        <div
          style={{
            width: "220px",
            height: "6px",
            background: "#FFC627",
            marginBottom: "2rem",
            borderRadius: 0,
            opacity: 0.9,
          }}
        />
        {/* Title */}
        <div
          style={{
            fontSize: "2.2rem",
            fontWeight: 400,
            marginBottom: "1.2rem",
            color: "#000",
            fontFamily: "Georgia, serif",
            lineHeight: 1.1,
          }}
        >
          The Yan Research Group
        </div>
        {/* Description */}
        <div
          style={{
            fontSize: "1.1rem",
            fontWeight: 400,
            color: "#444",
            maxWidth: "90%",
            marginBottom: "2rem",
            fontFamily: "Inter, Arial, sans-serif",
            lineHeight: 1.5,
          }}
        >
          Nucleic Acid Biodesign and Biologics Lab using Nature's Design Rules
          as Inspiration to Expand the Frontiers of Biomedicine, Material
          Science and Nanotechnology
        </div>
      </div>

      {/* Right Image */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 0,
          height: "100%",
        }}
      >
        <img
          src="/cancer.jpg"
          alt="Cancer"
          style={{
            width: "110%",
            height: "105%",
            objectFit: "cover",
            marginRight: "-5%",
            transform: "translate(0, 4%)",
          }}
        />
      </div>
    </div>
  );
};

/* ================================
   Footer Section
================================= */
const FooterSection = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "static",
        left: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "1rem",
        letterSpacing: "0.02em",
        zIndex: 10,
        padding: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          background: "#111",
          color: "#fff",
          padding: "0.5rem 0 0.3rem 0",
          fontFamily: "Inter, Arial, sans-serif",
          marginTop: 0,
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.08rem",
              color: "#fff",
              fontSize: "1.0189rem",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            <span>Biodesign Center for Molecular Design and Biomimetics</span>
            <span>1001 S McAllister Ave, Tempe, AZ 85287</span>
            <span>Phone: 480.727.8570 / Fax: 480.965.2747</span>
            <span>Email: hao.yan@asu.edu</span>
            <span
              style={{
                fontWeight: 500,
                marginTop: "0.18rem",
                fontSize: "1.0189rem",
              }}
            >
              Copyright{" "}
              <span
                style={{
                  fontSize: "1.2rem",
                  verticalAlign: "middle",
                  marginRight: "0.18rem",
                }}
              >
                &copy;
              </span>{" "}
              2025 Hao Yan
            </span>
            <span style={{ fontWeight: 500, fontSize: "1.0189rem" }}>
              Created by Deeksha
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ================================
   Main Home Page
================================= */
const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        background: "#fff",
      }}
    >
      <HeaderSection />

      {/* Featured Publications */}
      <section
        style={{
          width: "100%",
          background: "#fff",
          padding: "3.5rem 0 6.5rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Georgia, serif",
            fontSize: "2rem",
            color: "#3a2d4d",
            marginBottom: "2.5rem",
            fontWeight: 400,
          }}
        >
          Featured Publications
        </h2>

        {/* Publication Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "3.5rem",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto 2.5rem auto",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              title:
                "DNA Origami with Complex Curvatures in Three-Dimensional Space",
              journal: "Science",
              year: 2011,
            },
            {
              title:
                "Complex wireframe DNA origami nanostructures with multi-arm junction vertices",
              journal: "Nature Nanotechnology",
              year: 2015,
            },
            {
              title:
                "DNA-templated spatially controlled proteolysis targeting chimera for CyclinD1-CDK4/6 complex protein degradation",
              journal: "JACS",
              year: 2025,
            },
          ].map((pub, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                minWidth: 260,
                maxWidth: 400,
                textAlign: "center",
                color: "#888",
                fontSize: "1.1rem",
                fontFamily: "Inter, Arial, sans-serif",
                fontWeight: 400,
              }}
            >
              <div style={{ marginBottom: "1.2rem" }}>{`“${pub.title}”`}</div>
              <div
                style={{
                  fontStyle: "italic",
                  color: "#888",
                  marginBottom: "0.2rem",
                }}
              >
                {pub.journal}
              </div>
              <div>{pub.year}</div>
            </div>
          ))}
        </div>

        {/* Publications Link */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "2.5rem",
          }}
        >
          <a
            href="/publications"
            style={{
              textAlign: "center",
              color: "#000",
              fontWeight: 700,
              fontSize: "1.58rem",
              fontFamily: "Arial, sans-serif",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            See all publications
          </a>
        </div>

        {/* Meet Our People */}
        <section
          style={{
            width: "100%",
            background: "#fff",
            padding: "3.5rem 0 0 0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "3.5rem",
            maxWidth: "1600px",
            margin: "0 auto",
          }}
        >
          {/* Left Text */}
          <div
            style={{
              flex: 1,
              minWidth: 320,
              maxWidth: 700,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingLeft: "6vw",
            }}
          >
            <div
              style={{
                width: "fit-content",
                minWidth: "120px",
                height: "8px",
                background: "#FFC627",
                marginBottom: "2rem",
                opacity: 0.9,
              }}
            ></div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "2.2rem",
                color: "#000",
                fontWeight: 400,
                marginBottom: "1.2rem",
                lineHeight: 1.1,
              }}
            >
              Meet our People
            </div>
            <div
              style={{
                fontFamily: "Inter, Arial, sans-serif",
                fontSize: "1.1rem",
                color: "#444",
                fontWeight: 400,
                maxWidth: "90%",
                marginBottom: "2rem",
                lineHeight: 1.5,
              }}
            >
              Learn more about our group members{" "}
              <a
                href="http://localhost:5173/team/our-team"
                style={{
                  color: "#6c3fc5",
                  textDecoration: "underline",
                  fontWeight: 500,
                }}
              >
                here
              </a>
              .
            </div>
          </div>

          {/* Right Image */}
          <div
            style={{
              flex: 1.2,
              minWidth: 280,
              maxWidth: 720,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow: "0 2px 16px 0 rgba(0,0,0,0.07)",
            }}
          >
            <img
              src="/group.jpg"
              alt="Yan Lab Group"
              style={{
                width: "80%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </section>
      </section>

      <FooterSection />
    </div>
  );
};

export default Home;

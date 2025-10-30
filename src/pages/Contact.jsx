import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <main
      className="home-main-container"
      style={{ fontFamily: "Inter, Arial, sans-serif", color: "#232946" }}
    >
      <div
        className="home-content-wrapper fade-in"
        style={{
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(6px)",
          borderRadius: 0,
          fontFamily: "Inter, Arial, sans-serif",
          color: "#232946",
        }}
      >
        <section className="page-content">
          {/* Contact Info Section */}
          <div
            style={{
              width: "100%",
              marginBottom: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "120px",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                color: "#232946",
                margin: 0,
                fontWeight: 700,
                letterSpacing: "-1px",
                fontFamily: "Inter, Arial, sans-serif",
              }}
            >
              Contact Us
            </h1>
          </div>

          {/* Main Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ marginBottom: "2rem" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "2.5rem",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {/* Contact Info Left */}
              <div
                style={{
                  minWidth: 280,
                  maxWidth: 350,
                  textAlign: "left",
                  flex: "1 1 320px",
                  fontFamily: "Inter, Arial, sans-serif",
                  color: "#232946",
                }}
              >
                <h2
                  style={{
                    color: "#232946",
                    marginBottom: "0.5rem",
                    textAlign: "left",
                    fontWeight: 400,
                    fontFamily: "Inter, Arial, sans-serif",
                  }}
                >
                  Biodesign Center for Molecular Design and Biomimetics
                </h2>
                <p
                  style={{
                    margin: "6px 0",
                    color: "#232946",
                    fontSize: "1.05rem",
                    fontFamily: "Inter, Arial, sans-serif",
                  }}
                >
                  1001 S McAllister Ave,
                </p>
                <p
                  style={{
                    margin: "6px 0",
                    color: "#232946",
                    fontSize: "1.05rem",
                    fontFamily: "Inter, Arial, sans-serif",
                  }}
                >
                  Arizona State University,
                </p>
                <p
                  style={{
                    margin: "6px 0",
                    color: "#232946",
                    fontSize: "1.05rem",
                    fontFamily: "Inter, Arial, sans-serif",
                  }}
                >
                  Tempe, AZ 85287
                </p>
                <p
                  style={{
                    margin: "14px 0 6px 0",
                    color: "#232946",
                    fontSize: "1.05rem",
                    fontFamily: "Inter, Arial, sans-serif",
                  }}
                >
                  Phone: 480.727.8570 / Fax: 480.965.2747
                </p>
                <p
                  style={{
                    margin: "14px 0 6px 0",
                    color: "#232946",
                    fontSize: "1.05rem",
                    fontFamily: "Inter, Arial, sans-serif",
                  }}
                >
                  Email:{" "}
                  <a
                    href="mailto:hao.yan@asu.edu"
                    style={{
                      color: "#3b82f6",
                      textDecoration: "underline",
                      fontFamily: "Inter, Arial, sans-serif",
                    }}
                  >
                    hao.yan@asu.edu
                  </a>
                </p>
              </div>

              {/* Google Map Right */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: "1 1 350px",
                  minWidth: 280,
                  maxWidth: 400,
                }}
              >
                <iframe
                  title="Biodesign Institute, Building A115 Location"
                  src="https://www.google.com/maps?q=Biodesign+Institute,+Building+A115,+Arizona+State+University&output=embed"
                  width="350"
                  height="300"
                  style={{
                    border: 0,
                    borderRadius: 0,
                    marginBottom: "0.5rem",
                    width: "100%",
                    maxWidth: 400,
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a
                  href="https://www.google.com/maps/place/Biodesign+Institute,+Building+A115,+Arizona+State+University/@33.4212049,-111.9313337,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#3b82f6",
                    fontWeight: 500,
                    textDecoration: "underline",
                    fontSize: "1.05rem",
                    marginBottom: "1.5rem",
                    fontFamily: "Inter, Arial, sans-serif",
                  }}
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Join the Lab Section */}
        <section
          style={{
            marginTop: "0",
            padding: "0",
            borderTop: "1px solid #e0e7ef",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(60,60,90,0.04)",
              padding: "1.5rem 2rem 1.5rem 2rem",
              maxWidth: 1000,
              width: "100%",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                color: "#232946",
                fontSize: "1.05rem",
                fontFamily: "Inter, Arial, sans-serif",
                fontWeight: 400,
                margin: 0,
                textAlign: "justify",
                textAlignLast: "center",
                letterSpacing: "0.01em",
                lineHeight: 1.5,
              }}
            >
              We are always seeking to recruit highly motivated individuals who
              are interested in joining our team. Whether you are an
              undergraduate or graduate student, postdoctoral researcher, or
              visiting scholar interested in joining our team, please send your
              application materials including your CV with a list of references
              and cover letter describing your background and interests to:{" "}
              <a
                href="mailto:Hao.Yan@asu.edu"
                style={{
                  color: "#3b82f6",
                  textDecoration: "underline",
                  fontWeight: 500,
                  fontFamily: "Inter, Arial, sans-serif",
                }}
              >
                Hao.Yan@asu.edu
              </a>
            </p>
          </div>
        </section>

        <div style={{ paddingBottom: "60px" }}></div>
      </div>
    </main>
  );
};

export default Contact;

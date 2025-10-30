import React from 'react';
import { motion } from 'framer-motion';
const designTools = [
  { name: 'caDNAno', link: 'http://cadnano.org/' },
  { name: 'MagicDNA', link: 'https://github.com/cmhuang2011/MagicDNA' },
  { name: 'Oligo Analyzer', link: 'http://www.idtdna.com/Scitools/Scitools.aspx' },
  { name: 'NUPACK', link: 'http://nupack.org/' },
  { name: 'TALOS', link: 'https://talos-dna-origami.org/about/' },
  { name: 'PERDIX', link: 'https://perdix-dna-origami.org/' },
  { name: 'DNAxis', link: 'https://caddna.cs.duke.edu/' }
];

const simulationTools = [
  { name: 'oxDNA', link: 'https://dna.physics.ox.ac.uk/index.php?title=Main_Page' },
  { name: 'CanDo', link: 'https://cando-dna-origami.org/about/#ref_11' }
];

const visualizationTools = [
  { name: 'oxView', link: 'https://sulcgroup.github.io/oxdna-viewer/' },
  { name: 'ChimeraX', link: 'https://www.rbvi.ucsf.edu/chimerax/' },
  { name: 'Fluorescence SpectraViewer', link: 'http://www.invitrogen.com/site/us/en/home/support/Research-Tools/Fluorescence-SpectraViewer.html' }
];

const downloads = [
  { name: 'Tiamat (Windows)', link: '/Tiamat.exe', desc: 'Graphical user interface program for the design of DNA nanostructures and sequences.', download: true },
  { name: 'Tiamat User Manual', link: 'http://link.springer.com/chapter/10.1007%2F978-3-642-03076-5_8', desc: 'User manual for Tiamat.' },
  { name: 'Tiamat 2.exe', link: '/Tiamat 2.exe', desc: 'New version of Tiamat with RNA design, user-defined constraints, and oxDNA-friendly export.', download: true },
  { name: 'Double crossover (DAE) tile (.dna)', link: '/DX.dna', desc: 'DNA model file.', download: true },
  { name: '4x4 tile (.dna)', link: '/4x4.dna', desc: 'DNA model file.', download: true },
  { name: 'Four-helix tile (.dna)', link: '/4 HT.dna', desc: 'DNA model file.', download: true },
  { name: 'Tetrahedron (.dna)', link: '/tetrahedron.dna', desc: 'DNA model file.', download: true },
  { name: 'Rectangular origami (.dna)', link: '/origami.dna', desc: 'DNA model file.', download: true },
  { name: '4x4 tile animation (.asf)', link: '/4x4.asf', desc: 'Cartoon animation using Tiamat.', download: true },
  { name: 'Three-helix bundle animation (.asf)', link: '/3 helix bundle.asf', desc: 'Cartoon animation using Tiamat.', download: true },
  { name: 'Tetrahedron animation (.asf)', link: '/tetrahedron.asf', desc: 'Cartoon animation using Tiamat.', download: true },
];

const Resources = () => {
  return (
    <main className="resources-main-container" style={{ background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
  <div className="resources-content-wrapper fade-in" style={{ borderRadius: 0, background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946', paddingLeft: '2.5rem' }}>
  <section className="page-content" style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="page-title" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#232946', marginBottom: '0.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif' }}>Resources</h1>
          </motion.div>

          {/* Downloads */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2.5rem',
            alignItems: 'start',
            marginTop: '2.5rem',
            marginBottom: '2.5rem',
            width: '100%'
          }}>
            {/* Downloads Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ textAlign: 'left' }}>
              <h2 className="section-title" style={{ fontSize: '1.5625rem', fontWeight: 700, color: '#232946', marginBottom: '0.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif', textAlign: 'left' }}>Downloads</h2>
              <ul style={{ lineHeight: 2, listStyleType: 'none', paddingLeft: 0, fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontSize: '1.05rem', textAlign: 'left' }}>
                {/* Example files index for insertion */}
                {downloads.map((item, idx) => {
                  // List of example file names to match
                  const exampleFiles = [
                    'Double crossover (DAE) tile (.dna)',
                    '4x4 tile (.dna)',
                    'Four-helix tile (.dna)',
                    'Tetrahedron (.dna)',
                    'Rectangular origami (.dna)',
                    '4x4 tile animation (.asf)',
                    'Three-helix bundle animation (.asf)',
                    'Tetrahedron animation (.asf)'
                  ];
                  // Find the first example file index
                  const firstExampleIdx = downloads.findIndex(d => exampleFiles.includes(d.name));
                  // Insert 'Example files' label before the first example file
                  const insertExampleLabel = idx === firstExampleIdx;
                  // Is this an example file?
                  const isExample = exampleFiles.includes(item.name);
                  // Link props: download for local files like Tiamat.exe, new tab for external links
                  const linkProps = item.download
                    ? { download: item.download === true ? '' : item.download }
                    : { target: '_blank', rel: 'noopener noreferrer' };
                  return (
                    <React.Fragment key={item.name}>
                      {insertExampleLabel && (
                        <li style={{ margin: '1.2rem 0 0.5rem 0', textAlign: 'left', lineHeight: 1.2 }}>
                          <span style={{ fontWeight: 700, color: '#232946', fontFamily: 'Inter, Arial, sans-serif' }}>Example files</span>
                        </li>
                      )}
                      <li style={{ marginBottom: '1.1rem', textAlign: 'left', lineHeight: 1.2 }}>
                        <span style={{ display: 'inline-block' }}>
                          <a href={item.link} {...linkProps} style={{ fontWeight: 400, color: '#1a0dab', fontFamily: 'Inter, Arial, sans-serif', textDecoration: 'none', marginBottom: 0 }}>{item.name}</a>
                          {item.desc && <span style={{ marginLeft: 6, color: '#232946', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400, marginBottom: 0 }}>- {item.desc}</span>}
                        </span>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </motion.div>
            {/* Scientific Tools Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ textAlign: 'left', marginLeft: '4.5rem' }}>
              <h2 className="section-title" style={{ fontSize: '1.5625rem', fontWeight: 700, color: '#232946', marginBottom: '0.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif', textAlign: 'left' }}>Scientific Tools</h2>
              <ul style={{ lineHeight: 2, listStyleType: 'none', paddingLeft: 0, fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontSize: '1.05rem', textAlign: 'left' }}>
                <li style={{ margin: '1.2rem 0 0.5rem 0', textAlign: 'left', lineHeight: 1.2 }}>
                  <span style={{ fontWeight: 700, color: '#232946', fontFamily: 'Inter, Arial, sans-serif' }}>Design tools</span>
                </li>
                {designTools.map((item) => (
                  <li key={item.name} style={{ marginBottom: '1.1rem', textAlign: 'left', lineHeight: 1.2 }}>
                    <span style={{ display: 'inline-block' }}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 400, color: '#1a0dab', fontFamily: 'Inter, Arial, sans-serif', textDecoration: 'none', marginBottom: 0 }}>{item.name}</a>
                    </span>
                  </li>
                ))}
                <li style={{ margin: '1.2rem 0 0.5rem 0', textAlign: 'left', lineHeight: 1.2 }}>
                  <span style={{ fontWeight: 700, color: '#232946', fontFamily: 'Inter, Arial, sans-serif' }}>Simulation tools</span>
                </li>
                {simulationTools.map((item) => (
                  <li key={item.name} style={{ marginBottom: '1.1rem', textAlign: 'left', lineHeight: 1.2 }}>
                    <span style={{ display: 'inline-block' }}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 400, color: '#1a0dab', fontFamily: 'Inter, Arial, sans-serif', textDecoration: 'none', marginBottom: 0 }}>{item.name}</a>
                    </span>
                  </li>
                ))}
                <li style={{ margin: '1.2rem 0 0.5rem 0', textAlign: 'left', lineHeight: 1.2 }}>
                  <span style={{ fontWeight: 700, color: '#232946', fontFamily: 'Inter, Arial, sans-serif' }}>Visualization tools</span>
                </li>
                {visualizationTools.map((item) => (
                  <li key={item.name} style={{ marginBottom: '1.1rem', textAlign: 'left', lineHeight: 1.2 }}>
                    <span style={{ display: 'inline-block' }}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 400, color: '#1a0dab', fontFamily: 'Inter, Arial, sans-serif', textDecoration: 'none', marginBottom: 0 }}>{item.name}</a>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          {/* ASU Resources Section - below the two columns, aligned with container */}
          <div style={{ maxWidth: '100%', margin: '0 auto', paddingLeft: 0, paddingRight: 0 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} style={{ textAlign: 'left', marginTop: '2.5rem' }}>
              <h2 className="section-title" style={{ fontSize: '1.5625rem', fontWeight: 700, color: '#232946', marginBottom: '0.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif', textAlign: 'left' }}>ASU Resources</h2>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '1.2rem' }}>Biodesign Resources</h3>
              <ul style={{ lineHeight: 2, listStyleType: 'none', paddingLeft: 0, fontSize: '1.05rem' }}>
                <li>
                  <a href="https://biodesign.asu.edu/" target="_blank" rel="noopener noreferrer" style={{ color: '#1a0dab', textDecoration: 'none' }}>Biodesign Institute</a> – Nature-inspired science & innovation
                </li>
                <li>
                  <a href="https://biodesign.asu.edu/molecular-design-and-biomimetics/" target="_blank" rel="noopener noreferrer" style={{ color: '#1a0dab', textDecoration: 'none' }}>Biodesign Center for Molecular Design and Biomimetics</a> – Our Center
                </li>
                <li>
                  <a href="https://www.youtube.com/@ASUBiodesign/videos" target="_blank" rel="noopener noreferrer" style={{ color: '#1a0dab', textDecoration: 'none' }}>ASU Biodesign YouTube</a> – Media & outreach
                </li>
              </ul>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '1.2rem' }}>SMS Resources</h3>
              <ul style={{ lineHeight: 2, listStyleType: 'none', paddingLeft: 0, fontSize: '1.05rem' }}>
                <li>
                  <a href="https://sms.asu.edu/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1a0dab', textDecoration: 'none' }}>SMS Home</a> – Main portal
                </li>
                <li>
                  <a href="https://sms.asu.edu/node/1681?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1a0dab', textDecoration: 'none' }}>SMS Resources Directory</a> – Tools & forms
                </li>
                <li>
                  <a href="https://sms.asu.edu/Research?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1a0dab', textDecoration: 'none' }}>Research in SMS</a> – Labs & themes
                </li>
                <li>
                  <a href="http://sms.asu.edu/Research/Facilities-and-Instrumentation?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1a0dab', textDecoration: 'none' }}>Facilities & Instrumentation</a> – Shared equipment
                </li>
                <li>
                  <a href="https://sms.asu.edu/About/Contact-Us?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1a0dab', textDecoration: 'none' }}>Contact SMS</a> – Admin & offices
                </li>
              </ul>
            </motion.div>
          </div>



        </section>
      </div>
    </main>
  );
};

export default Resources;
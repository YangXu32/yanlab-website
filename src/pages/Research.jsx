import React from 'react';
import { motion } from 'framer-motion';
import { FaDna, FaMicroscope, FaAtom, FaRocket, FaLightbulb } from 'react-icons/fa';
import SectionBlock from '../components/SectionBlock';

const Research = () => {
  const researchAreas = [
    {
      icon: FaDna,
      title: "Design",
      description: "Rational design and engineering of DNA nanostructures with precise structural control and programmable functionality. Our research focuses on creating sophisticated molecular architectures using computational modeling and experimental validation.",
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      detailedDescription: "Our research team creates structures from DNA and RNA as targeted medicines for the treatment of cancer. To do this, we study and control the fundamental self-assembly properties of DNA, polymers and supramolecular materials."
    },
    {
      icon: FaRocket,
      title: "Assembly",
      description: "Investigating the fundamental principles of molecular self-assembly to create complex hierarchical structures. Our work focuses on understanding and controlling the assembly pathways of DNA nanostructures for precise architectural control.",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              fontSize: '1.6rem',
    },
    {
      icon: FaAtom,
      title: "Functionalization",
      description: "Incorporating functional elements and responsive capabilities into DNA nanostructures for therapeutic and diagnostic applications. We develop smart materials that can respond to environmental stimuli.",
      color: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      detailedDescription: "Using only a minimal set of DNA strands, we build unique 3D structures for applications such as drug delivery and the organization of other materials. This strategy allows us to make complex constructs that will be useful for translation to clinical applications."
    },
    {
      icon: FaMicroscope,
      title: "Interface",
      description: "Developing interfaces between DNA nanostructures and biological systems for enhanced biocompatibility and functionality. We explore how DNA can be used to modify and organize biological systems.",
      color: "#4facfe",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      detailedDescription: "In the Sleiman lab, we work towards combining DNA with many other materials, including organic molecules, polymers, metal ions, and inorganic nanomaterials, to explore how DNA can be used to modify and organize these moieties. We make sequence-defined polymers with DNA, and study their ability to act as cancer therapies."
    }
  ];

  return (
    <main className="research-main-container" style={{ background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
  <div className="research-content-wrapper fade-in" style={{ borderRadius: 0, background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
  <section className="page-content" style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left' }}
          >
            {/* Removed subtitle as requested */}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.5',
              color: '#232946',
              margin: 0,
              textAlign: 'justify',
              width: '100%',
              maxWidth: 'none',
              fontFamily: 'Inter, Arial, sans-serif',
              fontWeight: 400
            }}>
              The Yan Lab focuses on the rational design and engineering of DNA nanostructures for applications in biotechnology, medicine, and materials science. We develop innovative approaches to create programmable molecular systems that can sense, compute, and respond to their environment. Our interdisciplinary research combines principles from chemistry, biology, physics, and engineering to push the boundaries of what's possible at the molecular scale.
            </p>
          </motion.div>

          {/* Research Areas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ textAlign: 'center', margin: '4rem 0 2.5rem 0' }}
          >
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 700,
              color: '#232323',
              marginBottom: '1.2rem',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.1,
              display: 'inline-block',
              background: '#FFC627',
              padding: '0.132em 0.44em',
              borderRadius: '2px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}>
              Research Directions
            </h2>
            <div style={{
              width: '100%',
              height: '1px',
              background: 'transparent',
              margin: '2rem auto 0 auto',
            }} />
          </motion.div>

          {/* Research Areas - Flexbox Layout */}
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1000px', margin: '0 auto' }}>
            <SectionBlock
              image={'/design.jpg'}
              title={researchAreas[0].title}
              description={<span style={{ fontSize: '1.05rem', color: '#232946', lineHeight: '1.5', fontFamily: 'Inter, Arial, sans-serif' }}>
                Our research focuses on designing programmable DNA nanostructures by encoding structural and functional instructions directly into DNA sequences, leveraging predictable base-pairing and versatile junctions to create precise, tunable architectures. From early demonstrations of DNA as a scaffold for ordered lattices and 3D crystals to engineering assemblies with atomic-level precision, we have shown how DNA can organize matter and host molecules for structural studies. We pioneered complex DNA and RNA origami, folding long strands into intricate 2D and 3D shapes for applications in dynamic devices and biomedical platforms, and collaborated with computer scientists to develop automated design tools that streamline the creation of reconfigurable nanostructures, programmable patterns, and molecular computing devices. Together, these efforts have built an integrated design ecosystemfrom simple DNA tiles to sophisticated crystalline latticesthat advances nanoscale control of matter and paves the way for future breakthroughs in nanotechnology, computation, and medicine.
              </span>}
            />
            <div style={{ width: '100%', height: '1.5px', background: '#e5e7eb', margin: '2.5rem 0', borderRadius: '1px' }} />
            <SectionBlock
              image={'/assembly.jpg'}
              title={researchAreas[1].title}
              description={<span style={{ fontSize: '1.05rem', color: '#232946', lineHeight: '1.5', fontFamily: 'Inter, Arial, sans-serif' }}>
                We investigate how nucleic acid nanostructures form, evolve, and organize themselves over space and time, uncovering the thermodynamic and kinetic principles that govern their self-assembly. By characterizing nucleation rates, growth dynamics, and energy landscapes using AFM imaging, kinetic modeling, and crystallographic analysis, we have shown how subtle sequence variations in DNA junctions influence lattice symmetry, crystal resolution, and hierarchical assembly pathways. These mechanistic insights inform the rational design of scalable, programmable DNA architectures capable of spatio-temporal control, algorithmic growth, and environmentally triggered responses, bridging molecular-level understanding with emergent material behavior to emulate the precision and sophistication of natural morphogenesis.<br /><br />
                {/* Publications removed as requested */}
              </span>}
              reverse
              className="assembly-publications"
            />
            <div style={{ width: '100%', height: '1.5px', background: '#e5e7eb', margin: '2.5rem 0', borderRadius: '1px' }} />
            <SectionBlock
              image={'/function.jpg'}
              title={researchAreas[2].title}
              description={<span style={{ fontSize: '1.05rem', color: '#232946', lineHeight: '1.5', fontFamily: 'Inter, Arial, sans-serif' }}>
                We explore DNA nanostructures as programmable scaffolds for organizing functional molecular and nanoscale components with nanometer precision. By directing the site-specific placement of inorganic nanoparticles, chromophores, enzymes, and biomolecules, our work has enabled the creation of multifunctional assemblies for sensing, actuation, signal processing, and energy transduction. Early studies established DNA-directed methods for templating gold nanoparticles, quantum dots, and other chemically conjugated materials to build hybrid nanostructures with applications in plasmonics, nanoelectronics, and catalysis. In parallel, we engineered light-harvesting and excitonic energy transfer systems inspired by photosynthetic complexes, positioning chromophores on DNA frameworks to study directional energy migration and tunable excitonic coupling for emerging quantum photonic devices. Additionally, we developed DNA-based multivalent ligand displays and enzyme cascades to probe spatial effects in biomolecular recognition and to enhance catalytic efficiency through substrate channeling. These integrated efforts demonstrate how DNA nanotechnology can bridge inorganic, photonic, and biological domains to create spatially precise hybrid systems with broad implications for synthetic biology, molecular computing, and advanced materials.
              </span>}
              imageStyle={{ maxWidth: 220, width: '100%', height: 'auto', minWidth: 160 }}
              textStyle={{ maxWidth: 600 }}
            />
            <div style={{ width: '100%', height: '1.5px', background: '#e5e7eb', margin: '2.5rem 0', borderRadius: '1px' }} />
            <SectionBlock
              image={'/interface.jpg'}
              title={researchAreas[3].title}
              description={<span style={{ fontSize: '1.05rem', color: '#232946', lineHeight: '1.5', fontFamily: 'Inter, Arial, sans-serif' }}>
                Our research develops DNA and RNA nanostructures as programmable interfaces with both inorganic materials and biological systems. While early work focused on hybrid systems to study physical phenomena such as plasmonic coupling and chiral behavior, we see the greatest potential in integrating nucleic acid nanotechnology with living systems. By leveraging the programmability and biocompatibility of DNA and RNA, we design nanodevices that operate inside cells and synthetic environments with precision and autonomy. This includes therapeutic platforms such as DNA nanorobots for targeted drug delivery, RNA origami vaccines that stimulate robust immune responses, and nanostructures that enable direct cytoplasmic delivery of molecular payloads. Beyond medicine, we have engineered DNA-based protein transport channels and autonomous nanorobots for synthetic cells, creating systems that sense, respond, and perform functional tasks in biological contexts. Together, these efforts highlight how nucleic acid nanotechnology can serve as a powerful bridge between molecular design and living systems, advancing both synthetic biology and biomedical innovation.<br /><br />
                {/* Publications removed as requested */}
              </span>}
              reverse
            />
          </div>

          {/* Research Funded By - Only agencies from yanlab-asu.com */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            style={{ textAlign: 'center', margin: '4rem 0' }}
          >
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 700,
              color: '#232323',
              marginBottom: '1.2rem',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.1,
              display: 'inline-block',
              background: '#FFC627',
              padding: '0.132em 0.44em',
              borderRadius: '2px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}>
              Funding Agencies
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2.5rem',
              maxWidth: '900px',
              margin: '0 auto',
              alignItems: 'center',
              borderTop: '2px solid #e5e7eb',
              borderBottom: '2px solid #e5e7eb',
              padding: '2.5rem 0'
            }}>
              {/* Row 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/nih.png" alt="National Institutes of Health" style={{ maxHeight: '80px', maxWidth: '100%' }} />
                <div style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: '#232946', fontWeight: 400, textAlign: 'center', fontFamily: 'Inter, Arial, sans-serif' }}>National Institutes of Health</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/nsf.png" alt="National Science Foundation" style={{ maxHeight: '80px', maxWidth: '100%' }} />
                <div style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: '#232946', fontWeight: 400, textAlign: 'center', fontFamily: 'Inter, Arial, sans-serif' }}>National Science Foundation</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/flinn.png" alt="Flinn Foundation" style={{ maxHeight: '80px', maxWidth: '100%' }} />
                <div style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: '#232946', fontWeight: 400, textAlign: 'center', fontFamily: 'Inter, Arial, sans-serif' }}>Flinn Foundation</div>
              </div>
            </div>
          </motion.div>


        </section>
      </div>
    </main>
  );
};

export default Research;
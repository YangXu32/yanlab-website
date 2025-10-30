import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const OurTeam = () => {
  // Remove dropdown/expand logic; always show all sections

  // PI Yan profile for grid
  const piYan = {
    name: "Dr. Hao Yan",
    title: "Principal Investigator",
    subtitle: "Milton D. Glick Distinguished Professor",
    department: "School of Molecular Sciences and School of Medicine",
    office: "BDA 124B",
    phone: "(480) 727-8570",
    email: "hao.yan@asu.edu",
    image: "hyan_3.jpg",
    awards: [
      "Foresight Institute Feynman Prize in Nanotechnology",
      "Rozenberg Tulip Award in DNA Computing",
      "Humboldt Research Award"
    ],
  description: "Dr. Hao Yan is the Regents Professor and Milton D. Glick Distinguished Professor and Director of the Biodesign Center for Molecular Design and Biomimetics. He received his B.S. from Shandong University (1993) and Ph.D. from New York University (2001), worked at Duke University as a Research Assistant Professor (2004) and joined ASU in 2004, where he became a full professor in 2008 with early tenure."
  };

  const staff = [
    piYan,
    {
      name: "Chad R Simmons",
      title: "Academic Professional",
      email: "chad.simmons@asu.edu",
  focus: "Biomacromolecular Crystallographer",
      image: "chad.jpg"
    },
    {
      name: "Dr. Yang Xu",
      title: "Assistant Research Professor", 
      email: "yangxu3@asu.edu",
  focus: "Biomolecular Therapeutics and Diagnostics",
      image: "yangxu.jpg"
    },
    {
      name: "Dr Kun Dai",
      title: "Assistant Research Scientist",
      email: "",
  focus: "Nucleic Acid Biologics",
      image: "kun.jpg"
    }
  ];

  const students = [
    { name: "Abhay Prasad", level: "5th Year PhD Candidate", email: "aprasa36@asu.edu", research: "Chemical Biology and PROTACs", image: "abhay.jpg" },
    { name: "Rong Zheng", level: "4th Year PhD Candidate", email: "rzheng22@asu.edu", research: "Molecular Biology and PROTACs", image: "rong.jpg" },
    { name: "Lanshen Zhao", level: "4th Year PhD Candidate", email: "lzhao89@asu.edu", research: "Diaganostics and Cancer Therapy", image: "lanshen.jpg" },
    { name: "Xinyi Tu", level: "4th Year PhD Candidate", email: "xinyitu@asu.edu", research: "RNA/DNA nanotechnology for Cancer Therapy", image: "xinyi.jpg" },
    { name: "Thong Diep", level: "4th Year PhD Candidate", email: "tdiep2@asu.edu", research: "Finite size DNA lattice", image: "thong.jpg" },
    { name: "Aleksandra Petrova", level: "3rd Year PhD Candidate", email: "aleksandra@asu.edu", research: "RNA Nanomedicine", image: "Aleksandra.jpg" },
    { name: "Gengshi Wu", level: "3rd Year PhD Candidate", email: "gengshi@asu.edu", research: "RNA Nanotechnology Design and Assembly", image: "gengshi.jpg" },
    { name: "Yichen Yan", level: "2nd Year PhD Candidate", email: "yichen@asu.edu", research: "Nucleic Acid Biology", image: "yichen.jpg" },
    // New members
    { name: "Xiang Gu", level: "1st Year PhD Candidate", email: "xianggu2@asu.edu", research: "DNA Nanotechnology", image: "Xiang.jpg" },
  { name: "Lihui Wang", level: "1st Year PhD Candidate", email: "lwang411@asu.edu", research: "DNA Nanotechnology", image: "lihui.jpg" }
  ];

  const former = [
    { name: "Liangxiao Chen", title: "PhD 2019-2024", current: "Postdoc, Harvard University" },
    { name: "Lu Yu", title: "PhD 2019-2024", current: "Postdoc, University of Washington" },
    { name: "Leeza Abraham", title: "PhD 2018-2023", current: "Research Scientist, Exodigm" },
    { name: "Yue Tang", title: "PhD 2018-2023", current: "Assistant Professor, Shandong University" },
    { name: "Hao Liu", title: "PhD 2018-2023", current: "Postdoc, Arizona State University" }
  ];

  // Combine staff and students for unified grid
  const team = [...staff, ...students];

  return (
    <main className="resources-main-container" style={{ background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
  <div className="resources-content-wrapper fade-in" style={{ borderRadius: 0, background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
  <section className="page-content" style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#232946', marginBottom: '1.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif', textAlign: 'center' }}>Current Team</h1>
          </motion.div>

          {/* Unified Team Grid Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid-container" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              justifyItems: 'center',
              alignItems: 'flex-start',
              gap: '3.5rem',
              maxWidth: '900px',
              margin: '0 auto',
              justifyContent: 'center'
            }}>
              {team.map((member, index) => (
                <div key={index} className="grid-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3.5rem' }}>
                  <div style={{
                    width: '259px',
                    height: '259px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 0.5rem auto',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    display: 'block'
                  }}>
                    <img 
                      src={`/${member.image}`} 
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        display: 'block',
                        margin: '0 auto'
                      }}
                    />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.125rem', textAlign: 'center', color: '#232946', fontFamily: 'Inter, Arial, sans-serif' }}>
                    {member.name}
                  </h3>
                  {/* Special formatting for PI Yan */}
                    {member.name === 'Dr. Hao Yan' ? (
                    <>
                        <p style={{ color: '#232946', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.125rem', textAlign: 'center' }}>Principal Investigator</p>
                        <p style={{ color: '#64748b', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.125rem', textAlign: 'center' }}>Biomolecular Designer and Programmer</p>
                        <a href={`mailto:${member.email}`} style={{ color: '#232946', textDecoration: 'none', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, display: 'block', textAlign: 'center', marginBottom: '0.125rem' }}>
                          Email
                        </a>
                    </>
                  ) : member.focus ? (
                    <>
                      <p style={{ color: '#232946', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.125rem', textAlign: 'center' }}>{member.title}</p>
                      <p style={{ color: member.name === 'Kun Dai' ? '#64748b' : '#64748b', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.25rem', textAlign: 'center' }}>{member.focus}</p>
                      <a href={`mailto:${member.email}`} style={{ color: '#232946', textDecoration: 'none', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, display: 'block', textAlign: 'center' }}>
                        Email
                      </a>
                    </>
                  ) : (
                    <>
                      <p style={{ color: '#232946', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.125rem', textAlign: 'center', fontStyle: 'italic' }}>{member.level}</p>
                      <p style={{ color: '#64748b', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.25rem', textAlign: 'center' }}>{member.research}</p>
                      <a href={`mailto:${member.email}`} style={{ color: '#232946', textDecoration: 'none', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, display: 'block', textAlign: 'center' }}>
                        Email
                      </a>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Graduate Student Mentees Section */}
          {/* ...omitted for brevity, copy mentees table from People.jsx... */}
        </section>

        {/* Group Alumni Section */}
          {/* Group Alumni Section */}
          <section className="alumni-section" style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#232946',
              marginBottom: '1.5rem',
              letterSpacing: '-1px',
              fontFamily: 'Inter, Arial, sans-serif',
              textAlign: 'center',
              width: '100%'
            }}>GROUP ALUMNI</h2>
            <div style={{ margin: '2rem 0 0 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <div style={{ fontWeight: 600, fontSize: '1.5rem', color: '#232946', marginBottom: '0.5rem', textAlign: 'center' }}>Graduate Students</div>
              <div style={{ marginBottom: '2rem', display: 'inline-block', textAlign: 'left' }}>
                <b>1. Deeksha Satyabola (Graduate student, Fall 2021)</b><br />Postdoc, Johnson & Johnson<br /><br />
                <b>2. Lu Yu (Graduate student, Fall 2019)</b><br />Postdoc, University of Washington<br /><br />
                <b>3. Liangxiao Chen (Graduate student, Fall 2019)</b><br />Postdoc, Harvard University<br /><br />
                <b>4. Leeza Abraham (Graduate student, Fall 2018)</b><br />Senior Scientist, Exodigm Biosciences<br /><br />
                <b>5. Yue Tang (Graduate student, Fall 2018)</b><br />Associate Professor, School of Medicine, Shandong University<br /><br />
                <b>6. Hao Liu (Graduate student, Fall 2018)</b><br />Postdoc, Biodesign Institute, Arizona State University<br /><br />
                <b>7. Xu Zhou (Graduate student, Fall 2016)</b><br />Associate Professor, College of Chemistry, Nanjing University<br /><br />
                <b>8. Raghu Narayanan (Graduate student, Fall 2015)</b><br />Postdoc, University of California, San Francisco<br /><br />
                <b>9. Swarup Dey (Graduate student, Fall 2015)</b><br />Principal Scientist, Regeneron<br /><br />
                <b>10. Fan Hong (Graduate student, Fall 2014)</b><br />Assistant Professor, Department of Chemistry, University of Florida<br /><br />
                <b>11. Yu Zhou (Graduate student, Fall 2013)</b><br />Postdoc ASO, Center for NeuroGenetics, University of Florida<br /><br />
                <b>11. Angela Edwards (Graduate student, Fall 2012)</b><br />Senior Biologist II, Power Engineers<br /><br />
                <b>12. Saswata Banerjee (Graduate student, Fall 2012)</b><br />Senior Content Specialist, Aurigene Pharmaceutical Services Limited<br /><br />
                <b>13. Yuhe Yang (Graduate student, Fall 2011)</b><br />Professor, National Center for Nanoscience and Nanotechnology, China<br /><br />
                <b>14. Shuoxing Jiang (Graduate student, Fall 2011)</b><br />Associate Professor, College of Engineering and Applied Sciences, Nanjing University<br /><br />
                <b>15. Fei Zhang (Graduate student, Fall 2010)</b><br />Associate Professor, Department of Chemistry, Rutgers University Newark<br /><br />
                <b>16. Anirban Samanta (Graduate student, Fall 2009)</b><br />Assistant Professor, Ramakrishna Mission Vidyamandira<br /><br />
                <b>17. Dongran Han (Graduate student, Fall 2009)</b><br />Professor, Beijing University of Chinese Medicine<br /><br />
                <b>18. Palash Dutta (Graduate student, Fall 2009)</b><br />Staff Scientist at Bruker Spatial Genomics<br /><br />
                <b>19. Wei Li (Graduate student, Fall 2009)</b><br />Director of Chemistry at esBiolab<br /><br />
                <b>20. Xiaowei Liu (Graduate student, Fall 2008)</b><br />LGG Fellow at Montefiore<br /><br />
                <b>21. Suchetan Pal (Graduate student, Fall 2008)</b><br />Assistant Professor, Department of Chemistry, IIT-Bhilai<br /><br />
                <b>22. Minghui Liu (Graduate student, Fall 2008)</b><br />Assistant Research Professor, Biodesign Institute, Arizona State University<br /><br />
                <b>23. XiXi Wei (Graduate student, Fall 2008)</b><br />Senior Research Scientist, Caris Life<br /><br />
                <b>24. Zhao Zhao (Graduate student, Fall 2008)</b><br />Chief Technology Officer, Neocura<br /><br />
                <b>25. Zhe Li (Graduate student, Fall 2007)</b><br />Professor and Vice Dean, College of Engineering and Applied Sciences, Nanjing University<br /><br />
                <b>26. Jeanette Nangreave (Graduate student, Fall 2007)</b><br />Teaching Professor, Arizona State University<br /><br />
                <b>27. Jaswinder Sharma (Graduate student, Spring 2005)</b><br />Senior R&D Staff and Leader, Energy Storage and Conversion Manufacturing Group, Oak Ridge National Lab<br /><br />
                <b>28. Chenxiang Lin (Graduate student, Spring 2005)</b><br />Associate Professor, Yale University<br /><br />
                <b>29. Yonggang Ke (Graduate student, Spring 2005)</b><br />Associate Professor, Emory-Georgia Tech joint Wallace H. Coulter Department of Biomedical Engineering<br /><br />
                <b>30. Sherri Rinker (Graduate student, Fall 2004)</b><br />Director at B2S Life Sciences<br /><br />
                <b>31. Rahul Chhabra (Graduate student, Fall 2004)</b><br />Family Physician, Forest Lane Medical<br /><br />
                <b>32. Kyle Lund (Graduate student, Fall 2004)</b><br />Medical Director, Clinical Pathology, Landstuhl Regional Medical Center<br /><br />
              </div>
              <div style={{ fontWeight: 600, fontSize: '1.5rem', color: '#232946', marginBottom: '0.5rem', textAlign: 'center' }}>Postdoctoral Fellows</div>
              <div style={{ marginBottom: '2rem', display: 'inline-block', textAlign: 'left' }}>
                <b>33. Dr. Junping Zhang (Postdoctoral Fellow, 2005-2006)</b><br />Principal Scientist, Carestream Health–Advanced Materials<br /><br />
                <b>34. Dr. Qiangbin Wang (Postdoctoral Fellow, 2006-2008)</b><br />Professor and Director, Suzhou Institute of Nanotech and Nano-bionics, CAS<br /><br />
                <b>35. Dr. Xiaoju Guan (Postdoctoral Fellow, 2002-2004)</b><br />Principal Scientist, GSK<br /><br />
                <b>36. Dr. Zhengtao Deng (Postdoctoral Fellow, 2009-2012)</b><br />Professor, College of Engineering and Applied Sciences, Nanjing University<br /><br />
                <b>37. Dr. Reji Varghese (Postdoctoral Fellow, 2010-2011)</b><br />Professor, Department of Chemistry, Indian Institute of Science Education and Research Thiruvananthapuram<br /><br />
                <b>38. Dr. Yang Yang (Postdoctoral Fellow, 2010-2012)</b><br />Professor, Shanghai Jiao Tong University<br /><br />
                <b>39. Dr. Jinglin Fu (Postdoctoral Fellow, 2010-2013)</b><br />Professor and Department Chair, Department of Chemistry, Rutgers University, Camden<br /><br />
                <b>40. Dr. Alessio Andreoni (Postdoctoral Fellow, 2013-2016)</b><br />Senior Research Scientist at Max Planck Florida Institute for Neuroscience<br /><br />
                <b>41. Dr. Ryan Nangreave (Postdoctoral Fellow, 2012-2013)</b><br />Assistant Teaching Professor, Arizona State University<br /><br />
                <b>42. Dr. Sarah Henry (Postdoctoral Fellow, 2013-2015)</b><br />Center for Data Science and AI Manager, University of Glasgow<br /><br />
                <b>43. Dr. Xiaodong Qi (Postdoctoral Fellow, 2016-2022)</b><br />Staff Scientist, Element Biosciences<br /><br />
                <b>44. Dr. Zhilei Ge (Postdoctoral Fellow, 2011-2013)</b><br />Associate Professor, College of Chemistry and Chemical Engineering, Shanghai Jiao Tong University<br /><br />
                <b>45. Dr. Xiaowei Liu (Postdoctoral Fellow, 2013-2015)</b><br />LGG Fellow at Montefiore<br /><br />
                <b>46. Dr. Nour Eddine Fahmi (Postdoctoral Fellow, 2016-2020)</b><br />Senior Advisor, Eli Lilly and Company<br /><br />
                <b>47. Dr. Xiang Lan (Postdoctoral Fellow, 2016-2018)</b><br />Professor, Donghua University<br /><br />
                <b>48. Dr. Zhi Zhao (Postdoctoral Fellow, 2018-2019)</b><br />Professor, Beijing University of Technology<br /><br />
                <b>49. Dr. Guangbo Yao (Postdoctoral Fellow, 2017-2020)</b><br />Associate Professor, Shanghai Jiao Tong University<br /><br />
                <b>50. Dr. Yinan Zhang (Postdoctoral Fellow, 2017-2019)</b><br />Associate Professor, Tongji University<br /><br />
                <b>51. Dr. Cheng Zhang (Postdoctoral Fellow, 2011-2013)</b><br />Associate Professor, Peking University<br /><br />
                <b>52. Dr. Yang Xu (Postdoctoral Fellow, 2011-2012)</b><br />Assistant Research Professor, Biodesign Institute, Arizona State University<br /><br />
                <b>53. Dr. Jing Yang (Postdoctoral Fellow, 2011-2013)</b><br />Professor, Northern University of Electrical Engineering, China<br /><br />
                <b>54. Bryan Wei (Postdoctoral Fellow, 2008-2009)</b><br />Professor, Tsinghua University<br /><br />
                <b>55. Yuanchen Dong (Postdoctoral Fellow, 2013-2014)</b><br />Professor, Beijing Institute of Chemistry, CAS<br /><br />
                <b>56. Guoliang Ke (Postdoctoral Fellow, 2014-2015)</b><br />Professor, Department of Chemistry, Hunan University<br /><br />
                <b>57. Dr. Yen-Ting Lai (Postdoctoral Fellow, 2014-2015)</b><br />Director, Moderna<br /><br />
                <b>58. Dr. Andre Pinheiro (Postdoctoral Fellow, 2009-2012)</b><br />VP-Head Patient Value & Access EUCAN at Takeda<br /><br />
                <b>59. Dr. Nicholas Stephanopoulos (Postdoctoral Fellow, 2008)</b><br />Associate Professor, School of Molecular Sciences, Arizona State University<br /><br />
                <b>60. Dr. Bo Ning (Postdoctoral Fellow, 2017-2019)</b><br />Assistant Professor, School of Medicine, Tulane University<br /><br />
                <b>61. Lan Liu (Postdoctoral Fellow, 2018-2020)</b><br />Assistant Professor, Department of Chemistry, Hunan University<br /><br />
                <b>62. Kasper Jahn (Postdoctoral Fellow, 2008-2009)</b><br />Executive Director, Head of Strategy Office hos Novo Holdings<br /><br />
                <b>63. Casper Anderson (Postdoctoral Fellow, 2007-2008)</b><br />QC Lead, Topsoe<br /><br />
              </div>
            </div>
          </section>
      </div>
    </main>
  );
};

export default OurTeam;

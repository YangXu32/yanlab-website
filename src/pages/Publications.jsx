
import React from 'react';
import './Publications.css';

const publications2025 = [
  {
    number: '249',
    authors: 'X. Jing, N. Kronebert, A. Peil, B. Renz, L. Ding, T. Heil, K. Hipp, P. A. van Aken, H. Yan, N. Liu*',
    title: 'DNA Moire Superlattices',
    journal: 'Nature Nanotechnology In press (2025).'
  },
  {
    number: '248',
    authors: 'R. Zheng#, A. Prasad#*, D. Satyabola, Y. Xu, H. Yan*',
    title: 'DNA-templated spatially controlled proteolysis targeting chimera for CyclinD1-CDK4/6 complex protein degradation',
    journal: 'J. Am. Chem. Soc. DOI: 10.1021/jacs.5c04918 (2025).'
  },
  {
    number: '247',
    authors: 'H. Liu, N. Liu*, H. Yan*',
    title: 'Programming Precise Nanoparticle Patterns',
    journal: 'Nature Materials. DOI: 10.1038/s41563-025-02262-2 (2025).'
  },
  {
    number: '246',
    authors: 'T. Yip, X. Tu, X. Qi, H. Yan*, Y. Chang*',
    title: 'Adjuvanted RNA Origami-A Tunable Peptide Assembly Platform for Constructing Cancer Nanovaccines',
    journal: 'Vaccines, 13 (6), 560 (2025).'
  }
];

const publications2024 = [
  {
    number: '245',
    authors: 'L. Yu#, L. Chen#, D. Satyabola, A. Prasad, H. Yan*',
    title: 'NucleoCraft: The art of stimuli-responsive precision in DNA and RNA bioengineering',
    journal: 'BME Frontiers. DOI: 10.34133/bmef.00 (2024).'
  },
  {
    number: '244',
    authors: 'D. Satyabola, A. Prasad, H. Yan*, X. Zhou*',
    title: 'Bioinspired photonic systems directed by designer DNA nanostructures',
    journal: 'ACS Applied Optical Materials. DOI: 10.1021/acsaom.4c00103 (2024).'
  },
  {
    number: '243',
    authors: 'P. Zhan, J. Yang, L. Ding, X. Jing, K. Hipp, S. Nussberger, H. Yan, N. Liu*',
    title: '3D DNA origami pincers that multitask on giant unilamellar vesicle Experiments',
    journal: 'Science Advances. 10, eadn8903 (2024).'
  },
  {
    number: '242',
    authors: 'H. Liu, M. Matthies, J. Russo, L. Rovigatti, R. Narayanan, T. Diep, D. McKeen, O. Gang, N. Stephanopoulos, F. Sciortino, H. Yan, F. Romano, P. Sulc*',
    title: 'Inverse Design of a Pyrochlore Lattice of DNA Origami Through Model-driven Experiments',
    journal: 'Science. 384, 776-781 (2024).'
  },
  {
    number: '241',
    authors: 'S. Fan, S. Wang, L. Ding, T. Speck, H. Yan*, S. Nussberger*, N. Liu*',
    title: 'Shape Matters: Autonomously Self-organized DNA Nanorobots as Masseur and Gatekeeper for Synthetic Cells',
    journal: 'Nature Materials. 24, 278-286 (2025).'
  },
  {
    number: '240',
    authors: 'C. Zhang*, R. Wu, F. Sun, Y. Lin, Y. Zhang, Y. Liang, Y. Chen., L. Liu, Q. Ouyang*, L. Qian*, H. Yan*.',
    title: 'Parallel DNA Storage by Programming and Printing Epigenetic Bits',
    journal: 'Nature. 634, 824-832 (2024).'
  },
  {
    number: '239',
    authors: 'Y. Gao, Y. Sha, Y. Liu, J. Chen, M. Li, S. Gao, Q. Li, X. Zuo, C. Chen, T. Zhang, K. Wang, P. Wang, G. Chen, X. Liu*, H. Yan*, C. Fan*',
    title: 'Massively Parallel sub-10-nanometer lithography of Graphene with DNA-silica Composite Masked Material Manufacturing',
    journal: 'Nature Nanotechnology. submitted (2024).'
  },
  {
    number: '238',
    authors: 'G. B. M. Wisna, D. Sukhareva, J. Zhao, D. Satyabola, H. Yan*, R. F. Hariadi*',
    title: 'DNA Origami Cryptography in 2D and 3D Space with Improved Detection and Fast Readout Enabled by HighSpeed DNA-PAINT and Unsupervised Clustering',
    journal: 'Nature Communications. submitted (2024).'
  },
  {
    number: '237',
    authors: 'Y. Xuǂ, R. Zhengǂ, A. Prasadǂ, M. Liu, X. Zhou, R. Porter, M. Sample, E. Poppleton,J. Procyk, H. Liu, H. Lee, H. Yan*, P. Sulc*, N. Stephanopoulos*',
    title: 'High-affinity binding to the SARS-CoV-2 spike trimer by a multivalent protein-DNA synthetic antibody',
    journal: 'J. Am. Chem. Soc. submitted (2024).'
  },
  {
    number: '236',
    authors: 'Y. Wang, H. Wang, Y. Li, C. Yang, Y. Tang, X. Lu, J. Fan, W. Tang, Y. Shang, H. Yan*, J. Liu*, B. Ding*',
    title: 'Chemically Conjugated Branched Staples for Super-DNA Origami',
    journal: 'J. Am. Chem. Soc. in press (2024).'
  },
  {
    number: '235',
    authors: 'T. Yip, X. Qi, H. Yan*, Y. Chang*',
    title: 'RNA Origami Functions as a Self-adjuvanted Nanovaccine Platform for Cancer Immunotherapy',
    journal: 'ACS Nano. in revision (2024).'
  }
];



const publications2023 = [
  {
    number: '234',
    authors: 'C. Simmons, H. Skyler, P. Sulc, N. Stephanopoulos*, H. Yan*',
    title: 'Self-assembling DNA Crystal Hosted Minor Groove Binders and Their Structure Determination with Crystallography',
    journal: 'J. Am. Chem. Soc. 145, 48, 26075–26085 (2023).'
  },
  {
    number: '233',
    authors: 'R.P. Narayanan, A. Prasad, A. Buchberger, L. Zhou, J. Bernal-Chanchavac, T. MacCulloch, N.E. Fahmi, H. Yan, F. Zhang, M.J. Webber*, N. Stephanopoulos*',
    title: 'Supramolecular polymerization of DNA nanostructures using high-affinity host-guest interactions',
    journal: 'Small 230785 (2023).'
  },
  {
    number: '232',
    authors: 'L. Yu, H. Yan*',
    title: 'DNA-based Computation for Multiple Biomarkers.',
    journal: 'Nature Biomedical Engineering 7, 1535-1536 (2023).'
  },
  {
    number: '231',
    authors: 'L. Yu, Y. Xu, M. Al-Amin, S. Jiang, M. Sample, A. Prasad, N. Stephanopoulos, P. Sulc, H. Yan*',
    title: 'CytoDirect: a Nucleic Acid Nanodevice for Specific and Efficient Delivery of Functional Payloads to the Cytoplasm',
    journal: 'J. Am. Chem. Soc. 145, 50, 27336–27347 (2023).'
  },
  {
    number: '230',
    authors: 'J. Yang, K. Jahnke, L. Xin, X. Jing, P. Zhan, A. Peil, A. Griffo, M. Skugor, D. Yang, S. Fan, K. Gopfrich*, H. Yan*, P. Wang*, N. Liu*',
    title: 'Modulating Lipid Membrane Morphology by Dynamic DNA Origami Networks',
    journal: 'Nano Letters 23, 6330-6336 (2023).'
  },
  {
    number: '229',
    authors: 'K. Dai, C. Gong, Y. Xu, F. Ding, X. Qi, X. Tu, L. Yu, X. Liu, J. Li, C. Fan, H. Yan*, G. Yao*',
    title: 'Single-Stranded RNA Origami-based Epigenetic Immunomodulation',
    journal: 'Nano Letters 23, 7188-7196 (2023).'
  },
  {
    number: '228',
    authors: 'K. Dai, Y. Xu, Y. Yang, J. Shen, X. Liu, X. Tu, L. Yu, X. Qi, J. Li, L. Wang, X. Zuo, Y. Liu*, H. Yan*, C. Fan*, G. Yao*',
    title: 'Edge Length-Programmed Single-Stranded RNA Origami for Predictive Innate Immune Activation and Therapy',
    journal: 'J. Am. Chem. Soc. 145, 17112-17124 (2023).'
  },
  {
    number: '227',
    authors: 'Y. Tang, H. Liu, Q. Wang, X. Qi, L. Yu, P. Sulc, F. Zhang, H. Yan*, S. Jiang*',
    title: 'DNA Origami Tessellations',
    journal: 'J. Am. Chem. Soc. 145, 25, 13858-13868 (2023).'
  }
];

const publications2022 = [
  {
    number: '226',
    authors: "D. Fu', R. Pradeep', A. Prasad', F. Zhang, D. Williams, J. Schreck, H. Yan* and J. Reif*.",
    title: 'Automated design of 3D DNA origami with non-rasterized 2D curvature',
    journal: 'Science Advances 8, eade445, (2022).'
  },
  {
    number: '225',
    authors: "X. Zhou', D. Satyabola', H. Liu, S. Jiang, X. Qi, L. Yu, S. Lin, Y. Liu, N.W. Woodbury*, H. Yan*.",
    title: 'Two-Dimensional Excitonic Networks Directed by DNA Templates as an Efficient Model Light-Harvesting and Energy Transfer System',
    journal: 'Angew. Chem. Int. Ed. 61, e2022112, (2022).'
  },
  {
    number: '224',
    authors: "R. Pradeep', J. Procyk', P. Nandi, A. Prasad, Y. Xu, E. Poppleton, D. Williams, F. Zhang, H. Yan, P. Chiu*, N. Stephanopoulos*, and P. Sulc*", 
    title: 'Coarse-Grained Simulations for the Characterization and Optimization of Hybrid Protein-DNA Nanostructures',
    journal: 'ACS Nano 16, 14086-14096, (2022).'
  },
  {
    number: '223',
    authors: 'L. Ma, Y. Liu, C. Han, A. Movsesyan, P. Li, H. Li, P. Tang, Y. Yuan, S. Jiang, W. Ni, H. Yan, A. Govorov, Z. Wang, X. Lan*',
    title: 'DNA-Assembled Chiral Satellite-Core Nanoparticle Superstructures: Two-State Chiral Interactions from Dynamic and Static Conformations',
    journal: 'Nano Letters 22, 4784−4791, (2022).'
  },
  {
    number: '222',
    authors: 'K. Chen, F. Xu, Y. Hu, H. Yan*, L. Pan*',
    title: 'DNA Kirigami Driven by Polymerase-Triggered Strand Displacemen',
    journal: 'Small 18, 2201478, (2022).'
  },
  {
    number: '221',
    authors: "X. Zhou, H. Liu, F. Djutanta, D. Satyabola, S. Jiang, X. Qi, L. Yu, S. Lin, R.F. Hariadi, Y. Liu, N.W. Woodbury*, H. Yan*.",
    title: 'DNA-Templated Programmable Excitonic Wires for Micron-Scale Exciton Transport',
    journal: 'Chem. 8, 2442-2459, (2022).'
  },
  {
    number: '220',
    authors: 'X. Zhou, S. Lin, H. Yan*',
    title: 'Interfacing DNA nanotechnology and biomimetic photonic complex: advances and prospects in energy and biomedicine',
    journal: 'J. Nanobiotechnology 20, 257, (2022).'
  },
  {
    number: '219',
    authors: "C. Simmons', T. MacCulloch', M. Krepl, M. Matthies, A. Buchberger, I. Crawford, J. Sponer, P. Sulc, N. Stephanopoulos*, H. Yan*.",
    title: 'The influence of Holliday junction sequence and dynamics on DNA crystal self-assembly',
    journal: 'Nat. Commun. 13, 3112, (2022).'
  },
  {
    number: '218',
    authors: 'L. Liu, F. Hong, H. Liu, X. Zhou, S. Jiang, P. Sulc, J. Jiang*, H. Yan*',
    title: 'A localized DNA Finite State Machine with Temporal Resolution',
    journal: 'Science Advances 8, eabm9530, (2022).'
  },
  {
    number: '217',
    authors: "J. Bohlin', E. Poppleton', M. Matthies', J. Procyk', A. Mallya, H. Yan, P. Sulc*", 
    title: 'Design and simulation of DNA, RNA, and hybrid protein-nucleic acid nanostructures with OxView',
    journal: 'Nature Protocols 17, 1762–1788, (2022).'
  },
  {
    number: '216',
    authors: 'C. Zhang*, X. Ma, X. Zheng, Y. Ke, K. Chen, D. Liu, Z. Lu, J. Yang*, H. Yan*',
    title: 'Programmable Allosteric DNA Regulations for Molecular Networks and Nanomachines',
    journal: 'Science Advances 8, eabl4589, (2022).'
  },
  {
    number: '215',
    authors: "S. Dey', A. Dorey', L. Abraham', Y. Xing, I. Zhang, F. Zhang, S. Howorka*, H. Yan*", 
    title: 'A Reversibly Gated Protein-Transporting Membrane Channel Made of DNA',
    journal: 'Nat. Commun. 13, 2271, (2022).'
  }
];

const publications2021 = [
  {
    number: '214',
    authors: 'H. Liu, F. Hong, F. Smith, J. Goertz, T. Ouldridge, M. Stevens, H. Yan, P. Sulc*',
    title: 'Kinetics of RNA and RNA:DNA hybrid strand displacement',
    journal: 'ACS Synth. Biol. 10, 3066-3073, (2021).'
  },
  {
    number: '213',
    authors: 'Y. Liu, L. Ma, S. Jiang, C. Han, P. Tang, H. Yang, X. Duan, N. Liu*, H. Yan*, X. Lan*',
    title: 'DNA Programmable Self-Assembly of Planar, Thin-Layered Chiral Nanoparticle Superstructures with Complex Two-Dimensional Patterns',
    journal: 'ACS Nano 15, 16664-16672, (2021).'
  },
  {
    number: '212',
    authors: 'T. Yuan, Y. Shao, X. Zhou, Q. Liu, Z. Zhu, B. Zhou, Y. Dong, N. Stephanopoulos, S. Gui*, H. Yan*, D. Liu*',
    title: 'Highly Permeable DNA Supramolecular Hydrogel Promotes Neurogenesis and Functional Recovery after Completely Transected Spinal Cord Injury',
    journal: 'Advanced Materials 33, 2102428, (2021).'
  },
  {
    number: '211',
    authors: 'Y. Zhang, Z. Qu, . Jiang, Y. Liu, R. Narayanan, D. Williams, X. Zuo, L. Wang, H. Yan, H. Liu* & C. Fan',
    title: 'Prescribing Silver Chirality with DNA Origami',
    journal: 'J. Am. Chem. Soc 143, 8639-8646, (2021).'
  },
  {
    number: '210',
    authors: 'S. Jiang, N. Pal, F. Hong, N. E. Fahmi, H. Hu, M. Vrbanac, H. Yan*, N. G. Walter*, Y. Liu*',
    title: 'Regulating DNA Self-Assembly Dynamics with Controlled Nucleation',
    journal: 'ACS Nano 15, 5384-5396, (2021).'
  },
  {
    number: '209',
    authors: 'S. Dey, C. Fan*, K. V. Gothelf*, J. Li*, C. Lin*, L. Liu, N. Liu*, M. A. D. Nijenhuis, B. Sacca*, F. C. Simmel*, H. Yan* & P. Zhan',
    title: 'DNA Origami',
    journal: 'Nat. Rev. Methods Primers 1, 13, (2021).'
  }
];

const publications2020 = [
  {
    number: '208',
    authors: 'S. Jiang, Z. Ge, S. Mou, H. Yan*, C. Fan*',
    title: 'Designer DNA Nanostructures for Therapeutics',
    journal: 'Chem 7, 1156-1179, (2020).'
  },
  {
    number: '207',
    authors: "G. Yao', F. Zhang', F. Wang', T. Peng, H. Liu, E. Poppleton, P. Sulc, S. Jiang, L. Liu, C. Gong, X. Jing, X. Liu, L. Wang, Y. Liu, C. Fan*, H. Yan*", 
    title: 'Meta-DNA Structures',
    journal: 'Nat. Chem. 12, 1067-1075, (2020).'
  },
  {
    number: '206',
    authors: "C.R. Simmons', T. MacCulloch', F. Zhang, Y. Liu, N. Stephanopoulos & H. Yan", 
    title: 'A Self-Assembled Rhombohedral DNA Crystal Scaffold with Tunable Cavity Sizes and High Resolution Structural Detail',
    journal: 'Angew. Chem. Int. Ed. 59, 18619-18626, (2020).'
  },
  {
    number: '205',
    authors: 'S. Jiang, F. Zhang, H. Yan',
    title: 'Complex assemblies and crystals guided by DNA',
    journal: 'Nat. Mater. 19, 694-700, (2020).'
  },
  {
    number: '204',
    authors: 'J. Georges, X. Qi, X. Liu, Y. Zhou, E. C. Woolf, A. Valeri, Z. Al-Atrache, E. Belykh, B. Feuerstein, M. Preul, A. C. Scheck, M. Reiser, T. Anderson, J. Gopez, D. Appelt, S. Yocom, J. Eschbacher, H. Yan, P. Nakaji',
    title: 'A Fluorescent Aptamer Provides Rapid and Specific Ex Vivo Diagnosis of Central Nervous System Lymphoma from Rodent Xenograft Biopsies',
    journal: 'J. Neurosurg. 134, 1728-1737, (2020).'
  },
  {
    number: '203',
    authors: "J. Li', J. Dai', S. Jiang', M. Xie', T. Zhai, L. Guo, S. Cao, S. Xing, Z. Qu, Y. Zhao, F. Wang, Y. Yang, L. Liu, X. Zuo, L. Wang*, H. Yan*, C. Fan*", 
    title: 'Encoding quantized fluorescence states with fractal DNA frameworks',
    journal: 'Nat. Commun. 11, 2185, (2020).'
  },
  {
    number: '202',
    authors: 'X. Qi, X. Liu, L. Matiski, R. Rodriguez Del Villar, T. Yip, F. Zhang, S. Sokalingam, S. Jiang, L. Liu, H. Yan, Y. Chang',
    title: 'RNA Origami Nanostructures for Potent and Safe Anti-Cancer Immunotherapy',
    journal: 'ACS Nano 14, 4727-4740, (2020).'
  },
  {
    number: '201',
    authors: "F. Hong, D. Ma, K, Wu, L.A. Mina, R.C. Luiten, Y. Liu, H. Yan*, A.A. Green*", 
    title: 'Precise and Programmable Detection of Mutations Using Ultraspecific Riboregulators',
    journal: 'Cell 180, 1018-1032, (2020).'
  },
  {
    number: '200',
    authors: 'G. Yao, J. Li, Q. Li, X. Chen, X. Liu, F. Wang, Z. Qu, Z. Ge, R.P. Narayanan, D. Williams, H. Pei, X. Zuo, L. Wang, H. Yan, B.L. Feringa*, C. Fan*',
    title: 'Programming nanoparticle valence bonds with single-stranded DNA encoders',
    journal: 'Nature Materials 19, 781-788, (2020).'
  }
];

const publications2019 = [
  {
    number: '199',
    authors: 'C. Zhang*, Z. Wang, Y. Liu, J. Yang, X. Zhang, Y. Li, L. Pan, Y. Ke*, H. Yan*',
    title: 'Nicking-Assisted Reactant Recycle to Implement Entropy-Driven DNA Circuit',
    journal: 'J. Am. Chem. Soc. 141, 17189-17197, (2019).'
  },
  {
    number: '198',
    authors: "Z. Zhao, C. Wang, H. Yan,* Y. Liu*", 
    title: 'Soft Robotics Programmed with Double Crosslinking DNA Hydrogels',
    journal: 'Advanced Functional Materials 1905911, (2019).'
  },
  {
    number: '197',
    authors: 'X. Jing, F. Zhang, P. Pan, X. Dai, J. Li, L. Wang, H. Yan, C. Fan',
    title: 'Solidifying framework nucleic acids with silica',
    journal: 'Nature Protocols 14, 2416-2436, (2019).'
  },
  {
    number: '196',
    authors: 'X. Wang, A. Chandrasekaran, R. Arun, Z. Shen, Y. Ohayon, T. Wang, M. Kizer, R. Sha, C. Mao, H. Yan, X. Zhang, S. Liao, B. Ding, B. Chakraboty, N. Jonoska, D. Niu, H. Gu, J. Chao, X. Gao, Y. Li, T. Ciengshin, N. Seeman',
    title: 'Paranemic Crossover DNA: There and Back Again',
    journal: 'Chemical Reviews 119, 6273-6289, (2019).'
  },
  {
    number: '195',
    authors: 'Y. Zhou, X. Qi, Y. Liu, F. Zhang, H. Yan',
    title: 'DNA Nanoscaffold-Assisted Selection of Femtomolar Bivalent Aptamers for Human-Thrombin with Potent Anticoagulant Activity',
    journal: 'ChemBioChem 20, 2494-2503 (2019).'
  },
  {
    number: '194',
    authors: "S. Mandal', X. Zhou', S. Lin, H. Yan, N. Woodbury", 
    title: 'Directed Energy Transfer through DNA-Templated J-aggregates',
    journal: 'Bioconjugate Chemistry 30, 1870-1879, (2019).'
  },
  {
    number: '193',
    authors: "X. Zhou', S. Mandal', S. Jiang, S. Lin, J. Yang, Y. Liu, D. Whitten, N. Woodbury, H. Yan", 
    title: 'Efficient Long-rnage, Directional Energy Transfer through DNA-Templated Dye Aggregates',
    journal: 'J. Am. Chem. Soc. 141, 8473-8481, (2019).'
  },
  {
    number: '192',
    authors: 'L. Xin, M. Lu, S. Both, M. Pfeifer, M. Urban, C. Zhou, H. Yan, T. Weiss, N. Liu, K. Lindfors',
    title: 'Watching a Single Fluorofphore Molecule Walk into a Plasmonic Hotspot',
    journal: 'ACS Photonics 6, 985-993, (2019).'
  },
  {
    number: '191',
    authors: 'Y. Xu, S. Jiang, C. Simmons, R. Narayanan, F. Zhang, A. Aziz, H. Yan, N. Stephanopoulos*',
    title: 'Tunable Nanoscale Cages from Self-Assembling DNA and Protein Building Blocks',
    journal: 'ACS Nano 13, 3545-3554, (2019).'
  },
  {
  number: '190',
  authors: "H. Jun, F. Zhang, T. Shepherd, S. Ratanalert, X. Qi, H. Yan, M. Bathe*",
    title: 'Autonomously designed free-form 2D DNA origami',
    journal: 'Science Advances 5, eaav0655, (2019).'
  },
  {
    number: '189',
    authors: 'Z. Ge, J. Fu, M. Liu, S. Jiang, A. Andreoni, X. Zuo, Y. Liu, H. Yan*, C. Fan*',
    title: 'Constructing Submonolayer DNA Origami Scaffold on Gold Electrode for Wiring of Redox Enzymatic Cascade Pathways',
    journal: 'ACS Appl. Mater. Interfaces 11, 13881-13887 (2019).'
  },
  {
    number: '188',
    authors: 'Z. Ge, Z. Su, C. R. Simmons, J. Li, S. Jiang, W. Li, Y. Yang, Y. Liu*, W. Chiu, C. Fan*, H. Yan*',
    title: 'Redox Engineering of Cytochrome c using DNA Nanostructure-Based Charged Encapsulation and Spatial Control',
    journal: 'ACS Appl. Mater. Interfaces 11, 13874-13880 (2019).'
  }
];

const publications2018 = [
  {
    number: '187',
    authors: 'F. Hong, S. Jiang, X. Lan, R. Narayanan, P. Sulc, F. Zhang*, Y. Liu*, H. Yan*',
    title: 'Layered-Crossover Tiles with Precisely Tunable Angles for 2D and 3D DNA Crystal Engineering',
    journal: 'J. Am. Chem. Soc. 140, 14670-14676, (2018).'
  },
  {
    number: '186',
    authors: "X. Qi', F. Zhang'*, Z. Su', S. Jiang, D. Han, B. Ding, Y. Liu, W. Chiu, P. Yin, H. Yan*", 
    title: 'Programing Molecular Topologies from Single-stranded Nucleic Acids',
    journal: 'Nature Commun. 9, 4579, (2018).'
  },
  {
    number: '185',
    authors: "D. Jiang', Z. Ge', H. Im, C. England, D. Ni, J. Hu, L. Zhang, C. Kutyreff, Y. Yan, Y. Liu, S. Cho, J. Engle, J. Shi, P. Huang, C. Fan*, H. Yan*, W. Cai*", 
    title: 'DNA-origami nanostructures can exhibit preferential renal uptake and alleviate acute kidney injury',
    journal: 'Nature Biomed. Eng. 2, 865-877, (2018).'
  },
  {
    number: '184',
    authors: 'X. Lan*, T. Liu, Z. Wang, A. Govorov*, H. Yan, Y. Liu*',
    title: 'DNA-Guided Plasmonic Helix with Switchable Chirality',
    journal: 'J. Am. Chem. Soc. 140, 11763-11770, (2018).'
  },
  {
    number: '183',
    authors: "F. Zhang', C. Simmons', J. Gates, Y. Liu, H. Yan*", 
    title: 'Self-Assembly of a 3D DNA Crystal Structure with Rationally Designed Six-Fold Symmetry',
    journal: 'Angew Chem Int Ed. 57, 12504-12507, (2018).'
  },
  {
    number: '182',
    authors: "X. Liu', F. Zhang', X. Jing', M. Pan, P. Liu, W. Li, B. Zhu, J. Li, H. Chen, L. Wang, J. Lin, Y. Liu, D. Zhao, H. Yan* and C. Fan*", 
    title: 'Complex silica composite nanomaterials templated with DNA origami',
    journal: 'Nature 559, 593-598, (2018).'
  },
  {
    number: '181',
    authors: 'J. Li, A. Johnson-Buck, Y. Yang, W. Shih, H. Yan, N. Walter*',
    title: 'Exploring the speed limit of toehold exchange with a cartwheeling DNA acrobat',
    journal: 'Nature Nanotechnol. 13, 723-729, (2018).'
  },
  {
    number: '180',
    authors: 'S. Li, Q. Jiang, S. Liu, Y. Zhang, Y. Tian, C. Song, J. Wang, Y. Zou, G. J. Anderson, J. Han, Y. Chang, Y. Liu, C. Zhang, L. Chen, G. Zhou, G. Nie*, H. Yan*, B. Ding*, Y. Zhao*',
    title: 'A DNA nanorobot functions as a cancer therapeutic in response to a molecular trigger in vivo',
    journal: 'Nature Biotechnology 36, 258-264, (2018).'
  },
  {
    number: '179',
    authors: 'E. Boulais, N. Sawaya, R. Veneziano, A. Andreoni, J. Banal, T. Kondo, S. Mandal, S. Lin, G. Schlau-Cohen, N. Woodbury, H. Yan*, A. Aspuru-Guzik*, M. Bathe*',
    title: 'Programmed coherent coupling in a synthetic DNA-based excitonic circuit',
    journal: 'Nature Materals 17, 159-166, (2018).'
  }
];

const publications2017 = [
  {
    number: '178',
    authors: 'Y. R. Yang, J. Fu, S. Wootten, X. Qi, M. Liu, H. Yan, Y. Liu*',
    title: '2D Enzyme Cascade Network with Efficient Substrate Channeling by Swinging Arms',
    journal: 'ChemBioChem. DOI: 10.1002/cbic.201700613 (2017).'
  },
  {
    number: '177',
    authors: "D. Han', X. Qi', C. Myhrvold, B. Wang, M. Dai, S. Jiang, M. Bates, Y. Liu, B. An*, F. Zhang*, H. Yan* and P. Yin*", 
    title: 'Single-stranded DNA and RNA Origami',
    journal: 'Science 358, eaao2648, (2017).'
  },
  {
    number: '176',
    authors: 'F. Zhang, H. Yan*',
    title: 'DNA self-assembly scaled up',
    journal: 'Nature 552, 34-35, (2017).'
  },
  {
    number: '175',
    authors: 'A. Carey, H. Zhang, M. Liu, D. Sharaf, N. Akram, H. Yan, S. Lin, N. Woodbury*, D. Seo*',
    title: 'Enhancing Photocurrent Generation in Photosynthetic Reaction Center-based Photoelectrochemical Cells with Biomimetic DNA Antenna',
    journal: 'ChemSusChem 10, 4457-4460, (2017).'
  },
  {
    number: '174',
    authors: 'S. Jiang, F. Hong, H. Hu, H. Yan*, Y. Liu*',
    title: 'Understanding the Elementary Steps in DNA Tile-Based Self-Assembly',
    journal: 'ACS Nano. 11, 9370-9381, (2017).'
  },
  {
    number: '173',
    authors: 'J. Li, A. A. Green, H. Yan, C. Fan',
    title: 'Engineering nucleic acid structures for programmable molecular circuitry and intracellular biocomputation',
    journal: 'Nature Chem. 9, 1056-1067, (2017).'
  },
  {
    number: '172',
    authors: 'C. Simmons, F. Zhang, T. MacCulloch, N. Fahmi, N. Stephanopoulos, Y. Liu, N. Seeman, H. Yan',
    title: 'Tuning the Cavity Size and Chirality of Self-Assembling 3D DNA Crystals.',
    journal: 'J. Am. Chem. Soc. 139, 11254-11260, (2017).'
  },
  {
    number: '171',
    authors: 'D. Mieritz, X. Li, A. Volosin, M. Liu, H. Yan, N. Walter, D. Seo',
    title: 'Tracking Single DNA Nanodevices in Herarchically Meso-Macroporous Antimony-Doped Tin Oxide Demonstrates Finite Confinement',
    journal: 'Langmuir 33, 6410-6418, (2017).'
  },
  {
    number: '170',
    authors: 'F. Hong, F. Zhang, Y. Liu*, H. Yan*',
    title: 'DNA Origami:Scaffolds for Creating Higher Order Structures',
    journal: 'Chem. Rev. 117, 12584-12640, (2017).'
  },
  {
    number: '169',
    authors: 'H. Zhang, A. Carey, K. Jeon, M. Liu, T. Murell, J. Locsin, S. Lin, H. Yan, N. Woodbury, D. Seo',
    title: 'A Highly Stable and Scalable Photosynthetic Reaction Center-Graphene Hybrid Electrode System for Biomimetic Solar Energy Transduction',
    journal: 'J. Mater. Chem. A. 5, 6038-6041, (2017).'
  },
  {
    number: '168',
    authors: 'F. Zhang, F. Hong, H. Yan*',
    title: 'DNA Origami Tiles: Nanoscale Mazes',
    journal: 'Nature Nanotechnol.12, 189-190, (2017).'
  },
  {
    number: '167',
    authors: 'Y. Dong, Y. Yang, Y. Zhang, D. Wang, X. Wei, S. Banerjee, Y. Liu, Z. Yang, H. Yan*, D. Liu*',
    title: 'Cuboid Vesicles Formed by Frame-guided Assembly on DNA Origami Scaffolds',
    journal: 'Angew Chem Int Ed. 156, 1586-1589, (2017).'
  },
  {
    number: '166',
    authors: 'A. Andreoni, S. Lin, H. Liu, R. E. Blankenship, H. Yan, N. Woodbury',
    title: 'Orange Carotenoid Protein as a Control Element in an Antenna System based on a DNA Nanostructure',
    journal: 'Nano Letters 17, 1174-1180, (2017).'
  }
];

const publications2016 = [
  {
    number: '165',
    authors: 'F. Hong, S. Jiang, T. Wang, Y. Liu*, H. Yan*',
    title: '3D Framework DNA origami with Layered Crossovers',
    journal: 'Angew Chem Int Ed. 128, 13024-13027, (2016).'
  },
  {
    number: '164',
    authors: 'A. Carey, H. Zhang, D. Mieritz, A. Volosin, A. Gardiner, R. Cogdell, H. Yan, D. Seo, S. lin, N. Woodbury*',
    title: 'Photocurrent generation by photosynthetic purple bacterial reaction centers interfaced with a porous antimony-doped tin oxide (ATO) electrode',
    journal: 'ACS Appl. Matter. Interfaces 8, 25104-25110, (2016).'
  },
  {
    number: '163',
    authors: 'J. Fu*, Y. Yang, S. Dhakal, Z. Zhao, M. Liu, T. Zhang, N. Walter, H. Yan',
    title: 'Assembly of Multi-Enzyme Complexes on DNA Nanostructures',
    journal: 'Nature Protocols 11, 2243-2273, (2016).'
  },
  {
    number: '162',
    authors: 'C. Simmons, F. Zhang, J. Birktoft, X. Qi, D. Han, Y. Liu, R. Sha, H. Abdallah, C. Hernandez, Y. Ohayon, N. Seeman*, H. Yan*',
    title: 'Construction and Structure Determination of a Three-dimensional DNA Crystal',
    journal: 'J. Am. Chem. Soc. 138, 10047-10054, (2016).'
  },
  {
    number: '161',
    authors: 'R. Veneziano, S. Ratanalert, K. Zhang, F. Zhang, H. Yan, W. Chiu, M. Bathe*',
    title: 'Designer nanoscale DNA assemblies programmed from the top down',
    journal: 'Science 10.1126/science.aaf4388 (2016).'
  },
  {
    number: '160',
    authors: 'F. Zhang*, S. Jiang, W. Li, A. Hunt, Y. Liu*, H. Yan*',
    title: 'Self-assembly of Complex DNA Tessellations using low symmetry multi-arm DNA tiles',
    journal: 'Angew Chem Int Ed. 55, 8860-8863, (2016).'
  },
  {
    number: '159',
    authors: 'G. Ke, M. Liu, S. Jiang, X. Qi, Y. R. Yang, S. Wootten, F. Zhang, Z. Zhu, Y. Liu*, C. J. Yang*, H. Yan*',
    title: 'Directional Regulation of Enzyme Pathways via the Control of Substrate Channeling on a DNA Origami Scaffold',
    journal: 'Angew Chem Int Ed. 55, 7483-7486, (2016).'
  },
  {
    number: '158',
    authors: 'M. Liu, J. Fu, X. Qi, S. Wootten, N. Woodbury, Y. Liu*, H. Yan*',
    title: 'A three-enzyme pathway with an optimized geometric arrangement to facilitate substrate transfer',
    journal: 'ChemBioChem 17, 1097-1101, (2016).'
  },
  {
    number: '157',
    authors: 'W. Li, F. Zhang, H. Yan*, Y. Liu*',
    title: 'DNA Based Arithmetic Function: Half Adder Based on DNA Strand Displacement',
    journal: 'Nanoscale 8, 3775-3784, (2016).'
  },
  {
    number: '156',
    authors: 'Z. Zhao, J. Fu, S. Dhakal, A. Johnson-Buck, M. Liu, T. Zhang, N. Woodbury, Y. Liu, N. Walter, H. Yan*',
    title: 'Nano-caged Enzymes with Enhanced Catalytic Activity and Increased Stability against Protease Digestion',
    journal: 'Nature Commun. 7, 10619 (2016).'
  },
  {
    number: '155',
    authors: 'S. Dhakal, M. R. Adendorff, M. Liu, H. Yan*, M. Bathe*, N. G. Walter*',
    title: 'Rational design of DNA-actuated enzyme nanoreactors guided by single molecule analysis',
    journal: 'Nanoscale 8, 3125-3137, (2016).'
  },
  {
    number: '154',
    authors: 'C. Zhang, J. Yang, S. Jiang, Y. Liu*, H. Yan*',
    title: 'DNAzyme-based Logic Gate-mediated DNA Self-assembly',
    journal: 'Nano Letters 16, 736-741, (2016).'
  }
];

const publications2015 = [
  {
    number: '153',
    authors: 'H. Yan, Y. Zhang',
    title: 'DNA/RNA-Based Nanostructures for Cancer Nanomedicine',
    journal: 'Section III: Novel Nanometerials for Diagnosis and Therapy, CaNanoPlan 14-19, (2015).'
  },
  {
    number: '152',
    authors: 'F. Zhang, S. Jiang, S. Wu, Y. Li, C. Mao, Y. Liu*, H. Yan*',
    title: 'Complex wireframe DNA origami nanostructures with multi-arm junction vertices',
    journal: 'Nature Nanotechnol. 10, 779-784, (2015).'
  },
  {
    number: '151',
    authors: 'Y. Yang, Y. Liu, H. Yan*',
    title: 'DNA nanostructures as programmable biomolecular scaffolds',
    journal: 'Bioconjugate Chemistry 26, 1381-1395, (2015).'
  },
  {
    number: '150',
    authors: 'J. F. Georges, X. Liu, J. Eschbacher, J. Nichols, M. A. Mooney, A. Joy, R. F. Spetzler, B. G. Feuerstein, M. C. Preu, T. Anderson, H. Yan, P. Nakaji*',
    title: 'Use of a Conformational Switching Aptamer for Rapid and Specific Ex Vivo Identification of Central Nervous System Lymphoma in a Xenograft Model.',
    journal: 'PloS one 10(4), (2015).'
  },
  {
    number: '149',
    authors: 'A. Samanta, S. Banerjee, Y. Liu*',
    title: 'DNA nanotechnology for nanophotonic applications',
    journal: 'Nanoscale 7, 2210-2220, (2015).'
  }
// Removed stray closing bracket

// Removed duplicate/empty publications2014 declaration
];

const publications2013 = [
  { number: '133', authors: 'A. Samanta, Z. Deng, H. Yan, Y. Liu*', title: 'A perspective on Functionalizing Colloidal Quantum Dots with DNA', journal: 'Nano Research 6, 853-870, (2013).' },
  { number: '132', authors: 'D. Han, S. Jiang, A. Samanta, Y. Liu, H. Yan*', title: 'Unidirectional Scaffold-Strand Arrangement in DNA Origami', journal: 'Angew Chem Int Ed. 52, 9031-9034, (2013).' },
  { number: '131', authors: 'Q. Mei, R. H. Johnson, X. Wei, F. Su, Y. Liu, L. Kelbauskas, S. Lindsay, D. R. Meldrum, H. Yan', title: 'On-chip isotachophoresis separation of functional DNA origami capture nanoarrays from cell lysate', journal: 'Nano Research 6, 712-719, (2013).' },
  { number: '130', authors: 'M. Liu, J. Fu*, C. Hejesen, Y. Yang, N. W. Woodbury, K. Gothelf, Y. Liu, H. Yan*', title: 'A DNA Tweezer-Actuated Enzyme Nanoreactor', journal: 'Nature Comm. 4:2127 (2013).' },
  { number: '129', authors: 'S. Pal, P. Dutta, H. Wang, Z. Deng, S. Zou, H. Yan, Y. Liu*', title: 'Quantum Efficiency Modification of Organic Fluorophores Using Gold Nanoparticles on DNA Origami Scaffolds', journal: 'J. Phys. Chem. C 117, 12735-12744, (2013).' },
  { number: '128', authors: 'W. Li*, Y. Yang, H. Yan, Y. Liu*', title: '3-Input Majority Logic Gate and Multiple Input Logic Circuit Based on DNA Strand Displacement', journal: 'Nano Letters 13, 2980-2988, (2013).' },
  { number: '127', authors: 'A. Johnson-Buck, J. Nangreave, S. Jiang, H. Yan, N. Walter*', title: 'Multifactorial Modulation of Binding and Dissociation Kinetics on Two-Dimensional DNA Nanostructures', journal: 'Nano Letters 13, 2754-2759, (2013).' },
  { number: '126', authors: 'F. Zhang, Y. Liu*, H. Yan*', title: 'Complex Archimedean Tiling Self-assembled from DNA Nanostructures', journal: 'J. Am. Chem. Soc. 135, 7458-7461, (2013).' },
  { number: '125', authors: 'X. Wei, J. Nangreave, S. Jiang, H. Yan, Y. Liu*', title: 'Mapping the Thermal Behavior of DNA Origami Nanostructures', journal: 'J. Am. Chem. Soc. 135, 6165-6176, (2013).' },
  { number: '124', authors: 'J. Flory, S. Shinde, S. Lin, Y. Liu, H. Yan, G. Ghirlanda, P. Fromme*', title: 'PNA-peptide Assembly in a 3D DNA Nanocage at Room Temperature', journal: 'J. Am. Chem. Soc. 135, 6985-6993, (2013).' },
  { number: '123', authors: 'Y. Yang, Z. Zhao, F. Zhang, J. Nangreave, Y. Liu*, H. Yan*', title: 'Self-assembly of DNA Rings from Scaffold Free DNA Tiles', journal: 'Nano letters 13, 1862-1866, (2013).' },
  { number: '122', authors: 'Z. Deng, S. Pal, A. Samanta, H. Yan, Y. Liu*', title: 'DNA Functionalization of Colloidal II-VI Semiconductor Nanowires', journal: 'Chemical Sciences 3, 2234-2240, (2013).' },
  { number: '121', authors: 'X. Liu, Y. Liu*, H. Yan*', title: 'Functionalized DNA Nanostructures for Nanomedicine', journal: 'Israel Journal of Chemistry, Special Issue on Supramolecular Chemistry for Materials and Medicine, Invited review, 53, 555-566 (2013).' },
  { number: '120', authors: 'O. Schulz, Z. Zhao, A. Ward, M. Koenig, F. Koberling, Y. Liu, J. Enderlein, H. Yan*, R. Ros*', title: 'Tip Induced Fluorescence Quenching for Nanometer Optical and Topographical Resolution', journal: 'Optical Nanoscopy, 2:1, (2013).' },
  { number: '119', authors: 'D. Han*, S. Pal, Y. Yang, S. Jiang, J. Nangreave, Y. Liu*, H. Yan*', title: 'DNA Gridiron Nanostructures Based on Four-Arm Junctions', journal: 'Science, 339, 1412-1415, (2013).' },
  { number: '118', authors: 'A. Johnson-Buck, J. Nangreave, D. Kim, M. Bathe, H. Yan, N. Walter*', title: 'Super-Resolution Fingerprinting Detects Chemical Reactions and Idiosyncrasies of Single DNA Pegboards', journal: 'Nano Letters, 13, 728-733 (2013).' },
  { number: '117', authors: 'Z. Zhao, Y. Liu*, H. Yan*', title: 'DNA Origami Templated Self-assembly of Discrete Length Single Wall Carbon Nanotubes', journal: 'Org. Biomol. Chem., 11, 596-598 (2013).' }
];
const publications2012 = [
  { number: '116', authors: 'Z. Deng, A. Samanta, J. Nangreave, H. Yan*, Y. Liu*', title: 'Robust DNA Functionalized Core/Shell Quantum Dots with Fluorescent Emission Spanning from UV-Vis to Near IR and Compatible with DNA Directed Self-Assembly', journal: 'J. Am. Chem. Soc., 134, 17424-17427 (2012).' },
  { number: '115', authors: 'Y. Yang, D. Han, J. Nangreave, Y. Liu*, H. Yan*', title: 'DNA Origami with Double-Stranded DNA As a Unified Scaffold', journal: 'ACS Nano, 6, 8209-8215 (2012).' },
  { number: '114', authors: 'N. Lu, H. Pei, Z. Ge, C. R. Simmons, H. Yan*, C. Fan*', title: 'Charge Transport within A Three-Dimensional DNA nanostructure Framework', journal: 'J. Am. Chem. Soc., 134, 13148-13151 (2012).' },
  { number: '113', authors: 'Q. Jiang, C. Song, J. Nangreave, X. Liu, L. Lin, D. Qiu, Z. Wang, G. Zou, X. Liang, H. Yan*, B. Ding*', title: 'DNA Origami as a Carrier for Circumvention of Drug Resistance', journal: 'J. Am. Chem. Soc., 134, 13396-13403 (2012).' },
  { number: '112', authors: 'X. Liu, Y. Xu, T. Yu, C. Craig, Y. Liu, H. Yan*, Y. Chang*', title: 'A DNA Nanostructure Platform for Directed Assembly of Synthetic Vaccines', journal: 'Nano Letters, 12, 4254-4259 (2012).' },
  { number: '111', authors: 'Z. Deng*, D. Cao, J. He, S. Lin, S. M. Lindsay, Y. Liu*', title: 'Solution Synthesis of Ultrathin Single-Crystalline SnS Nanoribbons for Photodetectors via Phase Transition and Surface Processing', journal: 'ACS Nano, 6, 6197-6207 (2012).' },
  { number: '110', authors: 'A. Samanta, Z. Deng, Y. Liu*', title: 'Aqueous Synthesis of Glutathione-Capped CdTe/CdS/ZnS and CdTe/CdSe/ZnS Core/Shell/Shell Nanocrystal Heterostructures', journal: 'Langmuir, 28, 8205-8215 (2012).' },
  { number: '109', authors: 'J. Fu, M. Liu, Y. Liu*, H. Yan*', title: 'Spatially-Interactive Biomolecular Networks Organized by Nucleic Acid Nanostructures', journal: 'Acc. Chem. Res. 45, 1215-1226 (2012).' },
  { number: '108', authors: 'F. Zhang, J. Nangreave, Y. Liu*, H. Yan*', title: 'Reconfigurable DNA Origami to Generate Quasi-Fractal Patterns', journal: 'Nano Letters, 12, 3290-3295 (2012).' },
  { number: '107', authors: 'A. V. Pinheiro, J. Nangreave, S. Jiang, H. Yan, Y. Liu*', title: 'Steric Crowding and the Kinetics of DNA Hybridization within a DNA Nanostructure System', journal: 'ACS Nano, 6, 5521-5530 (2012).' },
  { number: '106', authors: 'J. Fu, H. Yan*', title: 'Controlled Drug Release by a Nanorobot', journal: 'Nature Biotechnol. 30, 407-408 (2012).' },
  { number: '105', authors: 'J. Fu, M. Liu, Y. Liu, N. W. Woodbury*, H. Yan*', title: 'Interenzyme Substrate Diffusion for an Enzyme Cascade Organized on Spatially Addressable DNA Nanostructures', journal: 'J. Am. Chem. Soc. 134, 5516-5519 (2012).' },
  { number: '104', authors: 'Z. Li, L. Wang, H. Yan, Y. Liu*', title: 'Effect of DNA Hairpin Loops on the Twist of Planar DNA Origami Tiles', journal: 'Langmuir, 28, 1959-1965 (2012).' }
];
const publications2011 = [
  { number: '103', authors: 'A. V. Pinheiro, D. Han, W. M. Shih*, H. Yan*', title: 'Challenges and opportunities for structural DNA nanotechnology', journal: 'Nature Nanotechnol. 6, 763-772 (2011).' },
  { number: '102', authors: 'S. Pal, Z. Deng, H. Wang, S. Zou, Y. Liu*, H. Yan*', title: 'DNA Directed Self-Assembly of Anisotropic Plasmonic Nanostructures', journal: 'J. Am. Chem. Soc. 133, 17606-17609 (2011).' },
  { number: '101', authors: 'P. Dutta, R. Varghese, J. Nangreave, S. Lin, H. Yan, Y. Liu*', title: 'DNA Directed Artificial Light Harvesting Antenna', journal: 'J. Am. Chem. Soc. 133, 11985-11993 (2011).' },
  { number: '100', authors: 'C. R. Simmons, D. Schmitt, X. Wei, D. Han, A. M. Volosin, D. M. Ladd, D. Seo, Y. Liu, H. Yan*', title: 'Size-Selective Incorporation of DNA Nanocages into Nanoporous Antimony-doped Tin Oxide Materials', journal: 'ACS Nano, 5, 6060-6068 (2011).' },
  { number: '99', authors: 'Z. Zhao, Y. Liu, H. Yan*', title: 'Organizing DNA Origami Tiles Into Larger Structures Using Pre-formed Scaffold Frames', journal: 'Nano Letters, 11, 2997-3002 (2011).' },
  { number: '98', authors: 'T. Torring, N. V. Voigt, J. Nangreave, H. Yan*, K. Gothelf*', title: 'DNA Origami: A quantum leap for self-assembly of complex structures', journal: 'Chem. Soc. Rev, 40, 5636-5646 (2011).' },
  { number: '97', authors: 'X. Liu, H. Yan, Y. Liu*, Y. Chang*', title: 'Targeted Cell-Cell Interactions by DNA Nanoscaffold-Templated Multivalent Bi-specific Aptamers', journal: 'Small, 7, 1673-1682 (2011).' },
  { number: '96', authors: 'D. Han*, S. Pal, J. Nangreave, Z. Deng, Y. Liu*, H. Yan*', title: 'DNA Origami with Complex Curvatures in Three-dimensional Space', journal: 'Science, 332, 342-346 (2011).' },
  { number: '95', authors: 'S. Pal, R. Varghese, H. Yan*, Y. Liu*', title: 'Site Specific Synthesis and in-situ Immobilization of Fluorescent Silver Nanoclusters on DNA Nanoscaffolds Using Tollens Reaction', journal: 'Angew Chem Int Ed, 50, 4176-4179 (2011).' },
  { number: '94', authors: 'Z. Deng, L. Tong, S. Lin, M. Flores, J. Cheng, H. Yan, Y. Liu*', title: 'High Quality Manganese-Doped Zinc Sulfide Quantum Rods with Tunable Dual-Color and Multi-Photon Emissions', journal: 'J. Am. Chem. Soc, 133, 5389-5396 (2011).' },
  { number: '93', authors: 'J. Nangreave, H. Yan, Y. Liu*', title: 'DNA Nanostructures as Models for Evaluating the Role of Enthalpy and Entropy in Polyvalent Binding', journal: 'J. Am. Chem. Soc, 133, 4490-4497 (2011).' },
  { number: '92', authors: 'Q. Mei, X. Wei, F. Su, Y. Liu, C. Youngbull, R. Johnson, S. Lindsay, H. Yan*, D. Meldrum*', title: 'Stability of DNA Origami Nanoarrays in Cell Lysate', journal: 'Nano Letters, 11, 1477-1482 (2011).' },
  { number: '91', authors: 'Z. Zhao, Y. Liu*, H. Yan*', title: 'Encapsulation of Gold Nanoparticles in a DNA Origami Cage', journal: 'Angew Chem Int Ed, 50, 2041-2044 (2011).' }
];
const publications2010 = [
  { number: '90', authors: 'B. Ding, H. Wu, W. Xu, Z. Zhao, Y. Liu, H. Yu*, H. Yan*', title: 'Interconnecting Gold Islands with DNA Origami Nanotubes', journal: 'Nano Lett. 10, 5065-5069 (2010).' },
  { number: '89', authors: 'D. Han, S. Pal, Y. Liu*, H. Yan*', title: 'Folding and Cutting DNA into Reconfigurable Topological Nanostructures', journal: 'Nature Nanotechnol. 5, 712-717 (2010).' },
  { number: '88', authors: 'Z. Deng, H. Yan, Y. Liu*', title: 'Controlled Colloidal Growth of Ultra-Thin Single-Crystal ZnS Nanowires with Magic-Size Diameter', journal: 'Angew. Chem. Int. Ed. 49, 8695-8698 (2010).' },
  { number: '87', authors: 'Z. Li, M. Liu, L. Wang, J. Nangreave, H. Yan, Y. Liu*', title: 'Molecular Behavior of DNA Origami in Higher Order Self-assembly', journal: 'J. Am. Chem. Soc. 138, 13545-13552 (2010).' },
  { number: '86', authors: 'H. Pei, N. Lu, Y. Wen, S. Song, Y. Liu, H. Yan*, C. Fan*', title: 'A DNA Nanostructure-based Biomolecular Probe Carrier Platform for Electrochemical Biosensing', journal: 'Advanced Materials, 22, 4754-4758 (2010).' },
  { number: '85', authors: 'J. Nangreave, D. Han, Y. Liu, H. Yan*', title: 'DNA Origami: A History and Current Perspective', journal: 'Curr Opin Chem Biol 14, 608-615 (2010).' },
  { number: '84', authors: 'N. Stephanopoulos, M. Liu, G. Tong, Z. Li, Y. Liu, H. Yan*, M. Francis*', title: 'Immobilization and One-Dimensional Arrangement of Virus Capsids With Nanoscale Precision Using DNA Origami', journal: 'Nano Lett. 10, 2714-2720 (2010).' },
  { number: '83', authors: 'Z. Deng*, O. Schulz, S. Lin, B. Ding, X. Liu, X. Wei, R. Ros, H. Yan, Y. Liu*', title: 'Aqueous Synthesis of Zinc-Blende CdTe/CdS Magic-Core/Thick-Shell Tetrahedral Shaped Nanocrystals with Emission Tunable to Near-Infrared', journal: 'J. Am. Chem. Soc. 132, 5592-5593 (2010).' },
  { number: '82', authors: 'K. Lund, A. J. Manzo, N. Dabby, N. Michelotti, A. Johnson-Buck, J. Nangreave, S. Taylor, R. Pei, M. N. Stojanovic*, N. G. Walter*, E. Winfree*, H. Yan*', title: 'Molecular Robots Guided by Prescriptive Landscapes', journal: 'Nature 465, 206-210 (2010).' },
  { number: '81', authors: 'S. Pal, Z. Deng, B. Ding, H. Yan*, Y. Liu*', title: 'DNA Origami Directed Self-assembly of Discrete Silver Nanoparticle Architectures', journal: 'Angew. Chem. Int. Ed. 49, 2700-2704 (2010).' },
  { number: '80', authors: 'B. Ding*, Z. Deng, H. Yan, S. Cabrini, R. Zuckermann, J. Bokor*', title: 'Gold Nanoparticles Self-similar Chain Structure Organized by DNA Origami', journal: 'J. Am. Chem. Soc. 132, 3248-3249 (2010).' },
  { number: '79', authors: 'R. Chhabra, J. Sharma, Y. Liu, S. Rinker, H. Yan*', title: 'DNA Self-assembly for Nanomedicine', journal: 'Advanced Drug Delivery Reviews 62, 617-625 (2010).' },
  { number: '78', authors: 'Z. Zhao, H. Yan*, Y. Liu*', title: 'A Route to Scale up DNA Origami using DNA Tiles as Folding Staples', journal: 'Angew. Chem. Int. Ed. 49, 1414-1417 (2010).' },
  { number: '77', authors: 'Q. Wang*, H. Wang, C. Lin, J. Sharma, S. Zou*, Y. Liu*', title: 'Photonic Interactions between Quantum Dots and Gold Nanoparticles in Discrete Nanostructures through DNA Directed Self-Assembly', journal: 'Chem. Commun. 46, 240-242 (2010).' }
];
const publications2009 = [
  { number: '76', authors: 'Z. Deng*, H. Yan, Y. Liu*', title: 'Band Gap Engineering of Quaternary Alloyed ZnCdSSe Quantum Dots via a Facile Phosphine-Free Colloidal Method', journal: 'J. Am. Chem. Soc. 131, 17744-17745 (2009).' },
  { number: '75', authors: 'R. Chhabra, J. Sharma, H. Wang, S. Zou, S. Lin, H. Yan, S. Lindsay*, Y. Liu*', title: 'Distance-dependent interactions between gold nanoparticles and fluorescent molecules with DNA as tunable spacers', journal: 'Nanotechnology 20, 485201 (2009).' },
  { number: '74', authors: 'Y. Ke, S. M. Douglas, M. Liu, J. Sharma, A. Cheng, A. Leung, Y. Liu, W. M. Shih*, H. Yan*', title: 'Multilayer DNA Origami Packed on a Square Lattice', journal: 'J. Am. Chem. Soc. 131, 15903-15908 (2009).' },
  { number: '73', authors: 'L. A. Stearns, R. Chhabra, J. Sharma, Y. Liu, W. T. Petuskey, H. Yan*, J. C. Chaput*', title: 'Template-Directed Nucleation and Growth of Inorganic Nanoparticles on DNA Scaffolds', journal: 'Angew. Chem. Int. Ed. 45, 8494-8496 (2009).' },
  { number: '72', authors: 'S. Pal, H. Yan, Y. Liu*', title: 'Stable Silver Nanoparticle-DNA Conjugates for Directed Self-assembly of Core-Satellite Silver-Gold Nanoclusters', journal: 'Chem. Commun. 6059-6061 (2009).' },
  { number: '71', authors: 'Z. Li, B. Wei, J. Nangreave, C. Lin, Y. Liu, Y. Mi*, H. Yan*', title: 'A Replicable Tetrahedral Nanostructure Self-Assembled from a Single DNA Strand', journal: 'J. Am. Chem. Soc. 131, 13093-13098 (2009).' },
  { number: '70', authors: 'Y. Liu, H. Yan*', title: 'Designer Curvature', journal: 'Science 325, 685-686 (2009).' },
  { number: '69', authors: 'Y. Liu, H. Yan*', title: 'Coordinating Corners', journal: 'Nature Chemistry 1, 339-340 (2009).' },
  { number: '68', authors: 'C. S. Andersen, M. M. Knudsen, R. Chhabra, Y. Liu, H. Yan*, K. V. Gothelf*', title: 'Distance Dependent Interhelical Couplings of Organic Rods Incorporated in DNA 4-Helix Bundles', journal: 'Bioconjugate Chem. 20, 1538-1546 (2009).' },
  { number: '67', authors: 'J. Nangreave, H. Yan*, Y. Liu*', title: 'Studies of Thermal Stability of Multivalent DNA Hybridization in a Nanostructured System', journal: 'Biophys. J. 97, 563-571 (2009).' },
  { number: '66', authors: 'A. E. Gerdon, S.-S. Oh, W. Hsieh, Y. Ke, H. Yan*, H. T. Soh*', title: 'Controlled Delivery of DNA Origami on Patterned Surface', journal: 'Small 5, 1942-1946 (2009).' },
  { number: '65', authors: 'Y. Ke, J. Sharma, M. Liu, K. Jahn, Y. Liu*, H. Yan*', title: 'Scaffolded DNA Origami of a DNA Tetrahedron Molecular Container', journal: 'Nano. Lett. 9, 2445-2447 (2009).' },
  { number: '64', authors: 'C. Lin, H. Yan*', title: 'DNA Nanotechnology: A Cascade of Activity', journal: 'Nature Nanotechnol. 4, 211-212 (2009). Invited News & Views article.' },
  { number: '63', authors: 'C. Lin, Y. Liu, H. Yan*', title: 'Designer DNA Nanoarchitectures', journal: 'Biochemistry 48, 1663-1674 (2009).' },
  { number: '62', authors: 'J. Sharma, R. Chhabra, A. Cheng, J. Brownell, Y. Liu*, H. Yan*', title: 'Control of Self-Assembly of DNA Tubules Through Integration of Gold Nanoparticles', journal: 'Science 323, 112-116 (2009).' },
  { number: '61', authors: 'C. Lin, Y. Ke, Z. Liu, J. Wang, Y. Liu*, H. Yan*', title: 'Designer Nanoarchitectures Self-assembled from Mirror Image DNA', journal: 'Nano Lett. 9, 433-436 (2009).' }
];
const publications2008 = [
  { number: '60', authors: 'C. Lin, S. Rinker, X. Wang, Y. Liu, N. C. Seeman*, H. Yan*', title: 'In-vivo Cloning of DNA Nanostructures', journal: 'Proc. Natl. Acad. Sci. U.S.A. 105, 17626-17635 (2008).' },
  { number: '59', authors: 'Z. Li, Y. Ke, C. Lin, H. Yan*, Y. Liu*', title: 'Subtractive Assembly of DNA Nanoarchitectures Driven by Fuel Strand Displacement', journal: 'Chem. Commun. 4318-4320 (2008).' },
  { number: '58', authors: 'C. Lin, J. Nangreave, Z. Li, H. Yan*, Y. Liu*', title: 'Signal Amplification on a DNA Tile based Biosensor with Enhanced Sensitivity', journal: 'Nanomedicine 3, 521-528 (2008).' },
  { number: '57', authors: 'Y. Xu, Q. Wang, P. He, Q. Dong, F. Liu, Y. Liu, L. Lin, H. Yan*, X. Zhao*', title: 'Cell Nucleus Penetration by Quantum Dots Induced by Nuclear Staining Organic Fluorophore and UV-Irradiation', journal: 'Advanced Materials 20, 3468-3473 (2008).' },
  { number: '56', authors: 'J. Sharma, R. Chhabra, C. S. Anderson, K. V. Gothelf, H. Yan*, Y. Liu*', title: 'Toward Reliable Gold Nanoparticle Patterning on Self-assembled DNA Nanoscaffold', journal: 'J. Am. Chem. Soc. 130, 7820-2821 (2008).' },
  { number: '55', authors: 'C. S. Anderson, H. Yan, K. V. Gothelf*', title: 'Bridging One Helical Turn in dsDNA by Templated Dimerization of Molecular Rods', journal: 'Angew. Chem. Int. Ed. 47, 5569-5572 (2008).' },
  { number: '54', authors: 'J. Sharma, Y. Ke, C. Lin, R. Chhabra, Q. Wang, J. Nangreave, Y. Liu*, H. Yan*', title: 'DNA Tile Directed Self-assembly of Quantum Dots into Two-dimensional Nanopatterns', journal: 'Angew. Chem. Int. Ed. 47, 5157-5159 (2008).' },
  { number: '53', authors: 'S. Rinker, Y. Ke, Y. Liu*, H. Yan*', title: 'Self-assembled DNA Nanostructures for distance dependent multivalent ligand-protein binding', journal: 'Nature Nanotechnol. 3, 418-422 (2008).' },
  { number: '52', authors: 'Y. Ke, S. Lindsay, Y. Chang, Y. Liu, H. Yan*', title: 'Self-assembled Water-soluble Nucleic Acid Probe Tiles for Label Free RNA Detection', journal: 'Science 319, 180-183 (2008).' },
  { number: '51', authors: 'J. Sharma, R. Chhabra, H. Yan, Y. Liu*', title: 'A Facile In situ Generation of Dithiocarbamate Ligands for Stable Gold Nanoparticle-Oligonucleotide Conjugates', journal: 'Chem. Commun. 18, 2140-2142 (2008).' },
  { number: '50', authors: 'Q. Wang, Y. Liu, Y. Ke, H. Yan*', title: 'Quantum Dots Bioconjugation During Core-Shell Synthesis', journal: 'Angew. Chem. Int. Ed. 47, 316-319 (2008).' }
];
const publications2007 = [
  { number: '49', authors: 'C. Lin, X. Wang, Y. Liu, N. C. Seeman, H. Yan*', title: 'Rolling Circle Enzymatic Replication of a Complex Multi-crossover DNA Nanostructure', journal: 'J. Am. Chem. Soc. 129, 14475-14481 (2007).' },
  { number: '48', authors: 'R. Chhabra, J. Sharma, Y. Ke, Y. Liu, S. Rinker, S. Lindsay, H. Yan*', title: 'Spatially Addressable Multi-protein Nanoarrays Templated by Aptamer Tagged DNA Nanoarchitectures', journal: 'J. Am. Chem. Soc. 129, 10304-10305 (2007).' },
  { number: '47', authors: 'Q. Wang, Y. Liu, C. Lin, H. Yan*', title: 'Lay-by-layer Growth of Superparamagnetic and fluorecently barcoded Nanospheres', journal: 'Nanotechnology 18, 40, 405026 (2007).' },
  { number: '46', authors: 'C. Lin, Y. Ke, Y. Liu, M. Mertig, J. Gu, H. Yan*', title: 'Functional DNA Nanotube Arrays: Bottom-up Meets Top-down', journal: 'Angew. Chem. Int. Ed. 46, 6089-6092 (2007).' },
  { number: '45', authors: 'Q. Wang, Y. Liu, H. Yan*', title: 'Mechanism of a Self-templating Synthesis of Monodispersed Hollow Silica Nanospheres with Tunable Size and Shell Thickness', journal: 'Chem. Commun. 2339-2341 (2007).' },
  { number: '44', authors: 'Q. Wang, Y. Xu, X. Zhao, Y. Chang, Y. Liu, L. Jiang, J. Sharma, D.-K. Seo*, H. Yan*', title: 'A Facile One-step In situ Functionalization of Quantum Dots with Preserved Photoluminescence for Bioconjugation', journal: 'J. Am. Chem. Soc.129, 6380-6381 (2007).' },
  { number: '43', authors: 'B. Williams, K. Lund, Y. Liu, H. Yan*, J. Chaput*', title: 'Self-assembled Peptide Nanoarrays: An Approach to Studying Protein-protein Interactions', journal: 'Angew. Chem. Int. Ed. 46, 3051-3054 (2007).' },
  { number: '42', authors: 'C. Lin, Y. Liu, H. Yan*', title: 'Self-assembled Combinatorial Encoding Nanoarrays for Multiplexed Biosensing', journal: 'Nano Lett. 7, 507-512 (2007).' },
  { number: '41', authors: 'J. Sharma, R. Chhabra, H. Yan, Y. Liu*', title: 'pH-driven Conformational Switch of i-motif DNA for Reversible Assembly of Gold Nanoparticles', journal: 'Chem. Commun. 477-479 (2007).' }
];
  const publications2006 = [
    { number: '40', authors: 'C. Lin, M. Xie, J. Chen, Y. Liu, H. Yan*', title: 'Rolling Circle Amplification of a DNA Nano-junction', journal: 'Angew. Chem. Int. Ed. 45, 7537-7539 (2006).' },
    { number: '39', authors: 'C. Lin, E. Katilius*, Y. Liu, J. Zhang, H. Yan*', title: 'Self-assembled Signaling Aptamer Nanoarrays for Protein Detection', journal: 'Angew. Chem. Int. Ed. 45, 5296-5301 (2006).' },
    { number: '38', authors: 'C. Lin, Y. Liu, S. Rinker, H. Yan*', title: 'DNA Tile Based Self-assembly: Building Complex Nano-architectures', journal: 'ChemPhysChem 7, 1641-1647 (2006).' },
    { number: '37', authors: 'K. Lund, Y. Liu, H. Yan*', title: 'Combinatorial Self-Assembly of DNA Nanostructures', journal: 'Organic and Biomolecular Chemistry 4, 3402-3403 (2006).' },
    { number: '36', authors: 'S. Rinker, Y. Liu, H. Yan*', title: 'Two Dimensional LNA/DNA arrays: Estimating the Helicity of LNA/DNA Hybrid Duplex', journal: 'Chem. Commun. 2675-2677 (2006).' },
    { number: '35', authors: 'R. Chhabra, J. Sharma, Y. Liu, H. Yan*', title: 'Addressable Molecular Tweezers for DNA Templated Coupling Reactions', journal: 'Nano Lett. 6, 978-983 (2006).' },
    { number: '34', authors: 'L. Lin, H. Wang, Y. Liu, H. Yan, S. Lindsay*', title: 'Recognition Imaging with a DNA Aptamer', journal: 'Biophysical J. 90, 4236-4238 (2006).' },
    { number: '33', authors: 'K. Lund, B. Williams, Y. Ke, Y. Liu, H. Yan*', title: 'DNA Nanotechnology: a rapidly evolving field', journal: 'Current Nanoscience 2, 113-122 (2006).' },
    { number: '32', authors: 'Y. Ke, Y. Liu, J. Zhang, H. Yan*', title: 'A Study of DNA Tube Formation Mechanisms Using 4-, 8- and 12-Helix DNA Nanostructures', journal: 'J. Am. Chem. Soc. 128, 4414-4421 (2006).' },
    { number: '31', authors: 'J. Zhang, Y, Liu, Y. Ke, H. Yan*', title: 'Periodic Square-like Gold Nanoparticle Arrays Templated by a DNA Nanogrids on a Surface', journal: 'Nano Lett. 6, 248-251 (2006).' },
    { number: '30', authors: 'H. Yan*, B. Xu', title: 'Towards Rapid DNA Sequencing: Detecting Single-Stranded DNA with a Solid-State Nanopore', journal: 'Small 2, 310-312 (2006).' },
    { number: '29', authors: 'J. Sharma, R. Chhabra, Y. Liu, Y. Ke, H. Yan*', title: 'DNA Templated Self-assembly of Two-Dimensional and Periodical Gold Nanoparticle Arrays', journal: 'Angew. Chem. Int. Ed. 45, 730-735 (2006).' }
  ];
    const publications2005 = [
      { number: '28', authors: 'K. Lund, Y. Liu, S. Lindsay, H. Yan*', title: 'Self-assembling Molecular Pegboard', journal: 'J. Am. Chem. Soc. 127, 17606-17607 (2005).' },
      { number: '27', authors: 'Y. Liu, Y. Ke, H. Yan*', title: 'Self-assembly of Symmetric Finite Size DNA Nanoarrays', journal: 'J. Am. Chem. Soc. 127, 17140-17141 (2005).' },
      { number: '26', authors: 'Y. Liu, C. Lin, H. Li, H. Yan*', title: 'Aptamer Directed Self-assembly of Proteins on a DNA Nanostructure', journal: 'Angew. Chem. Int. Ed. 44, 4333 (2005).' },
      { number: '25', authors: 'S. H. Park, P. Yin, Y. Liu, J. Reif, T. H. LaBean, H. Yan*', title: 'Programmable DNA Self-assemblies for Nanoscale Organization of Ligands and Proteins', journal: 'Nano Lett. 5, 729 (2005).' },
      { number: '24', authors: 'S. H. Park, R. Barish, H. Li, J. H. Reif, G. Finkelstein, H. Yan*, T. H. LaBean*', title: 'Three Helix Bundle DNA Tiles Self-assemble into 2D Lattice or 1D Templates for Silver Nanowires', journal: 'Nano Lett. 5, 693 (2005).' },
      { number: '23', authors: 'Y. Liu, H. Yan*', title: 'Modular Self-assembly of DNA Lattice with Tunable Periodicity', journal: 'Small 1, 327-330 (2005).' },
      { number: '22', authors: 'J. H. Reif*, T. H. LaBean, S. Sahu, H. Yan, P. Yin', title: 'Design, Simulation, and Experimental Demonstration of Self-assembled DNA Nanostructures and Motors', journal: 'UPP2004, LNCS 3566, Springer-Verlag Berlin Heidelberg, pp. 173-187 (2005).' },
      { number: '21', authors: 'N. C. Seeman*, B. Ding, S. Liao, T. Wang, W. B. Sherman, P. E. Constantinou, J. Kopatsch, C. Mao, R. Sha, F. Liu, H. Yan, P. S. Lukeman', title: 'Experiments in Structural DNA Nanotechnology: Arrays and Devices', journal: 'Proc. SPIE; Nanofabrication: Technologies, Devices and Applications 5592, 71-81 (2005).' },
      { number: '20', authors: 'Sha, R., Zhang, X., Liao, S., Constantinou, P. E., Ding, B., Wang, T., Garibotti, A. V., Zhong, H., Israel, L. B., Wang, X., Wu, G., Chakraborty, B., Chen, J., Zhang, Y., Mao, C., Yan, H., Kopatsch, J., Zheng, J., Lukeman, P. S., Sherman, W. B., Seeman, N. C.*', title: 'Motifs and Methods in Structural DNA Nanotechnology', journal: 'Proc. Intl. Conf. Nanomaterials, NANO 2005, V. Rajendran, pp. 3-10 (2005).' }
    ];
      const publications2004 = [
        { number: '19', authors: 'H. Yan*', title: 'Nucleic Acid Technology', journal: 'Science, 306, 2048-2049 (2004).' },
        { number: '18', authors: 'S. H. Park, H. Yan, J.H. Reif, T. H. LaBean, G. Finkelstein*', title: 'Electronic Nanostructures Templated on Self-assembled DNA Scaffolds', journal: 'Nanotechnology 15, S525-S527 (2004).' },
        { number: '17', authors: 'H. Yan*, P. Yin, S. H. Park, H. Li, L. Feng, X. Guan, D. Liu, J. H. Reif, T. H. LaBean', title: 'Self-Assembled DNA Structures for Nanoconstruction', journal: 'AIP Proceedings 725 (DNA-Based Molecular Electronics), 43-52 (2004).' },
        { number: '16', authors: 'P. Yin, H. Yan*, X.J. Guan, A.J. Turberfield*, J. H. Reif*', title: 'An Autonomous Unidirectional DNA Walker', journal: 'Angew. Chem. Int. Ed. 43, 4906-4911 (2004).' },
        { number: '15', authors: 'H. Li, S. H. Park, J. H. Reif, T. H. LaBean, H. Yan*', title: 'DNA Templated Self-Assembly Of Protein And Nanoparticle Linear Arrays', journal: 'J. Am. Chem. Soc. 126, 418 (2004).' },
        { number: '14', authors: 'Z. Shen, H. Yan, T. Wang, N. C. Seeman*', title: 'Paranemic Crossover DNA: A Generalized Holliday Structure with Applications in Nanotechnology', journal: 'J. Am. Chem. Soc. 126, 1666 (2004).' }
      ];
        const publications2003 = [
          { number: '13', authors: 'H. Yan*, L. Feng, T. H. LaBean, J. H. Reif*', title: 'Parallel Molecular Computation of Pair-wise Exclusive-Or (XOR) Using DNA String Tile Self-Assembly', journal: 'J. Am. Chem. Soc. 125, 14246 (2003).' },
          { number: '12', authors: 'H. Yan*, S. H. Park, G. Finkelstein, J. H. Reif, T. H. LaBean*', title: 'DNA Templated Self-assembly of Protein Arrays and Highly Conductive Nanowires', journal: 'Science, 301, 1882 (2003).' },
          { number: '11', authors: 'L. Feng, S. H. Park, J. H. Reif, H. Yan*', title: 'A Two-State DNA Lattice Switched By DNA Nanoactuator', journal: 'Angew. Chem. Int. Ed. 42, 4342 (2003).' },
          { number: '10', authors: 'H. Yan, T. H. LaBean, L. Feng, J. H. Reif*', title: 'Directed Nucleation Assembly of DNA Tile Complexes for Barcode Patterned Lattices', journal: 'Proc. Natl. Acad. Sci. U.S.A. 100, 8103 (2003).' },
          { number: '9', authors: 'H. Yan, N. C. Seeman*', title: 'Edge-Sharing DNA Triangles And One-Dimensional Self-Assembly', journal: 'J. Supramol. Chem., 1, 229-237 (2003).' }
        ];
          const publications2002Before = [
            { number: '8', authors: 'X. Zhang, H. Yan, Z. Shen, N. C. Seeman*', title: 'Paranemic Cohesion of Topologically-Closed DNA Molecules', journal: 'J. Am. Chem. Soc. 124, 12940-12941 (2002).' },
            { number: '7', authors: 'H. Yan, X. Yang, Z. Shen, N. C. Seeman*', title: 'A Robust Sequence-dependent Rotary DNA Device', journal: 'Nature, 415, 62-65 (2002).' },
            { number: '6', authors: 'T. H. LaBean, H. Yan, J. Kopatsch, F. Liu, E. Winfree, J. H. Reif, N. C. Seeman*', title: 'The Construction, Analysis, Ligation and Self-assembly of DNA Triple Crossover Molecules', journal: 'J. Am. Chem. Soc. 122, 1848-1860 (2000).' },
            { number: '5', authors: 'N. C. Seeman, H. Wang, X. Yang, F. Liu, C. Mao, W. Sun, L. Wenzler, Z. Shen, R. Sha, H. Yan, M.H. Wong, P. Sa-Ardyen, B. Liu, H. Qiu, X. Li, J. Qi, S.M. Du, Y. Zhang, J.E. Mueller, T.-J. Fu, Y. Wang, J. Chen', title: 'New Motifs in DNA Nanotechnology', journal: 'Nanotechnology 9, 257-273 (1998).' },
            { number: '4', authors: 'Y. Ma, Q. Wang*, H. Yan, X. Ji, Q. Qiu', title: 'Zeolite-Catalyzed Esterification. 1. Synthesis Of Acetates, Benzoates And Phthalates', journal: 'Appl. Catal. 139, 51-57 (1996).' },
            { number: '3', authors: 'Q. Wang*, Y. Ma, X. Ji, H. Yan, Q. Qiu', title: 'Zeolite-Catalyzed Friedel-Crafts Acylation Of Aromatics. 1. Synthesis Of 4-Acyl Anisole With A HY Catalyst', journal: 'Chin. Chem. Lett. 7, 99-102 (1996).' },
            { number: '2', authors: 'Q. Wang*, Y. Ma, X. Ji, H. Yan, Q. Qiu', title: 'Regioselective Acylation Of Anisole With Carboxylic-Acid Over HZSM-5 Catalyst', journal: 'J. Chem. Soc. Chem. Comm. 22, 2307-2308 (1995).' }
          ];
const publications2014 = [
  {
    number: '148',
    authors: 'K. Pan, D. N. Kim, F. Zhang, M. Adendorff, H. Yan*, M. Bathe*',
    title: 'Lattice-free prediction of three-dimensional structure of programmed DNA assemblies.',
    journal: 'Nature Commun. 5, 5078, (2014).'
  },
  {
    number: '147',
    authors: 'P. Dutta, S. Levenberg, A. Loskutov, D. Jun, R. Saer, J. Beatty, S. Lin, Y. Liu*, N. Woodbury*, H. Yan*',
    title: 'A DNA-Directed Light-Harvesting/Reaction Center System',
    journal: 'J. Am. Chem. Soc. 136, 16618-16625 (2014).'
  },
  {
    number: '146',
    authors: 'A. Samanta, Y. Zhou, S. Zou, H. Yan, Y. Liu*',
    title: 'Fluorescence Quenching of Quantum Dots by Gold Nanoparticles: a Potential Long Range Spectroscopic Ruler',
    journal: 'Nano Letters 14, 5052-5057, (2014).'
  },
  {
    number: '145',
    authors: 'F. Zhang, J. Nangreave, Y. Liu, H. Yan*',
    title: 'Structural DNA Nanotechnology: State of the Art and Future Perspective',
    journal: 'J. Am. Chem. Soc. 136, 11198-11211, (2014).'
  },
  {
    number: '144',
    authors: 'D. Wang, S. Capehart, S. Pal, M. Liu, L. Zhang, J. Schuck, Y. Liu, H. Yan, M. Francis, J. De Yoreo*',
    title: 'Hierarchical Assembly of Plasmonic Nanostructures using Virus Capsid Scaffolds on DNA Origami Templates',
    journal: 'ACS Nano 8, 7896-7904, (2014).'
  },
  {
    number: '143',
    authors: 'X. Wei, J. Nangreave, Y. Liu*',
    title: 'Uncovering the Self-Assembly of DNA Nanostructures by Thermodynamics and Kinetics',
    journal: 'Accounts Chem. Res. 47, 1861-1870, (2014).'
  },
  {
    number: '142',
    authors: 'J. Flory, C. Simmons, S. Lin, T. Jonhson, A. Andreoni, J. Zook, G. Chirlanda, Y. Liu, H. Yan, and P. Fromme*',
    title: 'Low Temperature Assembly of Functional 3D DNA-PNA-Protein Complexes',
    journal: 'J. Am. Chem. Soc. 136, 8283-8295, (2014).'
  },
  {
    number: '141',
    authors: 'A. Johnson-Buck, S. Jiang, H. Yan, and N. G. Walter*',
    title: 'DNA-Cholesterol Barges as Programmable Membrane-Exploring Agents',
    journal: 'ACS Nano 8, 5641-5649, (2014).'
  },
  {
    number: '140',
    authors: 'L. Liang, J. Li, Q. Li, Q. Huang, J. Shi, H. Yan, and C. Fan*',
    title: 'Single-particle Tracking and Modulation of Cell Entry Pathways of a Tetrahedral DNA Nanostructure in Live Cells',
    journal: 'Angew Chem Int Ed. 126, 7879-7884, (2014).'
  },
  {
    number: '139',
    authors: 'J. Fu*, Y. R. Yang, A. Johnson-Buck, Y. Liu, N. G. Walter, N. W. Woodbury, and H. Yan*',
    title: 'Multi-enzyme Complexes on DNA Scaffolds Capable of Substrate Channeling with an Artificial Swinging Arm',
    journal: 'Nature Nanotechnol. 9, 531-536, (2014).'
  },
  {
    number: '138',
    authors: 'S. Jiang, H. Yan, and Y. Liu*',
    title: 'Kinetics of DNA Tile Dimerization',
    journal: 'ACS Nano. 8, 5826-5832, (2014).'
  },
  {
    number: '137',
    authors: 'P. K. Dutta, S. Lin, A. Loskutov, S. Levenberg, R. Saer, J. T. Beatty, Y. Liu, H. Yan,* N. Woodbury*',
    title: 'An Engineered System to Enhance and Control the Absorption Cross-section of Photosynthetic Reaction Center',
    journal: 'J. Am. Chem. Soc. 136, 4599-4604, (2014).'
  },
  {
    number: '136',
    authors: 'W. Li, Y. Yang, S. Jiang, H. Yan, Y. Liu*',
    title: 'Controlled Nucleation and Growth of DNA Tile Arrays within Prescribed DNA Origami Frames and Their Dynamics',
    journal: 'J. Am. Chem. Soc. 136, 3724-3727, (2014).'
  },
  {
    number: '135',
    authors: 'A. Samanta, Z. Deng, Y. Liu*',
    title: 'Infrared Emitting Quantum Dots: DNA Conjugation and DNA Origami Directed Self-Assembly',
    journal: 'Nano Scale 6, 4486-4490, (2014).'
  }
];

const Publications = () => (
  <div className="publications-page">
    <div className="publications-container" style={{
      maxWidth: '900px',
      margin: '96px auto 48px auto',
      background: 'rgba(255,255,255,0.65)',
      borderRadius: '0',
      boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
      padding: '0 32px 48px 32px',
      backdropFilter: 'blur(6px)'
    }}>
      <div className="publications-hero" style={{ padding: '48px 0 0 0', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', width: '100%' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#232946', marginBottom: '0.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif' }}>Publications</h1>
          <select
            style={{ fontSize: '1.2rem', padding: '0.3rem 1.2rem', borderRadius: '6px', border: '1px solid #232946', marginLeft: '0.5rem', background: '#fff', color: '#232946', fontWeight: 500, cursor: 'pointer' }}
            onChange={e => {
              const year = e.target.value;
              const el = document.getElementById(`publications-${year}`);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            defaultValue=""
          >
            <option value="" disabled>Select Year</option>
            {Array.from({ length: 2025 - 2003 + 1 }, (_, i) => 2025 - i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
            <option value="2002Before">2002 and Before</option>
          </select>
        </div>
        {/* Carousel of covers */}
        <div style={{ width: '100%', overflow: 'hidden', margin: '0 auto', marginTop: '1.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <div id="covers-carousel" style={{ display: 'flex', gap: '1.2rem', animation: 'carousel-move 36s linear infinite' }}>
            {[...Array(2)].flatMap(() => [1,2,3,4,5,6,7,8,9,10,11]).map(num => (
              <img
                key={num + Math.random()}
                src={`/cover-${num}.jpg`}
                alt={`Cover ${num}`}
                style={{ height: '3in', width: 'auto', borderRadius: '0px', boxShadow: '0 2px 12px rgba(0,0,0,0.12)' }}
              />
            ))}
          </div>
        </div>
        <style>{`
          @keyframes carousel-move {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          #covers-carousel {
            width: max-content;
          }
        `}</style>
      </div>
      <div className="publications-list" style={{ marginTop: '32px' }}>
        <h2 id="publications-2025" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2025</h2>
        {publications2025.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                // Remove DOI and its associated number from the journal string
                let journalText = item.journal.replace(/"/g, '');
                journalText = journalText.replace(/DOI:\s*10\.[^ )]+(\s*)?/gi, '');
                // Remove the specific DOI: 10.1002/cbic.201700613 if present
                journalText = journalText.replace(/DOI:\s*10\.1002\/cbic\.201700613(\s*)?/gi, '');
                // Also remove any trailing 'DOI:' if left alone
                journalText = journalText.replace(/DOI:\s*/gi, '');
                // Only bold the journal name, not the number after it
                const journalNameMatch = journalText.match(/^([A-Za-z .]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2024" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2024</h2>
        {publications2024.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2023" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2023</h2>
        {publications2023.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2022" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2022</h2>
        {publications2022.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2021" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2021</h2>
        {publications2021.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2020" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2020</h2>
        {publications2020.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2019" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2019</h2>
        {publications2019.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2018" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2018</h2>
        {publications2018.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2017" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2017</h2>
        {publications2017.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2016" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2016</h2>
        {publications2016.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2015" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2015</h2>
        {publications2015.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2014" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2014</h2>
        {publications2014.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}

  <h2 id="publications-2013" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2013</h2>
        {publications2013.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2012" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2012</h2>
        {publications2012.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2011" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2011</h2>
        {publications2011.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2010" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2010</h2>
        {publications2010.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2009" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2009</h2>
        {publications2009.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2008" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2008</h2>
        {publications2008.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 id="publications-2007" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2007</h2>
        {publications2007.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
    <h2 id="publications-2006" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2006</h2>
          {publications2006.map((item) => (
            <div key={item.number} style={{ marginBottom: '18px' }}>
              <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
                <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
              </div>
              <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
                {item.title}
              </div>
              <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
                {(() => {
                  const journalText = item.journal.replace(/"/g, '');
                  const journalNameMatch = journalText.match(/^([^,.]+)/);
                  const journalName = journalNameMatch ? journalNameMatch[1] : '';
                  const restText = journalName ? journalText.slice(journalName.length) : journalText;
                  const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                  const doiMatch = restText.match(doiRegex);
                  if (doiMatch) {
                    const prefix = doiMatch[1] ? doiMatch[1] : '';
                    const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                    const url = `https://doi.org/${doi}`;
                    const start = doiMatch.index || 0;
                    const end = start + doiMatch[0].length;
                    return (
                      <span>
                        <span style={{ fontWeight: 700 }}>{journalName}</span>
                        {restText.slice(0, start)}
                        {prefix}
                        <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                        {restText.slice(end)}
                      </span>
                    );
                  }
                  return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
                })()}
              </div>
            </div>
          ))}
      <h2 id="publications-2005" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2005</h2>
            {publications2005.map((item) => (
              <div key={item.number} style={{ marginBottom: '18px' }}>
                <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
                </div>
                <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
                  {item.title}
                </div>
                <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
                  {(() => {
                    const journalText = item.journal.replace(/"/g, '');
                    const journalNameMatch = journalText.match(/^([^,.]+)/);
                    const journalName = journalNameMatch ? journalNameMatch[1] : '';
                    const restText = journalName ? journalText.slice(journalName.length) : journalText;
                    const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                    const doiMatch = restText.match(doiRegex);
                    if (doiMatch) {
                      const prefix = doiMatch[1] ? doiMatch[1] : '';
                      const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                      const url = `https://doi.org/${doi}`;
                      const start = doiMatch.index || 0;
                      const end = start + doiMatch[0].length;
                      return (
                        <span>
                          <span style={{ fontWeight: 700 }}>{journalName}</span>
                          {restText.slice(0, start)}
                          {prefix}
                          <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                          {restText.slice(end)}
                        </span>
                      );
                    }
                    return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
                  })()}
                </div>
              </div>
            ))}
        <h2 id="publications-2004" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2004</h2>
              {publications2004.map((item) => (
                <div key={item.number} style={{ marginBottom: '18px' }}>
                  <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
                    <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
                  </div>
                  <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
                    {item.title}
                  </div>
                  <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
                    {(() => {
                      const journalText = item.journal.replace(/"/g, '');
                      const journalNameMatch = journalText.match(/^([^,.]+)/);
                      const journalName = journalNameMatch ? journalNameMatch[1] : '';
                      const restText = journalName ? journalText.slice(journalName.length) : journalText;
                      const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                      const doiMatch = restText.match(doiRegex);
                      if (doiMatch) {
                        const prefix = doiMatch[1] ? doiMatch[1] : '';
                        const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                        const url = `https://doi.org/${doi}`;
                        const start = doiMatch.index || 0;
                        const end = start + doiMatch[0].length;
                        return (
                          <span>
                            <span style={{ fontWeight: 700 }}>{journalName}</span>
                            {restText.slice(0, start)}
                            {prefix}
                            <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                            {restText.slice(end)}
                          </span>
                        );
                      }
                      return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
                    })()}
                  </div>
                </div>
              ))}
          <h2 id="publications-2003" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2003</h2>
                {publications2003.map((item) => (
                  <div key={item.number} style={{ marginBottom: '18px' }}>
                    <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
                      <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
                    </div>
                    <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
                      {item.title}
                    </div>
                    <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
                      {(() => {
                        const journalText = item.journal.replace(/"/g, '');
                        const journalNameMatch = journalText.match(/^([^,.]+)/);
                        const journalName = journalNameMatch ? journalNameMatch[1] : '';
                        const restText = journalName ? journalText.slice(journalName.length) : journalText;
                        const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                        const doiMatch = restText.match(doiRegex);
                        if (doiMatch) {
                          const prefix = doiMatch[1] ? doiMatch[1] : '';
                          const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                          const url = `https://doi.org/${doi}`;
                          const start = doiMatch.index || 0;
                          const end = start + doiMatch[0].length;
                          return (
                            <span>
                              <span style={{ fontWeight: 700 }}>{journalName}</span>
                              {restText.slice(0, start)}
                              {prefix}
                              <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                              {restText.slice(end)}
                            </span>
                          );
                        }
                        return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
                      })()}
                    </div>
                  </div>
                ))}
            <h2 id="publications-2002Before" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2002 and Before</h2>
                  {publications2002Before.map((item) => (
                    <div key={item.number} style={{ marginBottom: '18px' }}>
                      <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
                        <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
                      </div>
                      <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
                        {item.title}
                      </div>
                      <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
                        {(() => {
                          const journalText = item.journal.replace(/"/g, '');
                          const journalNameMatch = journalText.match(/^([^,.]+)/);
                          const journalName = journalNameMatch ? journalNameMatch[1] : '';
                          const restText = journalName ? journalText.slice(journalName.length) : journalText;
                          const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                          const doiMatch = restText.match(doiRegex);
                          if (doiMatch) {
                            const prefix = doiMatch[1] ? doiMatch[1] : '';
                            const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                            const url = `https://doi.org/${doi}`;
                            const start = doiMatch.index || 0;
                            const end = start + doiMatch[0].length;
                            return (
                              <span>
                                <span style={{ fontWeight: 700 }}>{journalName}</span>
                                {restText.slice(0, start)}
                                {prefix}
                                <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                                {restText.slice(end)}
                              </span>
                            );
                          }
                          return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
                        })()}
                      </div>
                    </div>
                  ))}
      </div>
    </div>
  </div>
);

export default Publications;
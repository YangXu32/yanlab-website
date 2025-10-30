
import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaGraduationCap } from 'react-icons/fa';


const News = () => {
  const newsItems = [
    {
      date: "2025-10-31",
      type: "defense",

      title: "Dr. Deeksha Satyabola Successfully Defends Ph.D. Thesis",
      description: "Deeksha Satyabola successfully defended his Ph.D. thesis. Congratulations, Dr. Deeksha. She is moving to Johnson & Johnson as a Post doctoral fellow. Best wishes!",
      color: "#10b981"
    },
    {
      date: "2025-02-01",
      type: "award",

      title: "Prof. Hao Yan Bestowed as Regents Professor",
      description: "Prof. Hao Yan has been bestowed as the Regents Professor, highest faculty honor awarded at Arizona State University. Many Congratulations!",
      color: "#f59e0b"
    },
    {
      date: "2024-11-01",
      type: "defense",

      title: "Dr. Liangxiao Chen Successfully Defends Ph.D. Thesis",
      description: "Liangxiao Chen successfully defended his Ph.D. thesis. Congratulations, Dr. Chen! He is moving to Wyss Institute at Harvard as a Post doctoral fellow. Best wishes!",
      color: "#10b981"
    },
    {
      date: "2024-07-01",
      type: "award",

      title: "Prof. Hao Yan Elected Foreign Member of European Academy of Sciences",
      description: "Dr. Hao Yan has been Elected Foreign Member by the European Academy of Sciences, 2024. Many congratulations, Prof. Yan!",
      color: "#f59e0b"
    },
    {
      date: "2024-05-15",
      type: "defense",

      title: "Dr. Lu Yu Successfully Defends Ph.D. Thesis",
      description: "Lu Yu successfully defended her Ph.D. thesis. Congratulations, Dr. Yu! She is moving to UWash as a Post doctoral fellow. You will do great!",
      color: "#10b981"
    },
    {
      date: "2024-05-01",
      type: "award",

      title: "Outstanding Graduate Research Assistant Awards",
      description: "Lu Yu and Abhay Prasad are awarded the Outstanding Graduate Research Assistant in School of Molecular Sciences. Congratulations, Lu and Abhay! Keep shining!",
      color: "#ef4444"
    },
    {
      date: "2023-12-01",
      type: "award",

      title: "Humboldt Research Award",
      description: "Dr. Hao Yan was awarded the Humboldt Research Award by Alexander von Humboldt Foundation, 2023. Big news, Huge Congratulations! from the lab",
      color: "#f59e0b"
    },
    {
      date: "2023-10-01",
      type: "award",

      title: "World's Top 2% Scientists List",
      description: "Dr. Hao Yan was named to the World's Top 2% Scientists' list ranked by Stanford University for the 4th consecutive years. Great news, Congratulations Prof. Yan!",
      color: "#f59e0b"
    },
    {
      date: "2023-05-01",
      type: "defense",

      title: "Dr. Leeza Abraham Successfully Defends Ph.D. Thesis",
      description: "Leeza has successfully defended her Ph.D. thesis. Congratulations, Dr. Abraham! Leeza will use her expertise to work in Exodigm Biosciences, Inc. (Dr. Hao and Rizal's start-up). Good luck for your future work!",
      color: "#10b981"
    },
    {
      date: "2023-04-15",
      type: "defense",

      title: "Dr. Yue Tang Successfully Defends Ph.D. Thesis",
      description: "Yue has successfully defended his Ph.D. thesis. Congratulations, Dr. Tang! Yue is moving to Shandong University as a faculty starting in August, 2023. Best wishes.",
      color: "#10b981"
    },
    {
      date: "2023-04-10",
      type: "defense",

      title: "Dr. Hao Liu Successfully Defends Ph.D. Thesis",
      description: "Hao Liu has successfully defended his Ph.D. thesis. Congratulations, Dr. Liu! Hao will be a Post-Doc in Dr. Petr Sulc group at ASU. Wishing you all the best.",
      color: "#10b981"
    },
    {
      date: "2023-04-08",
      type: "award",

      title: "Best Poster Award at FNANO23",
      description: "Hao Liu was awarded the best poster awarded in the Foundations of Nanosciences (FNANO23) in Snowbird, Utah. Good job, Hao!",
      color: "#ef4444"
    },
    {
      date: "2023-04-05",
      type: "award",

      title: "Outstanding Teaching Assistant Award",
      description: "Leeza Abraham was awarded the Outstanding Teaching Assistant in School of Molecular Sciences. Congratulations, Leeza!",
      color: "#ef4444"
    },
    {
      date: "2023-04-03",
      type: "award",

      title: "Outstanding Graduate Research Assistant Award",
      description: "Hao Liu was awarded the Outstanding Graduate Research Assistant in School of Molecular Sciences. Congratulations, Hao!",
      color: "#ef4444"
    },
    {
      date: "2023-04-01",
      type: "award",

      title: "Le Roy Eyring Fellowship",
      description: "Deeksha was awarded the Le Roy Eyring Fellowship by the School of Molecular Sciences. Congratulations, Deeksha!",
      color: "#ef4444"
    },
    {
      date: "2023-03-01",
      type: "award",

      title: "College of Fellows of American Institute for Medical and Biological Engineering",
      description: "Dr. Hao Yan was elected to the College of Fellows of the American Institute for Medical and Biological Engineering. Many congratulations, Prof. Yan!",
      color: "#f59e0b"
    },
    {
      date: "2022-12-01",
      type: "award",

      title: "Fellow of National Academy of Inventors",
      description: "Prof. Yan was elected as Fellow of the National Academy of Inventors. Congratulations, Prof. Yan!",
      color: "#f59e0b"
    },
    {
      date: "2022-10-01",
      type: "award",

      title: "Web of Science 2022 Highly Cited Researcher",
      description: "Prof. Yan was recognized as Web of Science 2022 Highly Cited Researcher in Cross-Field. Congratulations, Prof. Yan!",
      color: "#f59e0b"
    },
    {
      date: "2022-07-01",
      type: "defense",

      title: "Dr. Erik Poppleton Successfully Defends Ph.D. Thesis",
      description: "Erik has successfully defended his Ph.D. thesis. Congratulations, Dr. Poppleton! Erik is moving to Max Planck Institute for Medical Research as a Postdoc Fellow.",
      color: "#10b981"
    },
    {
      date: "2022-01-15",
      type: "appointment",

      title: "Dr. Xiaodong Qi Joins Element Biosciences",
      description: "Xiaodong is moving to Element Biosciences as a Research Scientist. Congratulations, Dr. Qi and thank you for serving as a bio-master and all the efforts of managing the lab!",
      color: "#8b5cf6"
    },
    {
      date: "2022-01-01",
      type: "appointment",

      title: "Dr. Xu Zhou Joins University of Wisconsin",
      description: "Xu is moving to University of Wisconsin, Madison as a Postdoc Fellow. Good luck Xu and we wish you all the best in your future endeavors!",
      color: "#8b5cf6"
    },
    {
      date: "2021-09-01",
      type: "appointment",

      title: "Dr. Renee Yang Starts Tenure Track Position",
      description: "Congratulations to Renee, our former Ph.D. student who will start her tenure track position in The National Center for Nanoscience and Technology this Fall. Congratulations, Dr. Renee Yang!",
      color: "#8b5cf6"
    },
    {
      date: "2021-08-01",
      type: "appointment",

      title: "Dr. Guangbao Yao Starts Tenure Track Position",
      description: "Congratulations to Guangbao, our former Postdoc who will start his tenure track position in Shanghai Jiaotong University this Fall. Congratulations, Dr. Guangbao Yao!",
      color: "#8b5cf6"
    },
    {
      date: "2021-07-01",
      type: "appointment",

      title: "Dr. Shuoxing Jiang Starts Tenure Track Position",
      description: "Shuoxing will start his tenure track position in Nanjing University this Fall. Congratulations, Dr. Shuoxing Jiang and thank you for all the hard work you have put in and outstanding contribution to the Yan lab!",
      color: "#8b5cf6"
    },
    {
      date: "2021-04-15",
      type: "defense",

      title: "Dr. Swarup Dey Successfully Defends Ph.D. Thesis",
      description: "Swarup has successfully defended his Ph.D. theses. Congratulations, Dr. Dey! Swarup is moving to Harvard University as a Postdoc Fellow.",
      color: "#10b981"
    },
    {
      date: "2021-04-10",
      type: "defense",

      title: "Dr. Raghu Narayanan Successfully Defends Ph.D. Thesis",
      description: "Raghu has successfully defended his Ph.D. theses. Congratulations, Dr. Narayanan! is moving to UCSF as a Postdoc Fellow.",
      color: "#10b981"
    },
    {
      date: "2021-04-05",
      type: "defense",

      title: "Dr. Xu Zhou Successfully Defends Ph.D. Thesis",
      description: "Xu has successfully defended his Ph.D. theses. Congratulations, Dr. Zhou!",
      color: "#10b981"
    },
    {
      date: "2021-03-01",
      type: "award",

      title: "Outstanding Graduate Research Assistant Award",
      description: "Xu Zhou was awarded the Outstanding Graduate Research Assistant in School of Molecular Sciences. Congratulations, Xu!",
      color: "#ef4444"
    },
    {
      date: "2021-02-01",
      type: "appointment",

      title: "Associate Editor for Science Advances",
      description: "Prof. Hao Yan began to serve as Associate Editor for Science Advances.",
      color: "#3b82f6"
    },
    {
      date: "2021-01-01",
      type: "appointment",

      title: "Associate Editor for ACS Applied Biomaterials",
      description: "Prof. Hao Yan began to serve as Associate Editor for ACS Applied Biomaterials.",
      color: "#3b82f6"
    },
    {
      date: "2020-12-01",
      type: "award",

      title: "2020 Foresight Institute Feynman Prize",
      description: "Prof. Hao Yan received the 2020 Foresight Institute Feynman Prize for his significant contributions to the science of using nucleic acids as designer molecular building blocks for programmable molecular self-assembly. Congratulations, Prof. Yan!",
      color: "#f59e0b"
    },
    {
      date: "2020-07-01",
      type: "award",

      title: "School of Molecular Sciences Innovation Award",
      description: "Swarup Dey has been awarded the 2020 School of Molecular Sciences Innovation Award. Congratulations, Swarup!",
      color: "#ef4444"
    },
    {
      date: "2019-12-01",
      type: "award",

      title: "Multiple Prestigious Awards and Recognition",
      description: "Prof. Hao Yan is elected as the Fellow of American Association for the Advancement of Science (AAAS), Fast Company's 100 Most Creative People in Business 2019, and Web of Science 2018 & 2019 Highly Cited Researcher in Cross-Field. Congratulations, Prof. Yan!",
      color: "#f59e0b"
    },
    {
      date: "2019-05-15",
      type: "publication",

      title: "JACS Front Cover Publication",
      description: "Xu Zhou's paper on DNA templated excitonic energy transfer graced the front cover of JACS. Congratulations, Xu and all the co-authors.",
      color: "#3b82f6"
    },
    {
      date: "2019-05-01",
      type: "conference",

      title: "Biodesign Center Symposium Success",
      description: "Biodesign Center for Molecular Design and Biomimetics has a successful 2nd annual center symposium. Go CMDB!",
      color: "#10b981"
    },
    {
      date: "2019-04-15",
      type: "defense",

      title: "Dr. Fan Hong Successfully Defends Ph.D. Thesis",
      description: "Fan has successfully defended his Ph.D theses. Congratulations, Dr. Fan Hong is moving to Harvard University as a Postdoc Fellow.",
      color: "#10b981"
    },
    {
      date: "2019-04-10",
      type: "defense",

      title: "Dr. Yu Zhou Successfully Defends Ph.D. Thesis",
      description: "Yu has successfully defended his Ph.D theses. Congratulations, Dr. Yu Zhou is will become a Postdoc Fellow in Prof. Alexander Green's lab.",
      color: "#10b981"
    },
    {
      date: "2019-03-01",
      type: "appointment",

      title: "Dr. Fei Zhang Starts Tenure Track Position",
      description: "Fei will start her tenure track position in Rutgers University, Newark this Fall. Congratulations, Dr. Fei Zhang and thank you for what you have done in the Yan lab as a master of nucleic acid designer.",
      color: "#8b5cf6"
    },
    {
      date: "2018-08-01",
      type: "appointment",

      title: "Dr. Suchetan Pal Becomes Assistant Professor",
      description: "Congratulations to Dr. Suchetan Pal, our former Ph.D. student who becomes an assistant professor in IIT Bhilai and will start a new academic journey in India.",
      color: "#8b5cf6"
    },
    {
      date: "2018-04-15",
      type: "award",

      title: "Dirks Prize for Molecular Programming",
      description: "Given by the International Society for Nanoscale Science, Computation and Engineering, the Dirks Prize will recognize exceptional early-career achievement by a researcher working in any area of molecular programming, whether theory, experiment, computation, or a combination thereof. Congratulations to Fei who is the 2018 recipient and invited by ISNSCE to present a Prize Lecture at FNANO.",
      color: "#f59e0b"
    },
    {
      date: "2018-04-01",
      type: "defense",

      title: "Dr. Saswata Banerjee Successfully Defends Ph.D. Thesis",
      description: "Saswata has successfully defended his Ph.D theses. Congratulations, Dr. Banerjee! Saswata is moving to Columbia University as a Postdoc Fellow.",
      color: "#10b981"
    },
    {
      date: "2016-04-15",
      type: "defense",

      title: "Dr. Shuoxing Jiang Successfully Defends Ph.D. Thesis",
      description: "Shuoxing has successfully defended his Ph.D theses. Congratulations, Dr. Jiang!",
      color: "#10b981"
    },
    {
      date: "2016-04-01",
      type: "defense",

      title: "Dr. Renee Yang Successfully Defends Ph.D. Thesis",
      description: "Renee has successfully defended her Ph.D theses. Congratulations, Dr. Yang!",
      color: "#10b981"
    },
    {
      date: "2015-04-01",
      type: "defense",

      title: "Dr. Fei Zhang Successfully Defends Ph.D. Thesis",
      description: "Fei has successfully defended her Ph.D theses. Congratulations, Dr. Zhang!",
      color: "#10b981"
    },
    {
      date: "2014-11-01",
      type: "award",

      title: "ASU NanoDevils Win Gold Medal at BIOMOD",
      description: "Our ASU NanoDevils team won the Gold medal for their project and the Second place in the category of the Best Youtube Videos at this year's BIOMOD competition held at Harvard University. Congratulations ASU NanoDevils!",
      color: "#f59e0b"
    },
    {
      date: "2014-08-01",
      type: "appointment",

      title: "Dr. Zhengtao Deng Selected for 1000 Young Talent Program",
      description: "Congratulations to Dr. Zhengtao Deng, our former research assistant professor who was selected in the '1000 young talent search' program of China and started his independent lab in Nanjing University, starting in 09/2014.",
      color: "#8b5cf6"
    },
    {
      date: "2014-06-01",
      type: "defense",

      title: "Dr. Palash Dutta Successfully Defends Ph.D. Thesis",
      description: "Palash has successfully defended his Ph.D theses. Congratulations, Dr. Dutta! Palash is moving to Georgia Tech and Emory University as a Postdoc Fellow.",
      color: "#10b981"
    },
    {
      date: "2014-05-01",
      type: "publication",

      title: "DNA Nanotechnology Video",
      description: "Here is the link to the DNA Nanotechnology video they filmed here last month.",
      color: "#3b82f6"
    },
    {
      date: "2014-04-15",
      type: "defense",

      title: "Dr. Xixi Wei Successfully Defends Ph.D. Thesis",
      description: "Xixi has successfully defended her Ph.D theses. Congratulations, Dr. Wei! Xixi will start her career in Caris Life Sciences as a Research Scientist.",
      color: "#10b981"
    },
    {
      date: "2014-04-01",
      type: "defense",

      title: "Dr. Anirban Samanta and Dr. Wei Li Successfully Defend Ph.D. Theses",
      description: "Anirban and Wei have successfully defended their Ph.D theses. Congratulations, Dr. Samanta and Dr. Li! Anirban is moving to Naval Research Laboratory as a Postdoc Fellow. Wei is moving to Caltech as a Postdoc Fellow.",
      color: "#10b981"
    },
    {
      date: "2013-12-15",
      type: "appointment",

      title: "Dr. Yonggang Ke Starts Assistant Professor Position",
      description: "Our former graduate student Dr. Yonggang Ke will start his independent career as a tenure track Assistant Professor in the joint Wallace H. Coulter Department of Biomedical Engineering at Georgia Tech and Emory University. Congratulations, Yonggang.",
      color: "#8b5cf6"
    },
    {
      date: "2013-12-10",
      type: "appointment",

      title: "Dr. Bryan Wei Starts Professor Position",
      description: "Our former exchange graduate student Dr. Bryan Wei will start his independent career as a Professor in Tsinghua University. Congratulations, Bryan.",
      color: "#8b5cf6"
    },
    {
      date: "2013-12-05",
      type: "appointment",

      title: "Dr. Ryan Nangreave Joins ASU Lake Havasu",
      description: "Our postdoc Dr. Ryan Nangreave will start his position as a Teaching Professor at ASU Lake Havasu campus. Congratulations, Ryan.",
      color: "#8b5cf6"
    },
    {
      date: "2013-09-15",
      type: "appointment",

      title: "Prof. Hao Yan Appointed Director of Center for Molecular Design and Biomimicry",
      description: "ASU appoints Dr. Hao Yan as director of Center for Molecular Design and Biomimicry.",
      color: "#8b5cf6"
    },
    {
      date: "2013-09-10",
      type: "award",

      title: "Rozenberg Tulip Award",
      description: "Each year, the Rozenberg Tulip Award is given by the International Society for Nanoscale Science, Computation and Engineering for outstanding achievements in the field of Biomolecular Computing and Molecular Programming. Congratulations to Hao Yan and Yan Liu who are the 2013 recipients.",
      color: "#f59e0b"
    },
    {
      date: "2013-09-01",
      type: "award",

      title: "Best Poster Award at DNA19",
      description: "Congratulations to Wei for winning the best poster award at DNA19 conference.",
      color: "#ef4444"
    },
    {
      date: "2013-05-01",
      type: "appointment",

      title: "Dr. Dongran Han Moves to Harvard Medical School",
      description: "Dongran is going to Harvard medical school for a postdoc position. Congratulations, Dr. Han!",
      color: "#8b5cf6"
    },
    {
      date: "2013-04-20",
      type: "appointment",

      title: "Dr. Liu Earns Tenure and Promotion",
      description: "Congratulations to Dr. Liu for earning tenure and promotion to associate professor!",
      color: "#8b5cf6"
    },
    {
      date: "2013-04-15",
      type: "award",

      title: "Departmental Awards",
      description: "Congratulations to Minghui for winning the Departmental Outstanding Graduate Assistant Award; congratulations to Angela and Saswata for the Certificate in Recognition for Excellence as a Teaching Assistant.",
      color: "#ef4444"
    },
    {
      date: "2013-04-10",
      type: "defense",

      title: "Dr. Minghui Liu Successfully Defends Ph.D. Thesis",
      description: "Minghui has successfully defended her Ph.D thesis. Congratulations, Dr. Liu!",
      color: "#10b981"
    },
    {
      date: "2013-04-05",
      type: "defense",

      title: "Dr. Zhao Successfully Defends Ph.D. Thesis",
      description: "Zhao has successfully defended his Ph.D thesis. He is going to Harvard medical school for a postdoc position. Congratulations, Dr. Zhao!",
      color: "#10b981"
    },
    {
      date: "2013-04-01",
      type: "appointment",

      title: "Dr. Jinglin Fu Starts Assistant Professor Position",
      description: "Jinglin will start his independent career as tenure track Assistant Professor at Rutgers University, Camden in Fall 2013. Congratulations, Dr. Fu.",
      color: "#8b5cf6"
    },
    {
      date: "2012-11-15",
      type: "appointment",

      title: "Yang Moves to Yale",
      description: "Yang moved to Yale for a postdoc position. Congratulations, Yang.",
      color: "#8b5cf6"
    },
    {
      date: "2012-11-10",
      type: "defense",

      title: "Dr. Dongran Han Successfully Defends Ph.D. Thesis",
      description: "Dongran has successfully defended his Ph.D thesis. Congratulations, Dr. Han!",
      color: "#10b981"
    },
    {
      date: "2012-11-01",
      type: "defense",

      title: "Dr. Xiaowei Liu and Dr. Suchetan Pal Successfully Defend Ph.D. Theses",
      description: "Xiaowei and Suchetan have successfully defended their Ph.D theses. Congratulations, Dr. Liu and Dr. Pal!",
      color: "#10b981"
    },
    {
      date: "2012-09-15",
      type: "award",

      title: "NIH Director's Transformative R01 Award",
      description: "In collaboration with Prof. Milan Stojanovic at Columbia University. Dr. Yan received the 2012 NIH Director's Transformative R01 Award. The project is titled 'Theranostic Nano-objects: Basic Principles and Initial Applications'.",
      color: "#f59e0b"
    },
    {
      date: "2012-09-01",
      type: "appointment",

      title: "Zhengtao Moves to MIT",
      description: "Zhengtao moved to MIT for a Research Associate position. Congratulations, Zhengtao.",
      color: "#8b5cf6"
    },
    {
      date: "2012-08-15",
      type: "appointment",

      title: "Dr. Jaswinder Sharma Starts Staff Scientist Position",
      description: "Our former graduate student Dr. Jaswinder Sharma will start his independent career as tenure track Staff Scientist at Oak Ridge National Laboratory. Congratulations.",
      color: "#8b5cf6"
    },
    {
      date: "2012-08-01",
      type: "appointment",

      title: "Dr. Chengxiang Lin Starts Assistant Professor Position",
      description: "Our former graduate student Dr. Chengxiang Lin will start his independent career a tenure track Assistant Professor in the Department of Cell Biology at Yale University. Congratulations, Chenxiang.",
      color: "#8b5cf6"
    },
    {
      date: "2012-05-01",
      type: "award",

      title: "Department of Defense MURI Award",
      description: "Prof. Hao Yan receives prestigious $6.25 million multi-disciplinary research award from Department of Defense. This MURI research team draws on expertise across several scientific fields and includes fellow ASU co-investigators Neal Woodbury and Don Seo; Mark Bathe, of the Massachusetts Institute of Technology; William Shih, Harvard Medical School; and Nils Walter, University of Michigan.",
      color: "#f59e0b"
    },
    {
      date: "2012-04-01",
      type: "defense",

      title: "Dr. Zhe Li Successfully Defends Ph.D. Thesis",
      description: "Zhe has successfully defended her Ph.D thesis. She is going to Yale for a postdoc position. Congratulations, Dr. Li!",
      color: "#10b981"
    },
    {
      date: "2012-01-01",
      type: "appointment",

      title: "Milton D. Glick Distinguished Professor Appointment",
      description: "Dr. Hao Yan is appointed as Milton D. Glick Distinguished Professor in Chemistry and Biochemistry, starting from Jan. 01, 2012. Congratulations are in order!",
      color: "#f59e0b"
    },
    {
      date: "2011-11-15",
      type: "publication",

      title: "Chemical Society Reviews Theme Issue",
      description: "Chemical Society Reviews published a theme issue 'Advances in DNA-based nanotechnology', with a DNA origami jet featuring as the cover art. An article 'DNA origami: a quantum leap for self-assembly of complex structures', coauthored by Gothelf and Yan group, is published in this issue.",
      color: "#3b82f6"
    },
    {
      date: "2011-11-01",
      type: "defense",

      title: "Dr. Jeanette Nangreave Successfully Defends Ph.D. Thesis",
      description: "Jeanette has successfully defended her Ph.D thesis. She will become a Assistant Research Scientist/Lab Manager for the Yan lab. Congratulations, Dr. Nangreave!",
      color: "#10b981"
    },
    {
      date: "2011-04-01",
      type: "publication",

      title: "Science Cover Story - DNA Origami with Complex Curvatures",
      description: "Our paper 'DNA Origami with Complex Curvatures in Three-dimensional Space' featured as Science cover story. Congratulations to the authors: Dongran, Suchetan, Jeanette, and Zhengtao!",
      color: "#3b82f6"
    },
    {
      date: "2010-09-01",
      type: "appointment",

      title: "Reji Gets Assistant Professorship",
      description: "Congratulations to Reji for getting an Assistant Professorship from the Indian Institute of Science Education and Research. Reji will start his new position in January 2011.",
      color: "#8b5cf6"
    },
    {
      date: "2010-08-01",
      type: "appointment",

      title: "Baoquan Becomes Professor",
      description: "Congratulations to Baoquan for becoming a Professor in the National Center for Nanosciences and Technology, Chinese Academy of Sciences, in Beijing. He was also selected for the 100-talent program in the Chinese Academy of Sciences. Baoquan will start his new position in November 2010.",
      color: "#8b5cf6"
    },
    {
      date: "2010-04-01",
      type: "award",

      title: "Best Poster Award at FNANO",
      description: "Congratulations to Dongran for winning the best poster award at FNANO meeting.",
      color: "#ef4444"
    },
    {
      date: "2009-09-01",
      type: "student",

      title: "New Students Join the Group",
      description: "New students joined the group: Dongran Han, Anirban Samanta, Wei Li, Palash Dutta, Ashok Kumar, Welcome!",
      color: "#10b981"
    },
    {
      date: "2009-04-15",
      type: "defense",

      title: "Multiple Ph.D. Defenses",
      description: "Congratulations to Jas, Yonggang and Chenxiang for their successful Ph.D. defenses. Jas is moving to Los Alamos National Laboratory for a postdoc position. Yonggang and Chenxiang are both going to Dana-Farber Cancer Institute & Harvard Medical School for postdoc positions.",
      color: "#10b981"
    },
    {
      date: "2009-03-01",
      type: "defense",

      title: "Dr. Rahul Chhabra Successfully Defends Ph.D. Thesis",
      description: "Rahul has successfully defended his Ph.D dissertation. Congratulations, Dr. Chhabra! Dr. Chhabra is moving to U. of Alberta for a postdoc position.",
      color: "#10b981"
    },
    {
      date: "2008-11-01",
      type: "defense",

      title: "Dr. Kyle Lund Successfully Defends Ph.D. Thesis",
      description: "Kyle has successfully defended his Ph.D dissertation. Congratulations, Dr. Lund! Kyle is going to US Army to lead a research team.",
      color: "#10b981"
    },
    {
      date: "2008-10-01",
      type: "defense",

      title: "Dr. Sherri Rinker Successfully Defends Ph.D. Thesis",
      description: "Sherri has successfully defended her Ph.D dissertation. Congratulations to Dr. Rinker, the first Ph.D. produced from the Yan Lab! Sherri is going to Indiana University Medical School for a NIH postdoc fellow position.",
      color: "#10b981"
    },
    {
      date: "2008-05-01",
      type: "appointment",

      title: "Qiangbin Becomes Professor",
      description: "Congratulations to Qiangbin for becoming a Professor in the Suzhou Institute of Nano-tech and Nano-bionics, Chinese Academy of Sciences. He will start his new position in July 2008.",
      color: "#8b5cf6"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <main className="news-main-container" style={{ background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
      <div className="news-content-wrapper fade-in" style={{ borderRadius: 0, background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
  <section className="page-content" style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          </motion.div>



          {/* News Timeline */}
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '2.5rem', fontWeight: 700, color: '#232946', marginTop: '0.5rem', marginBottom: '0.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif' }}
          >
            News
          </motion.h2>

          <motion.div
            style={{ maxWidth: '900px', margin: '0 auto' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {newsItems.map((item, index) => (
              <React.Fragment key={index}>
                <motion.div
                  style={{
                    display: 'block',
                    textAlign: 'left',
                    marginBottom: '2rem',
                    background: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    padding: 0,
                    position: 'relative'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div style={{
                    marginBottom: '0.75rem',
                    color: '#232946',
                    fontSize: '1.05rem',
                    fontWeight: 400,
                    fontFamily: 'Inter, Arial, sans-serif'
                  }}>
                    {formatDate(item.date)}
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: '#232946',
                    fontFamily: 'Inter, Arial, sans-serif'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: '#232946',
                    lineHeight: '1.5',
                    fontSize: '1.05rem',
                    fontFamily: 'Inter, Arial, sans-serif'
                  }}>
                    {item.description}
                  </p>
                  {/* Type Badge on the right, floated */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: 0,
                      color: item.color,
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.type === 'award' && <FaTrophy style={{ color: item.color, fontSize: '1.3rem' }} />}
                    {item.type === 'defense' && <FaGraduationCap style={{ color: item.color, fontSize: '1.3rem' }} />}
                    {item.type !== 'award' && item.type !== 'defense' && (
                      <span style={{ textTransform: 'capitalize', fontSize: '0.78375rem', color: item.color }}>
                        {item.type}
                      </span>
                    )}
                  </span>
                </motion.div>
                {/* Insert video after Regents Professor news */}
                {item.title === "Prof. Hao Yan Bestowed as Regents Professor" && (
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/_TOzkOIhEKE"
                      title="Hao Yan Named Regents Professor at ASU"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ borderRadius: '8px', boxShadow: '0 12px 48px rgba(0,0,0,0.15)', maxWidth: '100%' }}
                    ></iframe>
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>



          {/* Archive Link */}
          <motion.div
            style={{ marginTop: '2rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <p style={{ color: '#232946', fontSize: '1.05rem', fontWeight: 400, fontFamily: 'Inter, Arial, sans-serif' }}>
              Looking for older news? Contact us for our complete news archive.
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default News;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitleMap = {
  '/': 'Yan Lab',
  '/research': 'Research - Yan Lab',
  '/team/pi-yan': 'PI Yan - Yan Lab',
  '/team/our-team': 'Our Team - Yan Lab',
  '/news': 'News - Yan Lab',
  '/publications': 'Publications - Yan Lab',
  '/resources': 'Resources - Yan Lab',
  '/contact': 'Contacts - Yan Lab'
};

/**
 * Dynamically sets document.title when route changes.
 */
const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const basePath = location.pathname.replace(/\/$/, '');
    const title = routeTitleMap[basePath || '/'] || 'Yan Lab';
    if (document.title !== title) {
      document.title = title;
    }
  }, [location.pathname]);

  return null;
};

export default TitleManager;
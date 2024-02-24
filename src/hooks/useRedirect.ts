import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useRedirect = (currentUrl: string, targetUrl: string) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === currentUrl) navigate(targetUrl);
  }, [location.pathname, currentUrl, targetUrl, navigate]);
};

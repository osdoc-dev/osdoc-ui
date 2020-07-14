import React, { useEffect } from 'react';
import Container from '../../components/Container';

const Page = () => {
  const loadPageScroll = () => {
    const scrollY = window.sessionStorage.indexPageScroll;
    if (!scrollY) return;
    window.scrollTo(0, scrollY);
  };

  useEffect(() => {
    loadPageScroll();
    return () => {};
  }, []);

  return (
    <Container className="index-page">
      <div>home</div>
    </Container>
  );
};

export default Page;

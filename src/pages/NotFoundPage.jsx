import React from 'react';

import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      NOT FOUND
      <button onClick={() => navigate('/')}>BackHome</button>
    </>
  );
};

export default NotFoundPage;

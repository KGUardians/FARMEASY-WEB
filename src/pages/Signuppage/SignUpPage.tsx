// src/App.tsx
import React from 'react';
import SignUpForm from '@components/SignUppage/SignUpForm';
import TopBar from '@components/common/TopBar/TopBar';

const App: React.FC = () => {
  return (
    <section>
      <TopBar title={'돌아가기'} />

      <div>
        <SignUpForm />
      </div>
    </section>
  );
};

export default App;

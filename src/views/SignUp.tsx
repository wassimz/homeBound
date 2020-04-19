import * as React from 'react';

import { SignUpEmail } from 'modules/user';
import { useAppState } from 'modules/app';

const SignUp: React.FC = () => {
  const [, { setAppThemeColor }] = useAppState();

  React.useEffect(() => {
    setAppThemeColor('#6A62FF');
  }, [setAppThemeColor]);

  return (
    <section className="app__content">
      <SignUpEmail />
    </section>
  );
};

export { SignUp };

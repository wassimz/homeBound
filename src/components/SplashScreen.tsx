import React from 'react';

import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { useAppState } from 'modules/app';

export const SplashScreen = () => {
  const [, { setAppTheme }] = useAppState();

  React.useEffect(() => {
    setAppTheme({ color: '#FAC936', shapeClass: 'app__deco--default' });
  }, [setAppTheme]);

  return (
    <section className="splashScreen app__content">
      <Logo className="splashScreen__logo" />
      <div className="splashScreen__title">
        <strong className="u-t__fontFamily--secondary u-t__fontSize--xxlarge">
          HomeBound
        </strong>
      </div>
    </section>
  );
};

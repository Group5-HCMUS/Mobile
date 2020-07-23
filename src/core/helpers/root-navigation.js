import * as React from 'react';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  console.log('di chuyeern', navigationRef);
  navigationRef.current?.navigate(name, params);
}

import {isServer} from '../utils';

const about = {to: 'about', text: 'About'};

export default () => {
  let items;

  if (isServer) {
    items = [].map(item => ({
      ...item,
      external: true,
      to: `/${item.to}.html`,
    }));
  } else {
    items = [about];
  }

  return items;
};

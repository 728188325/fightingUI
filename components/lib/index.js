import Button from './button/index.js';
import Card from './card/index.js';

const COMPONENTS = [Button, Card];

export { Button, Card };

const install = function (Vue, options) {
  if (options && options.components) {
    const components = options.components;
    components.forEach(componentName => {
      COMPONENTS.forEach(component => {
        if (componentName === component.name) {
          Vue.component(component.name, component);
        }
      });
    });
  } else {
    COMPONENTS.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};

export default { install };

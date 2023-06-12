import AuthFlow from './AuthFlow';
import MainFlow from './MainFlow';
import ErrorFlow from './ErrorFlow';

export default {
  ...AuthFlow,
  ...MainFlow,
  ...ErrorFlow,
};

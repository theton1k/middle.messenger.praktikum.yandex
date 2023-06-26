import AuthFlow from './AuthFlow';
import MainFlow from './MainFlow';
import ErrorFlow from './ErrorFlow';
import UserDataFlow from './UserDataFlow';

export default {
  ...AuthFlow,
  ...MainFlow,
  ...ErrorFlow,
  ...UserDataFlow,
};

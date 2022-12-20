import bus from '../utils/bus';

const useFlashMessages = () => {
  const setFlashMessage = (msg, type) => {
    bus.emit('flash', {
      message: msg,
      type: type,
    });
  };

  return { setFlashMessage };
};

export default useFlashMessages;

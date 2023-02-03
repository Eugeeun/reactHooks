export const useNotification = (title, options) => {
  if (!('Notification' in window)) return;
  const fireNotif = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission !== 'granted') return;
        new Notification(title, options);
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

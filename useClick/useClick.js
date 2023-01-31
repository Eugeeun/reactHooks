export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== 'function') return;
    if (element.current) {
      // 컴포넌트가 mount되었으면
      element.current.addEventListener('click', onClick);
    }
    return () => {
      // 정리해주어야 함 계속 이벤트리스너가 쌓이지 않게
      if (element.current) {
        element.current.removeEventListener('click', onclick);
      }
    };
  }, []); // []를 넣어주지 않으면 update될 때마다 이벤트리스너가 추가될 것임
  return typeof onClick !== 'function' ? undefined : element;
};

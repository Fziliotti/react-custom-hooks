import { useRef, useState, useEffect } from 'react';


function useHover() {
  const [isHover, setIsHover] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setIsHover(true);
  const handleMouseOut = () => setIsHover(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [] // Recall only if ref changes
  );

  return [ref, isHover];
}


export default useHover
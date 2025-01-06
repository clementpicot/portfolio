import React, { useState } from 'react'

export default function useToggle() {

    const [openedIndex, setOpenedIndex] = useState(null);
  
    const toggle = (index) => {
      setOpenedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

  return {openedIndex, toggle}
}

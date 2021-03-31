import React from 'react';
import A2Form from "../../components/doc/A2/A2Form";
import useStorage from '../../hooks/useStorage';

const A2Container = () => {
  const { onProductsDescription, onInspectionDescription, onStorage } = useStorage({
    H: {
      RCVNO: "",
      VESSELNM: "",
    },
    D1: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
    },
    D2: {
      0: 1,
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
      7: 1,
      8: 1,
      9: 1,
      10: 1,
      11: 1,
      12: 1,
      13: 1,
      14: 1,
      15: 1,
      16: 1,
      17: 1,
      18: 1,
      19: 1,
      20: 1,
      21: 1,
    },
  });

  return (
    <A2Form onProductsDescription={onProductsDescription} onInspectionDescription={onInspectionDescription} onStorage={onStorage}/>
  )
};

export default A2Container;
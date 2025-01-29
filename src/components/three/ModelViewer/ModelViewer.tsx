import { Bounds, useGLTF } from "@react-three/drei";
import { modelElementsAtom } from "@store/modelStore";
import { useAtom } from "jotai";
import { useEffect } from "react";

const ModelViewer = () => {
  const { scene, nodes } = useGLTF("/hoodie.glb");
  // console.log(nodes)

  const [, setmodelElements] = useAtom(modelElementsAtom);

  useEffect(() => {
    const arrayOfObj = Object.entries(nodes).map((e) => ({ [e[0]]: e[1] }));

    setmodelElements(arrayOfObj);
  }, []);

  return (
    scene && (
      <Bounds>
        <primitive object={scene} />
      </Bounds>
    )
  );
};

export default ModelViewer;

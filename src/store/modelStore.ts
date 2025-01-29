import { atom } from "jotai";
import { Object3D, Object3DEventMap } from "three";

type ModelElement = { [key: string]: Object3D<Object3DEventMap> };

export const modelUrlAtom = atom("");
// export const modelElementsAtom = atom([])
export const modelElementsAtom = atom<ModelElement[]>([]);

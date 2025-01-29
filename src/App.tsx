import "./App.scss";
import { Divider, HStack, VStack } from "@chakra-ui/react";
import { Settings } from "./components/UI/settings/Settings";
import Canvas3D from "./components/three/canvas3D/Canvas3D";
import Elements from "./components/UI/Elements/Elements";
import ColorPickerContainer from "./components/UI/ColorPicker/ColorPickerContainer";
import SideBarHeader from "./components/UI/SideBarHeader/SideBarHeader";
import BreadCrumps from "./components/UI/BreadCrumps/BreadCrumps";
import FileViewer from "./components/UI/FileViewer/FileViewer";
import FileViewerSingle from "./components/UI/FileViewer/FileViewerSingle";
import TextureLibrary from "./components/UI/TextureLibrary/TextureLibrary";
import UploadForm from "./components/UI/UploadForm/UploadForm";

function App() {
  return (
    <>
      <HStack height={"100vh"}>
        <VStack
          height={"100vh"}
          maxHeight={"100vh"}
          width={"450px"}
          bgColor={"bgDGray"}>
          {/* <SideBarHeader /> */}
          <VStack width={"full"} overflowY={"auto"}>
            <BreadCrumps />
            <FileViewer />
            {/* <FileViewerSingle /> */}
            <TextureLibrary />
            <UploadForm />
            <Divider />
            <Elements />
            <ColorPickerContainer />
            <Settings />
          </VStack>
        </VStack>
        <Canvas3D />
      </HStack>
    </>
  );
}

export default App;

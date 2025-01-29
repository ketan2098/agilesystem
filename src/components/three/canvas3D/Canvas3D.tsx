import { Canvas } from '@react-three/fiber'
import { CameraControllers } from '@three/CameraControllers/CameraControllers'
import LightsC from '@three/LightsC/LightsC'
import ModelViewer from '@three/ModelViewer/ModelViewer'


const Canvas3D = () => {
    return (
        <Canvas
            style={{ 
                width: '100%', 
                height: '100%',
                background: `linear-gradient(180deg, rgba(200,200,200,1) 0%, rgba(255,255,255,1) 100%)`
            }}
            camera={{ fov: 60, near: 0.1, far: 100, position: [0, 1, 2] }}
        >
            <ModelViewer />
            <LightsC />
            <CameraControllers />
        </Canvas>
    )
}

export default Canvas3D
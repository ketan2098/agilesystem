import { Environment } from '@react-three/drei'

const LightsC = () => {
    return (
        <>
            <Environment preset='warehouse' />
            <ambientLight color={'white'} intensity={1} />
        </>
    )
}

export default LightsC
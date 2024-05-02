import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function App() {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<mesh>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color="orange" />
			</mesh>
			<OrbitControls />
		</Canvas>
	)
}

export default App

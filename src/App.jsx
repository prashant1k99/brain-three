/* eslint-disable react/prop-types */
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
// import data from './data.json'
import * as THREE from 'three'

// const PATHS = data.economics[0].paths

let curves = []
for (let i = 0; i < 100; i++) {
	let points = []
	for (let j = 0; j < 100; j++) {
		points.push(
			new THREE.Vector3().setFromSphericalCoords(
				0.2,
				Math.PI * (i / 100),
				2 * Math.PI * (j / 100)
			)
		)
	}
	curves.push(new THREE.CatmullRomCurve3(points))
}

console.log(curves)

function Tube({ curve }) {
	return (
		<mesh>
			<tubeGeometry args={[curve, 64, 0.1, 8, false]} />
			<meshStandardMaterial color="blue" />
		</mesh>
	)
}

function Tubes() {
	return (
		<group>
			{curves.map((curve, index) => (
				<Tube curve={curve} key={index} />
			))}
		</group>
	)
}

function App() {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Tubes />
			<OrbitControls />
		</Canvas>
	)
}

export default App

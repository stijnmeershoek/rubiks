import { useEffect, useRef } from 'react'
import * as SRVisualizer from 'sr-visualizer'

export function Cube(options: SRVisualizer.ICubeOptions) {
    const ref = useRef(null)

    useEffect(() => {
        let element = ref.current as unknown as HTMLDivElement;
        SRVisualizer.cubeSVG(element, options);
    }, [])

    return (
        <div ref={ref}>

        </div>
    )
}

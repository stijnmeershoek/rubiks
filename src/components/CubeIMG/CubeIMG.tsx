import { useEffect, useRef } from 'react'
import * as SRVisualizer from 'sr-visualizer'

export function Cube(options: SRVisualizer.ICubeOptions) {
    const ref = useRef(null);

    useEffect(() => {
        (ref.current as unknown as HTMLDivElement).innerHTML = "";
    }, [])

    useEffect(() => {
        let element = ref.current as unknown as HTMLDivElement;
        SRVisualizer.cubeSVG(element, options);
    }, [options.algorithm])

    return (
        <div ref={ref}>

        </div>
    )
}
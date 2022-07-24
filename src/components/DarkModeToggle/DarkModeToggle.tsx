
import useDarkMode from "../../hooks/useDarkMode";

export function DarkModeToggle() {
    const [dark, setDark] = useDarkMode();


    return (
        <div className="dark-toggle absolute right-6 top-6 flex justify-center items-center w-[25px] aspect-square cursor-pointer" tabIndex={0}>
            {dark ? (<svg onClick={() => setDark(false)} width="20px" viewBox="0 0 1000 1000" fill="currentColor">
                <path
                    d="M464.3,535.8C322.1,393.5,283.9,187.9,346.9,9.9C278.1,34.3,213,72.4,158,127.3C-39.3,324.7-39.3,644.7,158,842c197.3,197.3,517.2,197.4,714.6,0C927.8,787,965.7,722,990,653.2C812.2,716.1,606.5,678,464.3,535.8z" />
            </svg>) : (<svg onClick={() => setDark(true)} width="25px" viewBox="0 0 1000 1000" fill="currentColor">
                <path
                    d="M289.3,501.2c0,118.9,96.4,215.2,215.2,215.2c118.9,0,215.2-96.4,215.2-215.2c0-118.9-96.4-215.2-215.2-215.2C385.7,286,289.3,382.4,289.3,501.2z" />
                <path
                    d="M498.8,177.8L498.8,177.8c-17.4,0-31.6-14.2-31.6-31.6V48.9c0-17.4,14.2-31.6,31.6-31.6l0,0c17.4,0,31.6,14.2,31.6,31.6v97.3C530.4,163.6,516.2,177.8,498.8,177.8z" />
                <path
                    d="M504.5,982.7L504.5,982.7c-17.4,0-31.6-14.2-31.6-31.6v-97.3c0-17.4,14.2-31.6,31.6-31.6l0,0c17.4,0,31.6,14.2,31.6,31.6v97.3C536.2,968.5,521.9,982.7,504.5,982.7z" />
                <path
                    d="M156.3,843.7L156.3,843.7c-12-12.5-11.6-32.7,0.9-44.7l70.2-67.3c12.5-12,32.7-11.6,44.7,0.9l0,0c12,12.5,11.6,32.7-0.9,44.7L201,844.7C188.5,856.7,168.4,856.3,156.3,843.7z" />
                <path
                    d="M728.5,267.4L728.5,267.4c-12-12.5-11.6-32.7,0.9-44.7l70.2-67.3c12.5-12,32.7-11.6,44.7,0.9l0,0c12,12.5,11.6,32.7-0.9,44.7l-70.2,67.3C760.7,280.3,740.6,279.9,728.5,267.4z" />
                <path
                    d="M829.5,497.1L829.5,497.1c0.4-17.4,14.9-31.3,32.3-30.9l97.3,2c17.4,0.4,31.3,14.9,30.9,32.3l0,0c-0.4,17.4-14.9,31.3-32.3,30.9l-97.3-2C843.1,529,829.2,514.5,829.5,497.1z" />
                <path
                    d="M10,497.1L10,497.1c0.4-17.4,14.9-31.3,32.3-30.9l97.3,2c17.4,0.4,31.3,14.9,30.9,32.3l0,0c-0.4,17.4-14.9,31.3-32.3,30.9l-97.3-2C23.6,529,9.6,514.5,10,497.1z" />
                <path
                    d="M152.2,159.1L152.2,159.1c11.4-13.1,31.5-14.5,44.6-3l73.3,63.9c13.1,11.4,14.5,31.5,3,44.6l0,0c-11.4,13.1-31.5,14.5-44.6,3l-73.3-63.9C142.2,192.2,140.8,172.2,152.2,159.1z" />
                <path
                    d="M726,735.4L726,735.4c11.4-13.1,31.5-14.5,44.6-3l73.3,63.9c13.1,11.4,14.5,31.5,3,44.6l0,0c-11.4,13.1-31.5,14.5-44.6,3L729,780C715.9,768.6,714.5,748.5,726,735.4z" />
            </svg>)
            }
        </div >

    )
}

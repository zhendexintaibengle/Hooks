export function getWindowHeight(setHeight) {
    window.onresize = () => {
        setHeight(document.body.clientHeight)
    }
}
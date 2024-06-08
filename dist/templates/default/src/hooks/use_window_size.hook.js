"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// hooks/useWindowSize.ts
const react_1 = require("react");
function useWindowSize() {
    const [windowSize, setWindowSize] = (0, react_1.useState)({
        width: undefined,
        height: undefined,
    });
    (0, react_1.useEffect)(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}
exports.default = useWindowSize;

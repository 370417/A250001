import { Circle } from './data';

/** This file converts circle objects to the proper format for svg to dislpay. */

/// Represents an absolute move in a path's data
/// M x y
interface SVGPathMove {
    x: number;
    y: number;
}

/// Represents an absolute arc in a path's data
/// A rx ry x-axis-rotation large-arc-flag sweep-flag x y
interface SVGPathArc {
    rx: number;
    ry: number;
    rotation: number;
    largeArcFlag: boolean;
    sweepFlag: boolean;
    x: number;
    y: number;
}

/// Represents an absolute full circle in a path's data
type SVGPathCircle = [SVGPathMove, SVGPathArc, SVGPathArc];

function formatMove(path: SVGPathMove): string {
    return `M ${path.x} ${path.y} `;
}

function formatArc(path: SVGPathArc): string {
    const largeArcFlag = path.largeArcFlag ? 1 : 0;
    const sweepFlag = path.sweepFlag ? 1 : 0;
    return `A ${path.rx} ${path.ry} ${path.rotation} ${largeArcFlag}
    ${sweepFlag} ${path.x} ${path.y} `;
}

function formatCircle(path: SVGPathCircle): string {
    return formatMove(path[0]) + formatArc(path[1]) + formatArc(path[2]);
}

function circleToSvg(circle: Circle): SVGPathCircle {
    // 9 o'clock on the circle
    const entryPoint = {
        x: circle.cx - circle.r,
        y: circle.cy,
    };
    // 3 o'clock on the circle
    const midPoint = {
        x: circle.cx + circle.r,
        y: circle.cy,
    };
    const defaultParams = {
        rx: circle.r,
        ry: circle.r,
        rotation: 0,
        largeArcFlag: false,
        sweepFlag: false,
    };
    return [
        entryPoint,
        { ...defaultParams, ...midPoint },
        { ...defaultParams, ...entryPoint },
    ]
}

export function circleToD(circle: Circle): String {
    return formatCircle(circleToSvg(circle));
}

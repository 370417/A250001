import { data, Circle } from './data';
import { circleToD } from './svg';

/** This file handles easing and other animation calculations. */

export interface CircleAnimation {
    frame: number,
    readonly startIndex: number,
    readonly endIndex: number,
    readonly duration: number,
    readonly permutation: readonly[number, number, number, number],
}

export function render(animation: CircleAnimation): string {
    return animation.permutation.map((shuffledIndex, index) => {
        const startCircle = data[4 * animation.startIndex + index];
        const endCircle = data[4 * animation.endIndex + shuffledIndex];
        const easeFunction = index % 2 ? sinEaseCircle : secEaseCircle;
        const circle = easeFunction(
            startCircle,
            endCircle,
            // add 0.5 to avoid infinite circles
            (animation.frame + 0.5) / animation.duration);
        return circleToD(circle);
    }).join(' ');
}

/** Create a new random animation from a certain starting point */
export function randAnimation(startIndex: number, duration: number): CircleAnimation {
    const endIndex = Math.floor(data.length / 4 * Math.random());
    return {
        frame: 0,
        startIndex,
        endIndex,
        duration,
        permutation: [3, 0, 1, 2],
    };
}

/** 
 * Sinusoidal ease-in-out.
 * time ranges from 0 to 1.
 */
function sinEase(from: number, to: number, time: number): number {
    const change = to - from;
    return change / 2 * (1 - Math.cos(Math.PI * time)) + from;
}

/**
 * Inverse easing based on secant.
 * If a < b, this function goes from a to -Infinity to +Infinity to b instead
 * of going from a to b.
 * Penalty is the amount of range to skip at the transition between infinities.
 * We need penalty to account for the padding from the radius when we ease the
 * circles' centers.
 */
function secEase(from: number, to: number, time: number, penalty: number): number {
    const change = to - from;
    if (time < 0.5) {
        return sinEase(from, to - penalty, time) + change - change / Math.cos(Math.PI * time);
    } else if (time > 0.5) {
        return sinEase(from + penalty, to, time) - change - change / Math.cos(Math.PI * time);
    } else {
        return Infinity;
    }
}

/**
 * Loke secEase, but goes to +Infinity twice instead of alternating signs; for
 * situations where you need the absolute value of an easing function (eg for
 * radius).
 */
// TODO: Edge case to consider: amplitude can be 0 if distance is 0
// This wouldn't be a problem, but because of floating point math,
// distance might be 0 when dx or dy != 0 (eg if dx is so small that, when
// squared, becomes 0)
function absLogEase(from: number, to: number, time: number, amplitude?: number): number {
    amplitude = amplitude || to - from;
    if (time < 0.5) {
        return from - amplitude + amplitude / Math.cos(Math.PI * time);
    } else if (time > 0.5) {
        return to - amplitude - amplitude / Math.cos(Math.PI * time);
    } else {
        return Infinity;
    }
}

function sinEaseCircle(from: Circle, to: Circle, time: number): Circle {
    return {
        cx: sinEase(from.cx, to.cx, time),
        cy: sinEase(from.cy, to.cy, time),
        r: sinEase(from.r, to.r, time),
    };
}

function secEaseCircle(from: Circle, to: Circle, time: number): Circle {
    const distance = calcDistance(from, to);
    if (distance < 0.0002) {
        return sinEaseCircle(from, to, time);
    }
    const penalty = from.r + to.r;
    const costheta = (to.cx - from.cx) / distance;
    const sintheta = (to.cy - from.cy) / distance;
    return {
        cx: secEase(from.cx, to.cx, time, penalty * costheta),
        cy: secEase(from.cy, to.cy, time, penalty * sintheta),
        r: absLogEase(from.r, to.r, time, distance),
    };
}

function calcDistance(a: Circle, b: Circle): number {
    const dx = a.cx - b.cx;
    const dy = a.cy - b.cy;
    return Math.sqrt(dx * dx + dy * dy);
}

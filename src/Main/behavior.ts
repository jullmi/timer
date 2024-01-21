import { Dispatch, SetStateAction, useCallback } from "react";

export const addTimer = (setTimer: Dispatch<SetStateAction<number[]>>): void => {
	const newTimerId: number = Math.random();
	setTimer((prev: number[]) => [...prev, newTimerId]);
};

export const removeTimer = (setTimers: Dispatch<SetStateAction<number[]>>): void => {
	setTimers((prev: number[]) => prev.filter((_, i) => i !== prev.length - 1));
};
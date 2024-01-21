import { Duration, DurationObjectUnits } from "luxon";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

export const enableTimer = (setIsTimerEnable: Dispatch<SetStateAction<boolean>>): void => {
	setIsTimerEnable((prev) => !prev);
};

export const resetTimer = (setTimerValue: Dispatch<SetStateAction<Duration>>, emptyDuration: Duration): void => {
	setTimerValue(emptyDuration);
};

export const useTimerValue = (isTimerEnable: boolean, timerValue: Duration, setTimerValue: Dispatch<SetStateAction<Duration>>): DurationObjectUnits => {
	const tick = (): void => {
		setTimerValue((prev) => prev.plus({minutes: 0, seconds: 0, milliseconds: 100}));
	};

	useEffect(() => {
		let timerId: ReturnType<typeof setTimeout>;
		if (isTimerEnable) {
			timerId = setTimeout(() => {
				tick();
				timerId = setTimeout(tick, 100);
			}, 100);
		}
		return () => clearTimeout(timerId);
	}, [isTimerEnable, timerValue]);

	return timerValue.shiftTo('minutes', 'seconds', 'milliseconds').toObject()
}
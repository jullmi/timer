import React, { useState } from 'react';
import { Duration } from 'luxon'

import { enableTimer, resetTimer, useTimerValue } from './behavior'

function Timer() {
	const emptyDuration = Duration.fromObject({minutes: 0, seconds: 0, milliseconds: 0});

	const [isTimerEnable, setIsTimerEnable] = useState<boolean>(false);
	const [timerValue, setTimerValue] = useState<Duration>(emptyDuration);
	const value = useTimerValue(isTimerEnable, timerValue, setTimerValue)

	return (
		<div style={{border: "1px solid black", padding: 16, width: "max-content"}}>
			<div>{`${value.minutes}:${value.seconds}.${value.milliseconds}`}</div>
			<button onClick={() => enableTimer(setIsTimerEnable)}>Start / Pause</button>
			<button onClick={() => resetTimer(setTimerValue, emptyDuration)}>Reset</button>
		</div>
	);
}

export default Timer;

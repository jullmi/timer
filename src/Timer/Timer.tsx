import React, { useState } from 'react';
import { Duration } from "luxon";

import { enableTimer, resetTimer, useTimerValue } from './behavior'
import './styles.css'

function Timer() {
	const emptyDuration = Duration.fromObject({minutes: 0, seconds: 0, milliseconds: 0});

	const [isTimerEnable, setIsTimerEnable] = useState<boolean>(false);
	const [timerValue, setTimerValue] = useState<Duration>(emptyDuration);
	const value = useTimerValue(isTimerEnable, timerValue, setTimerValue)

	return (
		<div className="timer">
			<div className="timer_value">{`${value.minutes}:${value.seconds}.${value.milliseconds}`}</div>
			<div className='timer_buttons_container'>
				<button onClick={() => enableTimer(setIsTimerEnable)}>Start / Pause</button>
				<button onClick={() => resetTimer(setTimerValue, emptyDuration)}>Reset</button>
			</div>
		</div>
	);
}

export default Timer;

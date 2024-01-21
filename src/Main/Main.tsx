import React, { useState } from 'react';

import { addTimer, removeTimer } from './behavior'
import Timer from "../Timer";
import './styles.css'

function Main() {
	const [timers, setTimers] = useState<number[]>([])

	return (
		<div className="root">
			<div className="buttons_wrapper">
				<button onClick={() => addTimer(setTimers)}>Add timer</button>
				<button onClick={() => removeTimer(setTimers)}>Remove</button>
			</div>
			<ul className="list">
				{timers.map(timer => (
					<Timer key={timer}/>
				))}
			</ul>
		</div>
	);
}

export default Main;

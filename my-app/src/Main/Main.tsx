import React, { useState } from 'react';

import { addTimer, removeTimer } from './behavior'
import Timer from "../Timer";

function Main() {
	const [timers, setTimers] = useState<number[]>([])

	return (
		<div>
			<button onClick={() => addTimer(setTimers)}>Add timer</button>
			<button onClick={() => removeTimer(setTimers)}>Remove</button>
			<ul style={{display: "flex", gap: 16}}>
				{timers.map(timer => (
					<Timer key={timer}/>
				))}
			</ul>
		</div>
	);
}

export default Main;

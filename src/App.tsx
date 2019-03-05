import moment from 'moment'
import React, { useEffect, useState } from 'react'
// @ts-ignore


const App: React.FC = () => {

	const [refresh, setRefresh] = useState<number>(0)

	const gloryTime = moment('2019-02-12').unix()
	const now = Date.now() / 1000 | 0
	const delta = moment.duration(now - gloryTime, 'seconds')

	useEffect(()=> {
		setTimeout(()=> setRefresh(refresh + 1), 1000)
	}, [refresh])

	return <div id="app">
		<div>
			<div id={'title'}>Rauchmelder 💨</div>
			<br/>
			<div id={'text'}>
				{delta.humanize()}
				<br/>
				{delta.asSeconds()}
			</div>
		</div>
	</div>
}

export default App
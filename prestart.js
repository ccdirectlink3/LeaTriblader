ccmod3.resources.jsonPatches.add('data/players/lea.json', (data) => {
	data.class = 'TRIBLADER';
	for (let actionName of ['ATTACK', 'ATTACK_REV', 'ATTACK_FINISHER']) {
		for (let step of data.actions.BASE[actionName].steps) {
			if (step.type !== 'COMBAT_SWEEP') continue;

			switch (step.sweepType) {
				case 'SPHEROMANCER':
					step.sweepType = 'TRIBLADER';
					break;
				case 'SPHEROMANCER_FINISHER':
					step.sweepType = 'TRIBLADER_FINISHER';
					break;
			}
		}
	}
});

const { getTeamGoals } = require('./index')

describe("Solution", function () {
	it("Gives the total league goals for Man utd during the 14/15 season ", async () => {
        const input = 'manutd'
        const output = await getTeamGoals(input)
		expect(output).toBe(62)
	});
	it("Gives the total league goals for Liverpool during the 14/15 season ", async () => {
        const input = 'liverpool'
        const output = await getTeamGoals(input)
		expect(output).toBe(52)
	});
});


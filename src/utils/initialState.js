import faker from "faker"; // for MOCK API's

export const defaultNotes = [
	{
		content: "Target-x test Notes",
		folder: "random",
		id: 124111251,
		editDate: faker.date.past(),
	},
];

export const defaultFolders = [
	{
		name: "Notes",
		url: "notes",
	},
];

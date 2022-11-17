const { Resolver } = require("@parcel/plugin");

module.exports = new Resolver({
	async resolve({ dependency, options, specifier, pipeline }) {
		if (pipeline === "rawurl") {
			return { isExcluded: true };
		}

		return null;
	},
});

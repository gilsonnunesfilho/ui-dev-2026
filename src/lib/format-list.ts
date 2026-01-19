const defaultOptions = {
	style: "long",
	localeMatcher: "best fit",
	type: "conjunction",
} satisfies Intl.ListFormatOptions;

// Overload: with options and optional locale
export function formatList(
	items: Iterable<string>,
	options?: Intl.ListFormatOptions,
	locale?: Intl.LocalesArgument,
): string;

// Overload: with locale only (no options)
export function formatList(
	items: Iterable<string>,
	locale: Intl.LocalesArgument,
): string;

// Implementation signature
export function formatList(
	items: Iterable<string>,
	optionsOrLocale?: Intl.ListFormatOptions | Intl.LocalesArgument,
	locale?: Intl.LocalesArgument,
): string {
	// Determine if second parameter is locale or options
	let options: Intl.ListFormatOptions;
	let localeToUse: Intl.LocalesArgument | undefined = "en-US";

	if (typeof optionsOrLocale === "string" || Array.isArray(optionsOrLocale)) {
		// Second parameter is locale
		options = defaultOptions;
		localeToUse = optionsOrLocale as Intl.LocalesArgument;
	} else {
		// Second parameter is options (or undefined)
		options = {
			...defaultOptions,
			...(optionsOrLocale as Intl.ListFormatOptions | undefined),
		};
		localeToUse = locale ?? localeToUse;
	}

	const listFormat = new Intl.ListFormat(localeToUse, options);
	return listFormat.format(items);
}

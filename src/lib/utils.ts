// True only for real links, so "[TODO: ...]" placeholders never become broken buttons.
export const isUrl = (value?: string): value is string =>
  !!value && /^https?:\/\//.test(value);

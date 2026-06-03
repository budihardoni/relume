export const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0;

export const assertArray = (value, fallback = []) => Array.isArray(value) ? value : fallback;

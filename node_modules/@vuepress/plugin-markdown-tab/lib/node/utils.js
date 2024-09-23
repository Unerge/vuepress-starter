// Single quote will break @vue/compiler-sfc
export const stringifyProp = (data) => JSON.stringify(data).replace(/'/g, '&#39');

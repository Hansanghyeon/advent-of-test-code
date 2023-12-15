export function flattenObject(obj: any, parentKey?: string, result: Record<string, any> = {}): Record<string, any> {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const newKey = parentKey ? `${parentKey}.${key}` : key;
    const value = obj[key];

    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          result[`${newKey}.${index}`] = item;
        });
      } else {
        flattenObject(value, newKey, result);
      }
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

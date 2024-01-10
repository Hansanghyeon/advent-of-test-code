export function isSnakeCase(text: string): boolean {
  const snakeCaseRegex = /^[a-z0-9]+(_[a-z0-9]+)*$/;
  return snakeCaseRegex.test(text);
}
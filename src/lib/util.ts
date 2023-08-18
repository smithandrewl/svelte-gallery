export function makeKebab(input: string): string {
  let output = input
  .trim() // Remove leading and trailing whitespace
    .toLowerCase() // Convert the string to lowercase
    .replace(/[^a-zA-Z0-9\s-]/g, '') // Remove any non-alphanumeric characters except spaces and dashes
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/-+/g, '-'); // Replace multiple consecutive dashes with a single dash

  console.log(output);

  return output;
}

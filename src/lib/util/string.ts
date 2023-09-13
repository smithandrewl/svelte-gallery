

/**
 * Converts a given string into kebab-case.
 *
 * The `makeKebab` function performs the following transformations:
 * - Trims leading and trailing whitespace
 * - Converts the string to lowercase
 * - Removes any non-alphanumeric characters except spaces and dashes
 * - Replaces spaces with dashes
 * - Replaces multiple consecutive dashes with a single dash
 *
 * @param input - The input string to be converted into kebab-case.
 * @returns The kebab-cased string.
 * @example
 * makeKebab("Horizontal Length") // Returns "horizontal-length"
 */
export function makeKebab(input: string): string {
  let output =
        input
        .trim()                          // Remove leading and trailing whitespace
          .toLowerCase()                   // Convert the string to lowercase
          .replace(/[^a-zA-Z0-9\s-]/g, '') // Remove most non-alphanumeric characters
          .replace(/\s+/g, '-')            // Replace spaces with dashes
          .replace(/-+/g, '-');            // Replace multiple consecutive dashes with a single dash

  return output;
}











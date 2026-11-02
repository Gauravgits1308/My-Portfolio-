/**
 * Zero-dependency classNames utility for combining conditional classes.
 */
export type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | Record<string, boolean | undefined | null>
  | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  const process = (val: ClassValue) => {
    if (!val) return;
    if (typeof val === "string" || typeof val === "number") {
      classes.push(String(val));
    } else if (Array.isArray(val)) {
      val.forEach(process);
    } else if (typeof val === "object") {
      for (const [key, enabled] of Object.entries(val)) {
        if (enabled) classes.push(key);
      }
    }
  };

  inputs.forEach(process);
  return classes.join(" ");
}

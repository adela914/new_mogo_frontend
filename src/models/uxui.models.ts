/**
 * A const enum that includes all non-printable string values one can expect from $event.key.
 * For example, this enum includes values like "Tab", "Enter", and "ArrowKey".
 * More keys can be added if needed.
 */
export enum Key {
  /** The Horizontal Tab key, Tab. */
  Tab = "Tab",

  /** The down arrow key. */
  ArrowDown = "ArrowDown",

  /** The left arrow key. */
  ArrowLeft = "ArrowLeft",

  /** The right arrow key. */
  ArrowRight = "ArrowRight",

  /** The up arrow key. */
  ArrowUp = "ArrowUp",
}

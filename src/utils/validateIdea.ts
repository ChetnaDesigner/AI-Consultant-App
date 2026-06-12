import {
  IDEA_MIN_LENGTH_MESSAGE,
  IDEA_REQUIRED_MESSAGE,
  MIN_IDEA_LENGTH,
} from "../constants/ideaInput";

export function validateIdea(idea: string): string | null {
  if (!idea) return IDEA_REQUIRED_MESSAGE;
  if (idea.length < MIN_IDEA_LENGTH) return IDEA_MIN_LENGTH_MESSAGE;
  return null;
}

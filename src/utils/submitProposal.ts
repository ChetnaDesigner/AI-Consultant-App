import { GENERATION_DELAY_MS } from "../constants/ideaInput";
import { delay } from "./delay";
import { generateProposal } from "./generateProposal";

export async function submitProposal(idea: string): Promise<string> {
  await delay(GENERATION_DELAY_MS);
  return generateProposal(idea);
}

import axios from "axios";
import type { DictionaryEntry } from "../types/dictionary";

const BASE_URL =
  "https://api.dictionaryapi.dev/api/v2/entries/en";

export const getWord = async (
  word: string
): Promise<DictionaryEntry[]> => {

  const response = await axios.get(
    `${BASE_URL}/${word}`
  );

  return response.data;
};
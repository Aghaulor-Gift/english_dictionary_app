import { useState } from "react";
import { getWord } from "../api/dictionaryApi";
import type { DictionaryEntry } from "../types/dictionary";

export function useDictionary() {
  const [wordData, setWordData] =
    useState<DictionaryEntry | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const searchWord = async (
    word: string
  ) => {
    try {
      setLoading(true);
      setError("");

      const data = await getWord(word);

      console.log(data);

      setWordData(data[0]);
    } catch {
      setError("Word not found");
      setWordData(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    wordData,
    loading,
    error,
    searchWord,
  };
}
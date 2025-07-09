//Barrow File - arquivo que exporta todos os arquivos que existem nesse contexto

import { audioChunks } from "./audio-chunks.ts";
import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

export const schema = {
  rooms, questions, audioChunks
}
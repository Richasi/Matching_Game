export interface Card {
  id: number;
  type: "fruit" | "alphabet";
  content: string | null;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  cards: Card[];
  moves: number;
  matches: number;
}

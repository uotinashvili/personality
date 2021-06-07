export interface Question {
  id: number;
  title: string;
  selected: number;
  correctOptionId: number;
  isAnswered: boolean;
  options: Option[];
}

export interface Option {
  id: number;
  questionId: number;
  name: string;
}

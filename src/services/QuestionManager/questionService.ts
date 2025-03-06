export interface QuestionRecord {
  code: string;
  subject: string;
  content: string;
  difficulty: string;
  knowledgeBlock: string;
}

const deleteQuestion = (code: string) => {
  const questions = JSON.parse(localStorage.getItem('questions') as string) || [];
  const newQuestions = questions.filter((item: QuestionRecord) => item.code !== code);
  localStorage.setItem('questions', JSON.stringify(newQuestions));
};

const searchQuestions = (subject?: string, difficulty?: string, knowledgeBlock?: string): QuestionRecord[] => {
  const questions = JSON.parse(localStorage.getItem('questions') as string) || [];
  return questions.filter((item: QuestionRecord) => {
    return (!subject || item.subject === subject) &&
           (!difficulty || item.difficulty === difficulty) &&
           (!knowledgeBlock || item.knowledgeBlock === knowledgeBlock);
  });
};

export default {
  deleteQuestion,
  searchQuestions,
};

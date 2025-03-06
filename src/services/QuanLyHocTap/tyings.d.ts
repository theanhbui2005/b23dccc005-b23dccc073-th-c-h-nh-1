/* eslint-disable @typescript-eslint/no-redeclare */
declare module QuanLyHocTap {
	export interface Record {
		code: string;
		subject: string;
		content: string;
		difficulty:  string;
		knowledgeBlock: string;
	}
}
export enum Subject {
	Math = 'Math',
	Physics = 'Physics',
	Chemistry = 'Chemistry',
	// Add more subjects as needed
  }
  
  export enum Difficulty {
	Easy = 'Easy',
	Medium = 'Medium',
	Hard = 'Hard',
	VeryHard = 'Very Hard',
  }
  
  export enum KnowledgeBlock {
	Algebra = 'Algebra',
	Geometry = 'Geometry',
	Calculus = 'Calculus',
	// Add more knowledge blocks as needed
  }

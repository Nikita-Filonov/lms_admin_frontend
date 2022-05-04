export interface Course {
  id: number;
  title: string;
  image: string;
  description: string;
  content?: string;
  editorContent?: string;
}

export interface CreateCourse extends Omit<Course, 'editorContent' | 'content' | 'id'> {
}

export interface UpdateCourse extends Omit<Course, 'id'> {
}

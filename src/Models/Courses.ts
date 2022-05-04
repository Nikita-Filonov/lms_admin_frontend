export interface Course {
  id: number | null;
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

export interface ReduxCourse extends Course {
  editMode: boolean;
}

import React, {FC, useMemo, useState} from "react";
import {Editor} from "./Editor";
import debounce from 'lodash/debounce';
import {OutputData} from "@editorjs/editorjs";
import {emptyEditor, saveHtmlEditorContent} from "../../../Utils/Helpers/Editor";
import {useCourses} from "../../../Providers/CoursesProvider";
import {Course} from "../../../Models/Courses";

type CourseEditorProps = {
  course: Course
}

export const CourseEditor: FC<CourseEditorProps> = ({course}) => {
  const {updateCourse} = useCourses();
  const [loading, setLoading] = useState(false);

  const editorContent = useMemo(
    () => course?.editorContent ? JSON.parse(course?.editorContent) : emptyEditor(),
    [course?.editorContent]
  );

  const saveContent = async (editorData: OutputData) => {
    setLoading(true);

    if (!course?.id) {
      return;
    }

    const content = JSON.stringify(editorData);
    setTimeout(async () => {
      const htmlContent = saveHtmlEditorContent();
      await updateCourse(course.id, {content: htmlContent, editorContent: content});
    }, 100);
  };

  const saveContentDebounced = useMemo(() => debounce(saveContent, 3000), [saveContent]);

  return <Editor autoFocus={true} onChange={saveContentDebounced} editorData={editorContent}/>;
};

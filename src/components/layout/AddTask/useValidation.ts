import z from "zod";
import type { taskTypes } from "../../../types/taskTypes";
import { useState } from "react";

export const useValidation = (unValidateTask: taskTypes) => {
  const [errors, setErrors] = useState<string[] | null>();
  const validation = z.object({
    task: z.string().min(3, "Task must be at least 3 characters"),
    date: z.string(),
  });

  const result = validation.safeParse(unValidateTask);

  const isValid = result.success;

  if (!result.success) {
    const errorMessages = result.error.issues.map((issue) => issue.message);
    setErrors(errorMessages);
  } else if (result.success) {
    setErrors(["No validation errors found"]);
  }

  return { isValid, errors };
};

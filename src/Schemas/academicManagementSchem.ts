import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Please Select a  name " }),
  year: z.string({ required_error: "Please Select a year  " }),
  startMonth: z.string({ required_error: "Please Select a  start month " }),
  endMonth: z.string({ required_error: "Please Select a  end month " }),
});

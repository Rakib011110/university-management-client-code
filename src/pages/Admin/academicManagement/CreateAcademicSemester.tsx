import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../form/PHSelect";
import { monthOptions } from "../../../constants/global";
import { semesterOptions } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../Schemas/academicManagementSchem";
import { useAddAcademicSemesterMutation } from "../../../redux/Fetures/admin/academicManagement.API";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";

const currentYear = new Date().getFullYear();

const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

console.log(yearOptions);

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating a Semester...");

    console.log(data.name);
    const name = semesterOptions[Number(data.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      console.log(semesterData);

      const res = (await addAcademicSemester(semesterData)) as TResponse;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester create success", { id: toastId });
      }
    } catch (err) {
      toast.error("somthing went wrong");
    }
  };

  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm
            onSubmit={onSubmit}
            resolver={zodResolver(academicSemesterSchema)}>
            <PHSelect label={"Name"} name="name" options={semesterOptions} />
            <PHSelect label={"Year"} name="year" options={yearOptions} />

            <PHSelect
              label="Start Month"
              name="startMonth"
              options={monthOptions}
            />
            <PHSelect
              label="End Month"
              name="endMonth"
              options={monthOptions}
            />
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicSemester;

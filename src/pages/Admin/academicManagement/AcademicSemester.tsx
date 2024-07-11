import { useGetAllSemestersQuery } from "../../../redux/Fetures/academicSemester/AcademicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1> This Academic Semester </h1>
    </div>
  );
};

export default AcademicSemester;

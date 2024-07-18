import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../form/PHForm";
import PHInput from "../../form/PHInput";
import { Button, Col, Row } from "antd";

const studentDamiData = {
  password: "student123",
  student: {
    name: {
      firstName: "Mr. Student2",
      middleName: "",
      lastName: "Good",
    },
    gender: "male",
    dateOfBirth: "1990-01-01",
    email: "abcd@gmail.com",
    contactNo: "123567",
    emergencyContactNo: "987-654-3210",
    bloogGroup: "A+",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },
    admissionSemester: "65663d516435f247a24e9169",
    academicDepartment: "656701b4adaebc55db21bdea",
    profileImg: "path/to/profile/image.jpg",
  },
};

const CreateStudents = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    //! just for checking
    console.log(Object.fromEntries(formData));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <PHForm onSubmit={onsubmit}>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name" label="Name" />
            </Col>
          </Row>

          <Button htmlType="submit"> Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudents;

import React from "react";

const students = [
  { id: 1, name: "Rahul Sharma", course: "B.Tech CSE", email: "rahul.sharma@univ.edu" },
  { id: 2, name: "Sneha Patel", course: "B.Sc Physics", email: "sneha.patel@univ.edu" },
  { id: 3, name: "Amit Verma", course: "B.Com", email: "amit.verma@univ.edu" },
  { id: 4, name: "Priya Singh", course: "MBA", email: "priya.singh@univ.edu" },
];

function StudentList() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Student List</h2>
      <div className="row">
        {students.map((student) => (
          <div className="col-md-4 mb-4" key={student.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{student.course}</h6>
                <p className="card-text">
                  <strong>Email:</strong> {student.email}
                </p>
                <a href={`mailto:${student.email}`} className="btn btn-primary btn-sm">
                  Contact
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;

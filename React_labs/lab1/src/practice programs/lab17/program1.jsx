import React from "react";

const faculties = [
    { name: "Dr. Asha Mehta", department: "Computer Science", email: "asha.mehta@univ.edu", image: <img src="https://media.istockphoto.com/id/492394620/photo/headache-at-workplace-difficulties-problems-fatigue-tiredness.jpg?s=2048x2048&w=is&k=20&c=A2435bj0OJnJTG7Iem6dvDPrsB4bg1VDzU0d0Aq9hhE=" alt="" height={50} width={70} srcset="" /> },
    { name: "Prof. R. Kumar", department: "Electronics", email: "rkumar@univ.edu", image: <img src="https://media.istockphoto.com/id/944060494/photo/building-up-on-their-ideas.jpg?s=2048x2048&w=is&k=20&c=7eK0DhT8fcfHEpeBg8nY8YqDHB_pweBKwi_tg8mETsM=" alt=""  height={50} width={70} srcset="" /> },
    { name: "Dr. Neha Patel", department: "Mathematics", email: "neha.patel@univ.edu", image: <img src="https://media.istockphoto.com/id/1322103500/photo/colleagues-at-law-firm-working-on-a-case-together.jpg?s=612x612&w=0&k=20&c=O7whps_8bk4B9qexmf1SVJlyPxks96P8ojra88vZjxo=" alt=""  height={50} width={70} srcset="" /> },
    { name: "Prof. A. Singh", department: "Computer Science", email: "asingh@univ.edu", image: <img src="https://media.istockphoto.com/id/1249232520/photo/confident-businessman-pointing-at-laptop-screen-discussing-strategy.jpg?s=2048x2048&w=is&k=20&c=Q5UWrwrYzYARPEGGfqWnVauazoU8a07L4xzuocEhsU4=" alt=""  height={50} width={70} srcset="" /> },
    { name: "Dr. Farah Khan", department: "Physics", email: "farah.khan@univ.edu", image: <img src="https://media.istockphoto.com/id/493307332/photo/two-businessmen-meeting-in-modern-office-with-laptop.jpg?s=612x612&w=0&k=20&c=vKB4UFmM0S6RmbasQROZoifJ1cVUxcZvBLFbw_X2KLk=" alt=""  height={50} width={70} srcset="" /> },
];

function FacultyList() {
    return (
        <div>
            <h2>Faculty List</h2>
            <table border={1} cellPadding={8} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Faculty Name</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {faculties.map((faculty) => (
                        <tr>
                            <td>{faculty.name}</td>
                            <td>{faculty.department}</td>
                            <td>{faculty.email}</td>
                            <td>{faculty.image}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FacultyList;

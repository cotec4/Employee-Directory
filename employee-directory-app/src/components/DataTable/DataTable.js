import React from 'react';
import moment from "moment";
import "./DataTable.css";

function DataTable({employees, searchTerm, sortHandler}) {
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Headshot</th>
                    <th scope="col">Title</th>
                    <th scope="col" onClick={() => { sortHandler("first") }}>First Name</th>
                    <th scope="col" onClick={() => { sortHandler("last") }}>Last Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {employees.filter(employee => employee.name.last.toLowerCase().startsWith(searchTerm.toLowerCase()) || employee.name.first.toLowerCase().startsWith(searchTerm.toLowerCase())).map((person, id) =>
                    <tr key={id}>
                        <td><img src={person.picture.thumbnail}></img></td>
                        <td>{person.name.title}</td>
                        <td>{person.name.first}</td>
                        <td>{person.name.last}</td>
                        <td>{person.gender}</td>
                        <td>{moment(person.dob.date).format("L")}</td>
                        <td>{person.email}</td>
                        <td>{person.cell}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default DataTable;
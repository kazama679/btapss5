'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function EmployeeProjects() {
    const { id } = useParams();

    const [employee, setEmployee] = useState<any>(null);

    useEffect(() => {
        const employees = JSON.parse(localStorage.getItem('employees') || '[]');
        const selectedEmployee = employees.find((emp: any) => emp.id === parseInt(id as string));
        setEmployee(selectedEmployee);
    }, [id]);
    return (
        <div>
            <nav>
                <Link href={`/bai9/${id}`}>Employee detail</Link> |{' '}
                <Link href={`/bai9/${id}/projects`}>Employee&apos;s project</Link>
            </nav>
            <h1>The employee project list has id = {id}</h1>
            <ul>
                {employee.project.map((proj: string, index: number) => (
                    <li key={index}>{proj}</li>
                ))}
            </ul>
        </div>
    );
}

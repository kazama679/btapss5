'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function EmployeeDetail() {
    const { id } = useParams();

    const [employee, setEmployee] = useState<any>(null);

    useEffect(() => {
        const employees = JSON.parse(localStorage.getItem('employees') || '[]');
        const selectedEmployee = employees.find((emp: any) => emp.id === parseInt(id as string));
        setEmployee(selectedEmployee);
    }, [id]);

    if (!employee) {
        return <div>Employee not found or still loading...</div>;
    }

    return (
        <div>
            <nav>
                <Link href={`/bai9/${id}`}>Employee detail</Link> |{' '}
                <Link href={`/bai9/${id}/projects`}>Employee&apos;s project</Link>
            </nav>
            <h1>Chi tiết nhân viên</h1>
            <div>Id: {employee.id}</div>
            <div>Name: {employee.name}</div>
            <div>Age: {employee.age}</div>
        </div>
    );
}

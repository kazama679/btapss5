'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
    const router = useRouter();

    const employees = [
        { id: 1, name: 'a', age: 19, project: ['facebook', 'lazada'] },
        { id: 2, name: 'b', age: 21, project: ['facebook2'] },
        { id: 3, name: 'c', age: 20, project: ['lazada213'] },
    ];

    const nextCheck = (id: number) => {
        // Lưu dữ liệu vào LocalStorage trước khi điều hướng
        localStorage.setItem('employees', JSON.stringify(employees));
        router.push(`/bai9/${id}`);
    };

    return (
        <div>
            {employees.map((item) => (
                <div key={item.id}>
                    <div>id: {item.id}</div>
                    <div>name: {item.name}</div>
                    <div>age: {item.age}</div>
                    <button
                        onClick={() => nextCheck(item.id)}
                        className='bg-blue-500 rounded text-gray-50 p-2'
                    >
                        Employee detail
                    </button>
                    <div>-----------------</div>
                </div>
            ))}
        </div>
    );
}

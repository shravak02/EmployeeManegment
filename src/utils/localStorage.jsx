


const employees = [
    {
        "id": 1,
        "name": "John Smith",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Complete Report",
                "taskDescription": "Prepare the monthly sales report.",
                "taskDate": "2024-11-20",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Attend Meeting",
                "taskDescription": "Join the weekly project update meeting.",
                "taskDate": "2024-11-18",
                "category": "Meetings"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix Bug",
                "taskDescription": "Resolve issue #2345 on the bug tracker.",
                "taskDate": "2024-11-15",
                "category": "Development"
            }
        ],
        "taskCounts": {
            "active": 1,
            "completed": 3,
            "failed": 0,
            "newTasks": 2
        }
    },
    {
        "id": 2,
        "name": "Sarah Johnson",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Mockup",
                "taskDescription": "Create mockups for the new website layout.",
                "taskDate": "2024-11-22",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Presentation",
                "taskDescription": "Present project updates to the client.",
                "taskDate": "2024-11-19",
                "category": "Presentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Research Competitors",
                "taskDescription": "Analyze the strategies of top competitors.",
                "taskDate": "2024-11-10",
                "category": "Research"
            }
        ],
        "taskCounts": {
            "active": 1,
            "completed": 1,
            "failed": 1,
            "newTasks": 1
        }
    },
    {
        "id": 3,
        "name": "Michael Brown",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Database Optimization",
                "taskDescription": "Optimize the performance of the database.",
                "taskDate": "2024-11-21",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests from team members.",
                "taskDate": "2024-11-17",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Test New Features",
                "taskDescription": "Test the new features for the upcoming release.",
                "taskDate": "2024-11-12",
                "category": "QA"
            }
        ],
        "taskCounts": {
            "active": 1,
            "completed": 1,
            "failed": 1,
            "newTasks": 1
        }
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Content Creation",
                "taskDescription": "Write blog posts for the company's website.",
                "taskDate": "2024-11-23",
                "category": "Content"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "SEO Analysis",
                "taskDescription": "Analyze the website's SEO performance.",
                "taskDate": "2024-11-18",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Create Infographics",
                "taskDescription": "Design infographics for the new campaign.",
                "taskDate": "2024-11-14",
                "category": "Design"
            }
        ],
        "taskCounts": {
            "active": 1,
            "completed": 1,
            "failed": 1,
            "newTasks": 1
        }
    },
    {
        "id": 5,
        "name": "David Martinez",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Documentation",
                "taskDescription": "Update user manuals and API documentation.",
                "taskDate": "2024-11-24",
                "category": "Documentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team Training",
                "taskDescription": "Conduct training sessions for the new tools.",
                "taskDate": "2024-11-19",
                "category": "Training"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Inventory Audit",
                "taskDescription": "Perform an audit of the company's inventory.",
                "taskDate": "2024-11-16",
                "category": "Audit"
            }
        ],
        "taskCounts": {
            "active": 1,
            "completed": 1,
            "failed": 1,
            "newTasks": 1
        }
    }
];


const admin = [
    {
        "id": 1,
        "name": "David Martinez",
        "email": "admin@example.com",
        "password": "123"
    }
];
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}

}
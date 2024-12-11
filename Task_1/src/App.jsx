import { useState } from "react";

import "./App.css";

function App() {
  
    const [data, setData] = useState([
        { task: "Onboarding Call", status: "" },
        { task: "Google Search Console Access", status: "" },
        { task: "Google Analytics Access", status: "" },
        { task: "Website Access", status: "" },
        { task: "Technical Audit", status: "" },
        { task: "Anchor Text and Semantic Analysis", status: "" },
        { task: "Competitor Analysis", status: "" },
        { task: "Anchor Text / URL Mapping", status: "" },
        { task: "Google Data Studio Report + Local Reporting Suite", status: " " },
        { task: "Site Level Optimization", status: "" },
        { task: "On Page Optimization", status: "" },
        { task: "Content Creation", status: "" },
        { task: "Content Publishing", status: "" },
        { task: "Premium Press Release", status: "" },
        { task: "Authority Niche Placements", status: "" },
        { task: "Review Management", status: "" },
        { task: "Index Links", status: "" },
        { task: "Video Recap", status: "" },
    ]);

    const handleEdit = (index, field, value) => {
        const newData = [...data];
        newData[index][field] = value;
        setData(newData);
    };

    const handleSave = () => {
        // This data can now be posted to an API
        console.log("Data ready for API:", data);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="text"
                                    value={data.task}
                                    onChange={(e) => handleEdit(index, "task", e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={data.status}
                                    onChange={(e) => handleEdit(index, "status", e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleSave}>Save Data</button>
        </div>
    );
}

export default App;

import { useState } from "react";

const AdminPanel = ({ jobs, setJobs }) => {
  const [jobDetails, setJobDetails] = useState({ company: "", stipend: "", description: "", link: "" });

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  const addJob = () => {
    if (!jobDetails.company || !jobDetails.stipend || !jobDetails.description || !jobDetails.link) {
      alert("Please fill in all fields");
      return;
    }
    setJobs([...jobs, jobDetails]);
    setJobDetails({ company: "", stipend: "", description: "", link: "" });
    alert("Job added successfully");
  };

  return (
    <div className="content" >
      <h2 className="heading">Admin Panel</h2>
      <input type="text" name="company" placeholder="Company Name" value={jobDetails.company} onChange={handleChange} />
      <input type="text" name="stipend" placeholder="Stipend" value={jobDetails.stipend} onChange={handleChange} />
      <input type="text" name="description" placeholder="Job Description" value={jobDetails.description} onChange={handleChange} />
      <input type="text" name="link" placeholder="Application Link" value={jobDetails.link} onChange={handleChange} />
      <button onClick={addJob}>Add Job</button>
    </div>
  );
};

export default AdminPanel;
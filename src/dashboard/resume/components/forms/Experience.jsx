import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react';
import RichTextEditor from '../RichTextEditor';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';

function Experience() {
    const [experienceList, setExperienceList] = useState([]);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const { resumeId } = useParams(); // Assuming resumeId is being used for identification
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (resumeInfo?.Experience && resumeInfo.Experience.length > 0) {
            setExperienceList(resumeInfo.Experience);
        }
    }, [resumeInfo]);

    const handleChange = (index, event) => {
        const newEntries = experienceList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        setExperienceList(newEntries);
    };

    const AddNewExperience = () => {
        setExperienceList([...experienceList, {
            title: '',
            companyName: '',
            city: '',
            state: '',
            startDate: '',
            endDate: '',
            workSummery: '',
        }]);
    };

    const RemoveExperience = () => {
        setExperienceList(experienceList.slice(0, -1));
    };

    const handleRichTextEditor = (event, name, index) => {
        const newEntries = experienceList.slice();
        newEntries[index][name] = event.target.value;
        setExperienceList(newEntries);
    };

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            Experience: experienceList,
        });
    }, [experienceList, setResumeInfo]);

    const onSave = (e) => {
        e.preventDefault();
        setLoading(true);

        // Combine experience list with existing resume info
        const updatedData = { ...resumeInfo, Experience: experienceList };

        setTimeout(() => {
            const storedResumes = JSON.parse(localStorage.getItem('resumes')) || [];
            const updatedResumes = storedResumes.map(resume =>
                resume.resumeId === resumeId ? updatedData : resume
            );

            // If the resume doesn't exist, add it
            if (!storedResumes.some(resume => resume.resumeId === resumeId)) {
                updatedResumes.push(updatedData);
            }

            localStorage.setItem('resumes', JSON.stringify(updatedResumes));
            setResumeInfo(updatedData);
            toast("Details saved successfully");
            setLoading(false);
        }, 1500); // Simulate a delay for the loading animation
    };

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Professional Experience</h2>
                <p>Add Your previous Job experience</p>
                <div>
                    {experienceList.map((item, index) => (
                        <div key={index}>
                            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                                <div>
                                    <label className='text-xs'>Position Title</label>
                                    <Input name="title"
                                        onChange={(event) => handleChange(index, event)}
                                        value={item?.title}
                                    />
                                </div>
                                <div>
                                    <label className='text-xs'>Company Name</label>
                                    <Input name="companyName"
                                        onChange={(event) => handleChange(index, event)}
                                        value={item?.companyName} />
                                </div>
                                <div>
                                    <label className='text-xs'>City</label>
                                    <Input name="city"
                                        onChange={(event) => handleChange(index, event)}
                                        value={item?.city} />
                                </div>
                                <div>
                                    <label className='text-xs'>State</label>
                                    <Input name="state"
                                        onChange={(event) => handleChange(index, event)}
                                        value={item?.state}
                                    />
                                </div>
                                <div>
                                    <label className='text-xs'>Start Date</label>
                                    <Input type="date"
                                        name="startDate"
                                        onChange={(event) => handleChange(index, event)}
                                        value={item?.startDate} />
                                </div>
                                <div>
                                    <label className='text-xs'>End Date</label>
                                    <Input type="date" name="endDate"
                                        onChange={(event) => handleChange(index, event)}
                                        value={item?.endDate}
                                    />
                                </div>
                                <div className='col-span-2'>
                                    {/* Work Summary  */}
                                    <RichTextEditor
                                        index={index}
                                        value={item?.workSummery}
                                        onRichTextEditorChange={(event) => handleRichTextEditor(event, 'workSummery', index)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <Button variant="outline" onClick={AddNewExperience} className="text-primary"> + Add More Experience</Button>
                        <Button variant="outline" onClick={RemoveExperience} className="text-primary"> - Remove</Button>
                    </div>
                    <Button disabled={loading} onClick={onSave}>
                        {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Experience;

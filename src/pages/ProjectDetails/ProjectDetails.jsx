import { useParams } from 'react-router-dom';

export default function ProjectDetails() {
    const { id } = useParams();
    return <>
        <h1 className='text-white-50 text-3xl font-semibold'>ID of this page is: {id}</h1>
    </>
}

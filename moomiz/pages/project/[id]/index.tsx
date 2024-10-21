import React from 'react';
import { useRouter } from 'next/router';
import NevvelDetail from '@/components/projectDetail/NevvelDetail';
import GhemDetail from '@/components/projectDetail/GhemDetail';
import PitchitDetail from '@/components/projectDetail/PitchitDetail';
import StarBackground from '@/components/projectDetail/ghem/StarBackground';
function index() {
    const router = useRouter();
    const id = router.query.id;
    
    switch(id){
        case "Nevvel":
            return(<NevvelDetail  />);
        case "GHEM":
            return (
            <>
            <StarBackground />
            <GhemDetail />
            </>
            );
        case "PITCHIT":
            return (<PitchitDetail />)
        default: return <div>점검입니다</div>
        }
}

export default index

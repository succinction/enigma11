import TriangleMask from "./triangle-mask";
import styled from 'styled-components';

export function Mandala({ transformationCode }: { transformationCode: string }) {
    return (
        <>
            <div>{transformationCode}</div>
            <Arrangement>
                <TriangleMask id="slice1" />
                <TriangleMask id="slice2" />
                <TriangleMask id="slice3" />
                <TriangleMask id="slice4" />
                <TriangleMask id="slice5" />
                <TriangleMask id="slice6" />
                <TriangleMask id="slice7" />
                <TriangleMask id="slice8" />
                <TriangleMask id="slice9" />
                <TriangleMask id="slice10" />
            </Arrangement>
        </>
    )
}

export default Mandala;

const Arrangement = styled.div`
    position: absolute;
    top: 100px; 
    #slice1 {
        position: absolute;
        top: 348px;
        left: 299px;
        transform: rotate(0deg);
    }
    #slice2 {
        position: absolute;
        top: 317px;
        left: 205px;
        transform: rotate(36deg);
    }
    #slice3 {
        position: absolute;
        top: 236px;
        left: 146px;
        transform: rotate(72deg);
    }
    #slice4 {
        position: absolute;
        top: 136px;
        left: 146px;
        transform: rotate(108deg);
    }
    #slice5 {
        position: absolute;
        top: 55px;
        left: 205px;
        transform: rotate(144deg);
    }
    #slice6 {
        position: absolute;
        top: 25px;
        left: 300px;
        transform: rotate(180deg);
    }
    #slice7 {
        position: absolute;
        top: 56px;
        left: 394px;
        transform: rotate(216deg);
    }
    #slice8 {
        position: absolute;
        top: 136px;
        left: 451px;
        transform: rotate(252deg);
    }
    #slice9 {
        position: absolute;
        top: 236px;
        left: 451px;
        transform: rotate(288deg);
    }
    #slice10 {
        position: absolute;
        top: 316px;
        left: 394px;
        transform: rotate(324deg);
    }
`;
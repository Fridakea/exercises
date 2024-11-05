import Image from 'next/image';
import navy from "../images/navy.png";
import mint from "../images/mint.png";
import ocean from "../images/ocean.png";

export const ProductCard = ({ selectedWatch }) => {
    return (
        <div>
            {selectedWatch === 0 && <Image src={navy} alt={"Navy farvet iWatch"}/>}
            {selectedWatch === 1 && <Image src={mint} alt={"Mint farvet iWatch"}/>}
            {selectedWatch === 2 && <Image src={ocean} alt={"Ocean farvet iWatch"}/>}
        </div>
    )
}
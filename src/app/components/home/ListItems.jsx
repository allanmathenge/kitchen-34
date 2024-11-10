import Image from "next/image"
import Link from "next/link"

export default function ListItems({ item }) {
    const {name, image} = item
  return (
    <>
        {    
            <div className="shadow-sm hover:shadow-md flex flex-col items-center justify-around w-[110px] sm:w-[130px] h-[130px]">
                <Image src={image} alt={name} priority width={108} height={108} className="overflow-hidden w-auto h-auto" />
                <Link className="no-underline" href="">
                    <p className="text-start text-[10px] capitalize mb-0 px-2">{name}</p>
                </Link>
            </div>
        }
    </>
  )
}

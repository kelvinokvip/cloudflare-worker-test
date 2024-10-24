import { Card, CardHeader } from "@nextui-org/react"
import { Image } from "@nextui-org/image";
import { useRouter } from "next/router";

export const CustomCard = ({ title, image, slug }: any) => {
    const router = useRouter()

    const handleClick = (e: any, slug: any) => {
        console.log(slug)

        // router.push(slug)
    }
    return <Card className="col-span-12 sm:col-span-4 h-[300px] hover:cursor">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start" >
            {/* <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p> */}
            <h4 className="text-black font-medium text-large">{title ? title : "Stream the Acme event"}</h4>
        </CardHeader>
        <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={image ? image : "https://nextui.org/images/card-example-4.jpeg"}
        />
    </Card>
}
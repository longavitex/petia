import Image from "next/image"
import Link from "next/link"

const About = () => {
    return (
        <>
            <div className="about-block md:pt-20 pt-12">
                <div className="container">
                    <div className="flex max-lg:flex-col items-center justify-between gap-14 gap-y-4">
                        <div className="left lg:w-1/2 sm:w-2/3 w-full">
                            <Image
                                src={'/images/other/about-home1.png'}
                                width={1000}
                                height={1000}
                                alt="img"
                                priority={true}
                                className="w-full"
                            />
                        </div>
                        <div className="right lg:w-1/2 w-full sm:pr-14">
                            <div className="text-heading">A few words about us</div>
                            <div className="text-title text-grey mt-4">
                                Petia is a pet accessory store specializing in providing quality and diverse pet accessories, offering the best experience for you and your furry friends.
                            </div>
                            <div className="text-title text-grey mt-2">
                                Here, we are committed to providing products for the care and beautification of your pets, from everyday utility items to unique fashion accessories. With a mission to respect and love animals, we always aspire to accompany you in creating a peaceful and happy living environment for your pet.
                            </div>
                            <Link href={'/about'} className="button-main mt-6">See More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About
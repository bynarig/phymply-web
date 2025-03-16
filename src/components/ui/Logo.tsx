
interface LogoProps {
    className?: string;
    imageClassName?: string;
}

export default function Logo({className = "w-50 h-50" , imageClassName}: LogoProps) {
    return(
        <div className={className}>
            <img
                            className={imageClassName}
                            alt="Phymply logo"
                            src="phymply-logo.png"/>
        </div>

    )
}
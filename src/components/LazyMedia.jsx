import { useInView } from "react-intersection-observer";

function LazyMedia({ src, className, type = "video", alt = "", ...props }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.01,
    });

    return (
        <>
            {type === "video" ? (
                <video
                    ref={ref}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className={className}
                    {...props}
                    src={inView ? src : undefined}
                ></video>
            ) : (
                <img
                    ref={ref}
                    className={className}
                    {...props}
                    alt={alt}
                    src={inView ? src : undefined}
                />
            )}
        </>
    );
}

export default LazyMedia;

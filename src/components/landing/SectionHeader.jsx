
export default function SectionHeader({ title, description }) {
    return (
        <>
            <div className="text-center mb-14">
                <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
                    <span className="before:absolute before:-left-14 before:top-1/2 before:w-12 before:h-[2px] before:bg-yellow-500
                         after:absolute after:-right-14 after:top-1/2 after:w-12 after:h-[2px] after:bg-yellow-500">
                        {title}
                    </span>
                </h2>
                <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                    {description}
                </p>
            </div>
        </>
    );
}
import React from 'react'

function BreadcrumbHeroSection({title}) {
    return (
        <div>
            <section
                className="relative h-[320px] flex items-center justify-center text-center"
                style={{
                    backgroundImage: "url('/assets/img/breadcrumbs-bg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        {title}
                    </h1>
                    <p className="text-sm text-gray-300">
                        Home / <span className="text-yellow-400">{title}</span>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default BreadcrumbHeroSection
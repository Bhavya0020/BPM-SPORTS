const Hero = () => {
    return ( 
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">BPM Sports</h1>
                <p className="mb-5">
                    Shop the latest in sports apparel, footwear, and equipment for every sport.
                </p>
                <button 
                    className="btn btn-primary bg-primary hover:bg-secondary text-white border border-white"
                >
                    <a href="/shop">
                        Shop Now
                    </a>
                </button>
                </div>
            </div>
            </div>
     );
}
 
export default Hero;
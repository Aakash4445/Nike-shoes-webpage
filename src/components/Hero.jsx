const HeroSection = () =>{


    return (
        <main className="hero container">
            <div className="hero-content" >
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>

                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                </div>

                <div className="brand-icons">
                    <img src="https://freelogopng.com/images/all_img/1688364462amazon-icon-png.png" alt="amazon-logo" width={30} height={30}/>
                    <img src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-inventory-management-system-zap-inventory-1.png" alt="flipcard-logo" width={30} height={30}/>

                </div>

            </div>

            <div className="hero-image">
                <img src="/images/shoes.png" alt="hero-image" width={530} height={487}/>

            </div>
        </main>
    );

};
export default HeroSection;
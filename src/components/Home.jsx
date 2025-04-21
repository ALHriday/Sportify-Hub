import { Link } from "react-router-dom";
import Banner from "./Banner";
import Products from "./Products";
import { FaCartArrowDown } from "react-icons/fa";
import FAQ from "./FAQ";

const Home = () => {

    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <div className="text-center px-4 py-6">
                <h1 className="font-bold mb-1">Welcome to Sportify Hub – Your One-Stop Shop for All Things Sports!</h1>

                <p>At Sportify Hub, we’re passionate about empowering athletes and sports enthusiasts with the best gear, apparel, and accessories. Whether you’re a seasoned professional or just starting your fitness journey, we’ve got everything you need to stay ahead of the game.</p>
            </div>
            <Products></Products>

            <div className="py-6 flex justify-center items-center gap-2">
                <Link className="btn" to='/Equipments'>Go to All Equipments</Link>
                <Link className="btn" to='/cart'> <FaCartArrowDown /> </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 p-4 my-12">
                <h1 className="text-2xl text-center col-span-3 text-slate-400 py-2">Your One-Stop Shop for Sports Excellence.</h1>
                <div className="row-span-2">
                    <img className="w-full h-[268px] md:h-[428px] rounded-xl object-cover" src="https://images.unsplash.com/photo-1652497213813-89e58c19f678?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <img className="w-full h-32 md:h-52 rounded-xl object-cover" src="https://plus.unsplash.com/premium_photo-1714573003386-4a73faaaa925?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <img className="w-full h-32 md:h-52 rounded-xl object-cover" src="https://images.unsplash.com/photo-1602211847326-dd96f7c45f10?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <img className="w-full h-32 md:h-52 rounded-xl object-cover" src="https://images.unsplash.com/photo-1592592878585-abcaaaaf7cd1?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <img className="w-full h-32 md:h-52 rounded-xl object-cover" src="https://plus.unsplash.com/premium_photo-1714573122708-d1b42332e0a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>

            <FAQ></FAQ>

        </div>
    );
};

export default Home;
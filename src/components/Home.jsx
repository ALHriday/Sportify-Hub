import Banner from "./Banner";
import Products from "./Products";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <Products></Products>

            <div className="grid grid-cols-3 gap-3 p-4 my-12">
                <h1 className="text-2xl text-center col-span-3 text-slate-400 py-2">Your One-Stop Shop for Sports Excellence.</h1>
                <div className="row-span-2">
                    <img className="w-full h-[268px] md:h-[428px] rounded-xl" src="https://images.unsplash.com/photo-1652497213813-89e58c19f678?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <img className="w-full h-32 md:h-52 rounded-xl" src="https://plus.unsplash.com/premium_photo-1714573003386-4a73faaaa925?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <img className="w-full h-32 md:h-52 rounded-xl" src="https://images.unsplash.com/photo-1602211847326-dd96f7c45f10?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <img className="w-full h-32 md:h-52 rounded-xl" src="https://images.unsplash.com/photo-1592592878585-abcaaaaf7cd1?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <img className="w-full h-32 md:h-52 rounded-xl" src="https://plus.unsplash.com/premium_photo-1714573122708-d1b42332e0a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {

    const logggedIn = { firstName: "Walter", lastName: "Nathaniel", email: "walternathaniel@proton.me" };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome!"
                        user={logggedIn?.firstName || "Guest"}
                        subtext = "Access and manage your account and transactions efficiently."
                    />


                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>

            <RightSidebar 
                user={logggedIn}
                transactions={[]}
                banks={[]}
            />
        </section>
    )
}

export default Home;
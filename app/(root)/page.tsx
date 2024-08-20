import { HeaderBox } from "@/components/HeaderBox";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";
import React  from "react";

const Home = () => {

const loggedIn = {firstName: 'Pasindu'};

    return(
        <section className="home">
            <div className="home-content">
                <div className="home-header">
                    <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || "Guest"}
                    subtext="Access and manage your accountand transactions efficiently"
                    />

                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.54}
                    />
                </div>
            </div>
        </section>
    )
}

export default Home
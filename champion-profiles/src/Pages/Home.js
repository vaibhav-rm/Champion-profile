import React from "react";
import { Link } from "react-router-dom";
import ChampionCard from "../Components/ChampionCard";
import "./Home.css"; 

function Home() {
    return (
        <div>
            <header className="navbar">
                <h1>Know Your Favorite Sports Person</h1>
                <div className="navbar-controls">
                    <input type="text" placeholder="Search..." className="search-bar" />
                    <button className="navbar-button">Home</button>
                    <button className="navbar-button">About</button>
                    <button className="navbar-button">Contact</button>
                </div>
            </header>

            <main>
                <center>
                    <p>Welcome to the homepage! Discover more about your favorite sports personalities.</p>
                </center>
                <div className="photo-gallery">
                    <ChampionCard
                        imgSrc="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
                        altText="Virat Kohli"
                        name="Virat_Kohli"
                        profileLink="/athlete-profile/Virat_Kohli"
                    />
                    <ChampionCard
                        imgSrc="https://assets.architecturaldigest.in/photos/63806da6d2c4a1a597b273fd/16:9/w_2560,c_limit/1442809583"
                        altText="Lionel Messi"
                        name="Lionel_Messi"
                        profileLink="/athlete-profile/Lionel_Messi"
                    />
                    <ChampionCard
                        imgSrc="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-usain-bolt-jamaica-00-ca27a8f5-bd2b-4d61-ab45-fe51ee33626c.jpg?w=910&h=511&crop=1"
                        altText="Usain Bolt"
                        name="Usain_Bolt"
                        profileLink="/athlete-profile/Usain_Bolt"
                    />
                    <ChampionCard
                        imgSrc="https://facts.net/wp-content/uploads/2023/07/16-facts-about-roger-federer-1689677372.jpg"
                        altText="Roger Federer"
                        name="Roger_Federer"
                        profileLink="/athlete-profile/Roger_Federer"
                    />
                    <ChampionCard
                        imgSrc="https://tmssl.akamaized.net/images/foto/galerie/cristiano-ronaldo-manchester-united-1636635187-74572.jpg?lm=1636635200"
                        altText="Cristiano Ronaldo"
                        name="Cristiano_Ronaldo"
                        profileLink="/athlete-profile/Cristiano_Ronaldo"
                    />
                    <ChampionCard
                        imgSrc="https://static.iwmbuzz.com/wp-content/uploads/2020/02/the-controversial-life-of-mahendra-singh-dhoni-2-920x518.jpg"
                        altText="MS Dhoni"
                        name="Mahendra_Singh_Dhoni"
                        profileLink="/athlete-profile/Mahendra_Singh_Dhoni"
                    />
                    <ChampionCard
                        imgSrc="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/qpr4zk5ybnwg0gpmuctd"
                        altText="Neeraj Chopra"
                        name="Neeraj_Chopra"
                        profileLink="/athlete-profile/Neeraj_Chopra"
                    />
                    <ChampionCard
                        imgSrc="https://cdn.britannica.com/33/226733-050-1F65CDDD/Rafael-Nadal-championship-trophy-US-Open-USTA-Billie-Jean-King-National-Tennis-Center-September-8-2019.jpg"
                        altText="Rafael Nadal"
                        name="Rafael_Nadal"
                        profileLink="/athlete-profile/Rafael_Nadal"
                    />
                    <ChampionCard
                        imgSrc="https://static.toiimg.com/thumb/msid-111741230,width-1280,height-720,resizemode-4/111741230.jpg"
                        altText="Rohit Sharma"
                        name="Rohit_Sharma"
                        profileLink="/athlete-profile/Rohit_Sharma"
                    />
                    <ChampionCard
                        imgSrc="https://pbs.twimg.com/media/F0RpWi8aIAAQ9BT?format=jpg&name=large"
                        altText="Sunil Chhetri"
                        name="Sunil_Chhetri"
                        profileLink="/athlete-profile/Sunil_Chhetri"
                    />
                    <ChampionCard
                        imgSrc="https://images.news18.com/ibnlive/uploads/2023/10/abhinav-bindra-2023-10-f1c32f444acfd87c71195c5a893becfb.png"
                        altText="Abhinav Bindra"
                        name="Abhinav_Bindra"
                        profileLink="/athlete-profile/Abhinav_Bindra"
                    />
                    <ChampionCard
                        imgSrc="https://images.squarespace-cdn.com/content/v1/5943b11db3db2be040e6fa54/1517547996823-SDZBYATN97PPD9IHFMU8/phoca_thumb_l_viswanathan+anand+4.jpg"
                        altText="Viswanathan Anand"
                        name="Viswanathan_Anand"
                        profileLink="/athlete-profile/Viswanathan_Anand"
                    />
                    <ChampionCard
                        imgSrc="https://media.gettyimages.com/id/690026948/photo/london-england-ab-de-villiers-of-south-africa-poses-for-a-portrait-at-royal-garden-hotel-on.jpg?s=612x612&w=gi&k=20&c=c3fnAz69084UpoYEp3GgR2iushCF8f9GgPqLpWk_c-g="
                        altText="AB de Villiers"
                        name="AB_de_Villiers"
                        profileLink="/athlete-profile/AB_de_Villiers"
                    />
                     <ChampionCard
                        imgSrc="https://media.gettyimages.com/id/690026948/photo/london-england-ab-de-villiers-of-south-africa-poses-for-a-portrait-at-royal-garden-hotel-on.jpg?s=612x612&w=gi&k=20&c=c3fnAz69084UpoYEp3GgR2iushCF8f9GgPqLpWk_c-g="
                        altText="AB de Villiers"
                        name="AB_de_Villiers"
                        profileLink="/athlete-profile/AB_de_Villiers"
                    />
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Favorite Sports Person</p>
            </footer>
        </div>
    );
}

export default Home;

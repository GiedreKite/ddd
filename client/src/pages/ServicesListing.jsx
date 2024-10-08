import { useEffect, useState } from "react";
import { Footer } from "../components/footer/Footer.jsx";
import { Header } from "../components/header/Header.jsx";
import { ServiceCard } from "../components/services/ServiceCard.jsx";

export function ServicesListing() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5173/api/locations')
            .then(res => res.json())
            .then(obj => {
                if (typeof obj !== 'object') {
                    throw new Error('Is serverio atejo ne objektas');
                } else {
                    setLocations(obj.data);
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Lankytinos vietos</h1>
                            <p>Perziurek ir issirink vietas, kurias noretum aplankyti!</p>
                        </div>
                    </div>
                </div>
                <div className="container px-4 py-5">
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        {locations.map((location, index) => <ServiceCard key={index} {...location} />)}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
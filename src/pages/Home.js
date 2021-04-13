import Badge from "../components/Badge"
import EducationList from "../components/EductionList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import WorkList from "../components/WorkList";

const Home = () => {
    return ( 
        <div className="container-fluid" style={{ backgroundColor : "whitesmoke"}}>
            <Header />
            <Badge />
            <Skills />
            <WorkList />
            <EducationList />
            <Footer />
        </div>
     );
}
 
export default Home;
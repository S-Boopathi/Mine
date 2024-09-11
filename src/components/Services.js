import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">Project</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="E-commerce website" img="card1.png" text="We are providing preE-Commerce Website
Build a basic Bookstore site with product listings, a shopping 
cart, and a checkout process. fetching a data using api. You 
can add advanced features like user accounts, reviews, and even 
integers with payment gateways. Technologies used: React.js 
and CSS .Linkmium websites " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="News portal" img="card2.png" text="I created a news portal website using React.js, HTML, CSS, 
Bootstrap, and JavaScript. This website features a user friendly interface that delivers the latest news and updates 
across devices. The combination of React.js and Bootstrap 
ensures a responsive and visually appealing design, providing 
users with a seamless browsing experience" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Personal Portfolio Website  " img="card3.png" text="Designed and Developed a personal portfolio website using 
React.js " />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Services;

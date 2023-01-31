import React from "react";
import NavBar from "./NavBar";
import styles from "./Contact.module.css";
import Footer from "./Footer";

function About() {
  return (
    <>
      <NavBar />
      <div className="container mt-4 minHeightContainer">
        <h2 className={styles.title}>CONTACT</h2>
        <hr className="text-white-50 mb-5"></hr>
        <div className="row text-white-50 fw-light ">
          <div className="col-md-6 contactP">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            voluptatibus nesciunt officiis! Aspernatur temporibus, nesciunt cum
            eaque soluta numquam tempora nostrum. Maxime magnam exercitationem,
            porro eos tenetur a doloremque maiores. Magnam vitae enim iusto,
            asperiores id eos optio illo, tempora, a molestias corrupti
            excepturi eaque vel placeat totam eligendi ex commodi. Maxime
            dolorum molestiae ut nostrum eaque explicabo, libero odit! Vel
            corporis reprehenderit, consequuntur explicabo consectetur illo aut
            inventore ipsa perspiciatis iste, commodi recusandae nesciunt iure
            incidunt placeat quae quasi dolorem. Non debitis rem nostrum
            assumenda tenetur, atque nobis reiciendis?
          </div>
          <div className="col-md-6 contactP">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            voluptatibus nesciunt officiis! Aspernatur temporibus, nesciunt cum
            eaque soluta numquam tempora nostrum. Maxime magnam exercitationem,
            porro eos tenetur a doloremque maiores. Magnam vitae enim iusto,
            asperiores id eos optio illo, tempora, a molestias corrupti
            excepturi eaque vel placeat totam eligendi ex commodi. Maxime
            dolorum molestiae ut nostrum eaque explicabo, libero odit! Vel
            corporis reprehenderit, consequuntur explicabo consectetur illo aut
            inventore ipsa perspiciatis iste, commodi recusandae nesciunt iure
            incidunt placeat quae quasi dolorem. Non debitis rem nostrum
            assumenda tenetur, atque nobis reiciendis?
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

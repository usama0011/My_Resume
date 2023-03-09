import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/CreativePortfolio.module.css";
import AllListItems from "../components/PortfolioData.json";
const CreativePortfolio = () => {
  const [activeItem, setActiveItem] = useState("AllItems");

  return (
    <div id="portfolio" className={styles.container}>
      <p className={styles.header}>PORTFOLIO</p>
      <div className={styles.navigation_buttons}>
        <div className={styles.heading}>
          <h2>Creative Portfolio</h2>
        </div>
        <div className={styles.nav_buttons}>
          <ul>
            <li
              style={
                activeItem === "AllItems"
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
              onClick={() => setActiveItem("AllItems")}
            >
              All
            </li>
            <li
              style={
                activeItem === "Desing"
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
              onClick={() => setActiveItem("Desing")}
            >
              React JS
            </li>
            <li
              style={
                activeItem === "Branding"
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
              onClick={() => setActiveItem("Branding")}
            >
              Next JS
            </li>
            <li
              style={
                activeItem === "Photography"
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
              onClick={() => setActiveItem("Photography")}
            >
              HTML,CSS,JS
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.gridBox}>
        {activeItem === "AllItems" ? (
          <div className={styles.grid_Container}>
            {AllListItems.map((item) => (
              <Link href={`creativeportfolio/${item.id}`} key={item.id}>
                <div className={styles.image_Container}>
                  <Image
                    className={styles.single_image}
                    src={item.image}
                    width={350}
                    height={200}
                    alt="userProjectImage"
                  />
                  <div className={styles.subTitle}>
                    <span>{item.projectName}</span>
                    <span>{item.technologyStack}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
        {activeItem === "Desing" ? (
          <div className={styles.grid_Container}>
            {AllListItems.filter(
              (item) => item.technologyStack === "Node JS"
            ).map((item, i) => {
              return (
                <>
                  <Link href={`creativeportfolio/${item.id}`} key={item.id}>
                    <div key={item.id} className={styles.image_Container}>
                      <Image
                        className={styles.single_image}
                        src={item.image}
                        key={i}
                        width={350}
                        height={200}
                        alt="userProjectImage"
                      />
                      <div className={styles.subTitle}>
                        <span>{item.projectName}</span>
                        <span>{item.technologyStack}</span>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        ) : null}
        {activeItem === "Branding" ? (
          <div className={styles.grid_Container}>
            {AllListItems.filter(
              (item) => item.technologyStack === "Redux"
            ).map((item, i) => {
              return (
                <>
                  <Link href={`creativeportfolio/${item.id}`} key={item.id}>
                    <div key={item.id} className={styles.image_Container}>
                      <Image
                        className={styles.single_image}
                        src={item.image}
                        key={i}
                        width={350}
                        height={200}
                        alt="userProjectImage"
                      />
                      <div className={styles.subTitle}>
                        <span>{item.projectName}</span>
                        <span>{item.technologyStack}</span>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        ) : null}
        {activeItem === "Photography" ? (
          <div className={styles.grid_Container}>
            {AllListItems.filter(
              (item) => item.technologyStack === "HTML,CSS,JS"
            ).map((item, i) => {
              return (
                <>
                  <Link href={`creativeportfolio/${item.id}`} key={item.id}>
                    <div key={item.id} className={styles.image_Container}>
                      <Image
                        className={styles.single_image}
                        src={item.image}
                        key={i}
                        width={350}
                        height={200}
                        alt="userProjectImage"
                      />
                      <div className={styles.subTitle}>
                        <span>{item.projectName}</span>
                        <span>{item.technologyStack}</span>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className={styles.explore}>
        <Link className={styles.exploreLink} href="/creativeportfolio">
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default CreativePortfolio;
